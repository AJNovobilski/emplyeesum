const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const appendfileasync = util.promisify(fs.appendFileSync);


// write head //

function start() {

fs.writeFile('index.html', 


`
<!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="style.css">

   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
   <title>Document</title>
 </head>
 <body>`,
function (err) {
  if (err) throw err;

});
}

start();

// end head write




