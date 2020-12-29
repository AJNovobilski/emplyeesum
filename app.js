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



 function promptmanager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "managername",
      message: "What is the name of the manager?" 
    },
    {
      type: "input",
      name: "location",
      message: "What is the managers office number"
    },
    {
      type: "input",
      name: "hobby",
      message: "What is your id number?"
    },
    {
      type: "confirm",
      name: "add",
      message: "Would you like to add another team member?"
    }])
  .then(answers => {
    if (responses.add = yes) {
      console.log("You are probably smart");
  }
  else if (responses.add = no) {
      console.log("You are probably well informed");
  }
},
  
  

  


function generatemanager(answers) {
   return `
 
   <div class="jumbotron jumbotron-fluid">
   <div class="container">
     <h1 class="display-4">${answers.managername}</h1>
     <p class="lead">My office number is  ${answers.location}.</p>
     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
     <ul class="list-group">
       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
     </ul>
   </div>
 </div>
 </body>
 </html>`;
 },
 
 async function card() {
  console.log("test")
  try {
    const answers = await promptmanager();

    const html = generatemanager(answers);

    await appendfileasync("index.html", html);

    console.log("Successfully appended to index.html");
  } catch(err) {
    console.log(err);
  }
},

card();
