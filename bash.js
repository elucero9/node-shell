/*
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.
*/

// we can access the pwd function and store it in a variable like so
const pwd = require('./pwd');
const ls = require('./ls')
// if a user enters 'pwd' as an argument, we can then call it
pwd(pwd)

ls(ls);
