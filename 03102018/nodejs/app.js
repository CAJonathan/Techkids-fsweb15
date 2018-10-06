const fs = require("fs");;
const http = require("http");

const server = http.createServer();
server.listen(3000);

//localhost:3000

var objData = {
    name: "Son",
    age: 18
}
//JSON
fs.writeFileSync("test.json", JSON.stringify(objData), (err)=>{
    if(err) console.log("cc");
})

const fileData = fs.readFileSync("test.json", {encoding: "utf-8"});

const obj = JSON.parse(fileData);
console.log(obj.name);