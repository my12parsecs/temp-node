const {readFileSync, writeFileSync} = require("fs")
// 同じことを違う方法
// const fs = require("fs")
// fs.readFileSync
console.log("start");

const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")

writeFileSync(
    "./content/result-sync.txt", //if no such file exists, it will auto create
    `Here is the result: ${first}, ${second}`,
    {flag: "a"} //not override, 追加する　(default is override)
)

console.log("done with task")
console.log("starting next task")