local name = "%%name%%" -- type:string
local json = require("json")

print(json.encode({name, 1, 2}))