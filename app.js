const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const appendfileasync = util.promisify(fs.appendFileSync);
// Function Definitions / Place In Folder For Cleaner File


async function manager(answers) {
  const html = `
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">${answers.managername}</h1>
      <p class="lead">My office number is  ${answers.office}.</p>
      <ul class="list-group">
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
   await appendfileasync("index.html", html);
   console.log("Successfully appended to index.html");
}


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
function promptmanager(){
    inquirer
      .prompt([
        {
          message: "What would you like to do?",
          type: "list",
          name: "role",
          choices: ["Add Manager", "Add Engineer", "Add Intern" ]
      },
    
      {
        message: "What is the name of the manager",
        type: "list",
        name: "namemanager",
        choices: ["Magnet&Stickers","T-Shirt", "Mug"],
        when : function( answers ) {
                return answers.role === "Add Manager"
                          },
        default: "T-Shirt"
    },
    
     
      ])
      .then(answers => {
    
        manager(answers);
    
        
    console.log(answers)
    
    if(answers.add === true)
    
    
    
    
    if(answers.add === false)
    console.log('awefoij')
    
    
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });
    }
promptmanager();