const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const appendfileasync = util.promisify(fs.appendFileSync);

// Function Definitions / Place In Folder For Cleaner File



  

async function card() {
 console.log("test")
 try {
   const answers = await promptmanager();

   function generatemanager(answers) {
    return `
  
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
  }

   const html = generatemanager(answers);

   await appendfileasync("index.html", html);

   console.log("Successfully appended to index.html");
 } catch(err) {
   console.log(err);
 }
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




// end head write / begin master prompt



var questions = 12345

function promptmanager(){
inquirer
  .prompt([
    {
      type:'input',
      message:'Please Input The Manager Name',
      name:'managername',
    },
    {
      type:'input',
      message:'Office Number',
      name:'office',
    },
    {
      type:'input',
      message:'Enter Employee ID #',
      name:'managerid',
    },

    {
      type:'confirm',
      message:'Would you like to add another team member?',
      name:'add',
    }
  ])
  .then(answers => {


    
console.log(answers)

if(answers.add === true)



card();

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

  