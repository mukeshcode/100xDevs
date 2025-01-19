const fs = require('fs');

function readFilePromisified(fileName, fileEncoding){
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, fileEncoding, (err, data) => {
      if(err) reject(err);
      else resolve(data);
    })
  })
};

readFilePromisified('a.txt', 'utf-8')
  .then((data) => {
    console.log("A file content : ");
    console.log(data);
    return readFilePromisified('b.txt', 'utf-8');
  })
  .catch((err) => {
    console.log("Error while reading 'a.txt'");
    console.log(err);
  })
  .then((data) => {
    console.log("B file content");
    console.log(data);
    return readFilePromisified('c.txt', 'utf-8');
  })
  .catch((err) => {
    console.log("Error while reading 'b.txt'");
    console.log(err);
  })
  .then((data) => {
    console.log("C file content : ");
    console.log(data);
  })
  .catch(err => {
    console.log("Error while reading 'c.txt'")
    console.log(err);
  })