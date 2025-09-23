const fs = require('fs');

// fs.writeFileSync('showFile.txt', 'This is my first file created using Node.js');

const path = require("path");

const myFolder = path.join(__dirname, 'myfolder');

for (let i = 1; i<=3; i++) 
{
    fs.writeFileSync(`${myFolder}/file${i}.txt`, `This is file number ${i}`);
}

fs.readdir(myFolder,( err, files) => {
    // console.log(files);
    files.forEach((files) => {
        console.log(files); 
    })
})