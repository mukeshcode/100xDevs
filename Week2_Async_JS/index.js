// Create a promisified version of fs.readFile, fs.writeFile, cleanFile
// clean file is a function which reads the given file, trims the trailing and leading spaces, and writes it back to the same file
const fs = require('fs');

// function cleanFile(fileName, fileEncoding){
// 	return (resolve, reject) => {
// 		fs.readFile(fileName, fileEncoding, (err, data) => {
// 			if(err) reject(err);
// 			else{
// 				console.log(data);
// 				const trimmedData = data.trim();
// 				console.log(`This is the trimmed data\n${trimmedData}`);
// 				fs.writeFile(fileName, trimmedData, (err) => {
// 					if(err) reject(err);
// 					else resolve(trimmedData);
// 				})
// 			}
// 		})
// 	}
// }

function cleanFile(fileName, fileEncoding){
	return (resolve, reject) => {
		readFilePromisified(fileName, fileEncoding)
		.then(data => {
			const trimmedData = data.trim();
			writeFilePromisified(fileName, trimmedData)
			.then(msg => console.log(msg));
		})
		.catch(err => console.log(err));
	} 
}

function cleanFilePromisified(fileName, fileEncoding){
	return new Promise(cleanFile(fileName, fileEncoding));
}

cleanFilePromisified('a.txt', 'utf-8')
	.then(data => {
		console.log("Done successfully");
		console.log(data);
	})
	.catch(err => console.log(err));


// Read file promisified
function readFile(fileName, fileEncoding){
	return (resolve, reject) => {
		fs.readFile(fileName, fileEncoding, (err, data) => {
			if(err) reject(err);
			else resolve(data);
		})
	}
}

function readFilePromisified(fileName, fileEncoding){
	return new Promise(readFile(fileName, fileEncoding));
}

// Write file promisified
function writeFile(fileName, fileData){
	return (resolve, reject) => {
		fs.writeFile(fileName, fileData, (err) => {
			if(err) reject(err);
			else resolve("Success in writing");
		})
	}
}

function writeFilePromisified(fileName, fileData){
	return new Promise(writeFile(fileName, fileData));
}

