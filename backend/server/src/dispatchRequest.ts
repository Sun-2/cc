import * as lua from "@cc/lua";
import { v4 as uuidv4 } from "uuid";

export type Dispatcher = {
  [T in keyof typeof lua]: (
    ...args: Parameters<typeof lua[T]>
  ) => Promise<{ answer: any }>;
};

export const makeDispatcher = conn =>
  Object.entries(lua).reduce((acc, [name, func]) => {
    acc[name] = (...args: Parameters<typeof func>) =>
      new Promise((res, rej) => {
        const id = uuidv4();
        const listener = msg => {
          try {
            const data = JSON.parse(msg.data);
            if (data.id === id) {
              if (data.error) rej(data.error);
              else res({ answer: data.answer });
              conn.removeEventListener("message", listener);
            }
          } catch (e) {}
        };
        conn.addEventListener("message", listener);

        conn.send(JSON.stringify({ id, type: "execute", code: func(...args) }));
      });
    return acc;
  }, {} as Dispatcher);