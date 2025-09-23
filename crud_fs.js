const fs = require('fs');          // File System module आयात केलं
const path = require("path");      // Path module आयात केलं

const myCURD = path.join(__dirname, 'CURD'); // CURD नावाची फोल्डर पाथ बनवली
const mypath = `${myCURD}/crud1.txt`;        // फोल्डर + फाईल नाव मिळून path तयार केला

// create
// fs.writeFileSync(mypath, "Create Read Update and Delete File Using Node.js");
    
// read
// fs.readFile(mypath, (err, file) => {
//     console.log(file);
// })

// update
// fs.appendFile(mypath, "hi node js..........!!!", (err) => {
//     if(!err)
//     {
//         console.log("Your file is updated sucessfully......!!!");
//     }
// });

// delete
// fs.unlinkSync(mypath);


// rename file name
fs.rename(mypath, `${myCURD}/rename.txt`, (err) =>{
    if(!err)
    {
        console.log("Your file name is renamed sucessfully......!!!");
    }   
})
