/*
fs Module: used to perform operations regarding file handling
file handling/file Input output operations:
    1. Create a new file or folder
    2. Writing data into file
    3. appending data into file
    4. Reading data from a file
    5. Rename a file
    6. Delete a file
    7. Delete a folder
*/

const fs = require('fs');

//mkdirSync(): Used to create a folder in sync mode, if already exist it throw an exception

// try {
//     fs.mkdirSync('test');
// } catch (error) {
//     console.log('Folder already created or Invalid path')
// }

//rmdirSync(): used delete a folder

// try {
//     fs.rmdirSync("test");
//     console.log("folder deleted");
// } catch (error) {
//     console.log("Folder not exist or invalid path");
// }

/*
//writeFileSync():
Create a new file if doesn't exist and if file already exist it delete all content of file and rewrite into it.
*/
// try {
//     fs.writeFileSync("test/sample.txt","Hello World1\n");
//     fs.writeFileSync("test/sample.txt","Hello World2\n");
//     fs.writeFileSync("test/sample.txt","Hello World3\n");
//     fs.writeFileSync("test/sample.txt","Hello World4\n");
//     fs.writeFileSync("test/sample.txt","Hello World5\n");
// } catch (error) {
//     console.log("Invalid path");
// }

/*
appendFileSync():
Create a new file if doesn't exist and if file already exist it write data after old data
*/

// try {
//     fs.appendFileSync("test/sample.txt","Hello World1\n");
//     fs.appendFileSync("test/sample.txt","Hello World2\n");
//     fs.appendFileSync("test/sample.txt","Hello World3\n");
//     fs.appendFileSync("test/sample.txt","Hello World4\n");
//     fs.appendFileSync("test/sample.txt","Hello World5\n");
//     console.log('done');
// } catch (error) {
//     console.log("Invalid path");
// }

/*
readFileSync():
Read a file and return data.
If we donot use any encoding then data is return in buffer format.
To encode use 'utf-8', throw exception if file doesn't exist or invalid path.
*/

// try {
//     let data = fs.readFileSync("test/sample.txt","utf-8");
//     console.log(data);
// } catch(error) {
//     console.log(error);
// }

//renameSync(): use to rename file

// try {
//     fs.renameSync("test/sample.txt","test/sample1.txt");
//     console.log("done");
// } catch (error) {
//     console.log(error);
// }

//unlinkSync: use to delete a file

// try {
//     fs.unlinkSync("test/sample1.txt");
//     console.log("file deleted successfully");
// } catch (error) {
//     console.log(error);
// }