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

//mkdir(): Used to create a folder in sync mode, if already exist it throw an exception

// fs.mkdir("test",(error)=>{
//     if(error){
//         console.log("File already exist or invalid path");
//     } else {
//         console.log("Folder created successfully");
//     }
// })

//rmdir(): used delete a folder

// fs.rmdir("test",(error)=>{
//     if(error)
//     {
//         console.log(error);
//     } else {
//         console.log('folder deleted successfully');
//     }
// })

/*
//writeFile():
Create a new file if doesn't exist and if file already exist it delete all content of file and rewrite into it.
*/

// fs.writeFile("test1/sample1.txt","Hello world\n",(error)=>{
//     if(error)
//     {
//         console.log("Invalid path or folder not exist");
//     } else {
//         console.log("File created successfully");
//     }
    
// });

/*
appendFile():
Create a new file if doesn't exist and if file already exist it write data after old data
*/

// fs.appendFile("test/sample.txt","Hello world1\n",(error)=>{
//     if(error) 
//     {
//         console.log("invalid path or file does not exist.");
//     } else {
//         console.log("file created or updated successfully");
//     }
// })

/*
readFile():
Read a file and return data.
If we donot use any encoding then data is return in buffer format.
To encode use 'utf-8', throw exception if file doesn't exist or invalid path.
*/

// fs.readFile("test/sample.txt","utf-8",(error,data)=>{
//     if(error) 
//         {
//             console.log("invalid path or file does not exist.");
//         } else {
//             console.log(data);
//         }
// })


//rename(): use to rename file

// fs.rename("test/sample.txt","test/sample1.txt",(error)=>{
//     if(error) 
//     {
//         console.log("invalid path or file does not exist.");
//     } else {
//         console.log("file name updated.");
//     }
// })

//unlink: use to delete a file

// fs.unlink("test/sample1.txt",(error)=>{
//     if(error) 
//     {
//         console.log("invalid path or file does not exist.");
//     } else {
//         console.log("file Deleted.");
//     }
// })