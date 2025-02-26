// 使用dotenv
require("dotenv").config();

// 嵌套配置不方便
console.log(process.env);

// 使用config读取json配置文件

const config = require("config");
console.log("config read json:", config.get("db"));
// yaml只需要把文件后缀和文件内容改掉即可
