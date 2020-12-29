const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const appendfileasync = util.promisify(fs.appendFileSync);
// Function Definitions / Place In Folder For Cleaner File


async function manager(answers) {
  const htmlmanager = `
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1><b>Manager</b></h1>
      <h2 class="display-4">${answers.managername}</h2>
      <p class="lead">My office number is  ${answers.manageroffice}.</p>
      <ul class="list-group">
        <li class="list-group-item">ID#: ${answers.managerid}</li>
        <li class="list-group-item">Email Address: ${answers.manageremail}</li>

      </ul>
    </div>
  </div>
  </body>
  </html>`;
   await appendfileasync("index.html", htmlmanager);
   console.log("Successfully appended to index.html");
}

async function engineer(answers) {
  const htmlengineer = 
  `
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <h1><b>Engineer</b></h1>
    <h2 class="display-4">${answers.engineername}</h2>
    <ul class="list-group">
      <li class="list-group-item">ID#: ${answers.engineerid}</li>
      <li class="list-group-item">Email Address: ${answers.engineeremail}</li>
      <li class="list-group-item">Github: ${answers.engineergithub}</li>
    </ul>
  </div>
</div>
</body>
</html>
`;

   await appendfileasync("index.html", htmlengineer);
   console.log("Successfully appended to index.html");
}

async function intern(answers) {
  const internhtml =   `
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <h1><b>Intern</b></h1>
    <h2 class="display-4">${answers.internname}</h2>
    <ul class="list-group">
      <li class="list-group-item">ID#: ${answers.internid}</li>
      <li class="list-group-item">Email Address: ${answers.internemail}</li>
      <li class="list-group-item">School: ${answers.internschool}</li>
    </ul>
  </div>
</div>
</body>
</html>
`;
   await appendfileasync("index.html", internhtml);
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

// Prompt Function Declarations //

function promptstart(){
    inquirer
      .prompt([
        {
          message: "What would you like to do?",
          type: "list",
          name: "role",
          choices: ["Add Manager", "Add Engineer", "Add Intern" ]
      },])

      .then(answers => {
    
    
        if (answers.role === "Add Manager"){
promptmanager()
        }

  else if  (answers.role === "Add Engineer"){
  promptengineer()
  }
  else if (answers.role === "Add Intern"){
    promptintern()
        }

    
      
      })

      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });
    }

    function promptmanager(){
      inquirer
        .prompt([
          {
            message: "What is the managers name?",
            type: "input",
            name: "managername",
        },
        {
          message: "What is the managers employee id number?",
          type: "number",
          name: "managerid",
      },
      {
        message: "What is the managers office number?",
        type: "number",
        name: "manageroffice",
    },
    {
      message: "What is the managers email address?",
      type: "input",
      name: "manageremail",
  },
      
      
      ])
  
        .then(answers => {
      
      manager(answers),addmore()

  
      
      
        })
        .catch(error => {
          if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else when wrong
          }
        });
      }

      function promptengineer(){
        inquirer
          .prompt([
            {
              message: "What is the engineers name?",
              type: "input",
              name: "engineername",
          },
          {
            message: "What is the engineers employee id number?",
            type: "number",
            name: "engineerid",
        },
        {
          message: "What is the engineers email addresss?",
          type: "input",
          name: "engineeremail",
      },
      {
        message: "What is the engineers github?",
        type: "input",
        name: "engineergithub",
    },
        
        
        ])
    
          .then(answers => {
        
        engineer(answers),addmore()
  
    
        
        
          })
          .catch(error => {
            if(error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else when wrong
            }
          });
        }
        function promptintern(){
          inquirer
            .prompt([
              {
                message: "What is the interns name?",
                type: "input",
                name: "internname",
            },
            {
              message: "What is the interns employee id number?",
              type: "number",
              name: "internid",
          },
          {
            message: "What is the interns email addresss?",
            type: "input",
            name: "internemail",
        },
        {
          message: "What is the interns school?",
          type: "input",
          name: "internschool",
      },
          
          
          ])
      
            .then(answers => {
          
          intern(answers),addmore()
    
      
          
          
            })
            .catch(error => {
              if(error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
              } else {
                // Something else when wrong
              }
            });
          }


      function addmore(){
        inquirer
          .prompt([
            {
              message: "Would you like to add another employee?",
              name:'addmore',
              type: "confirm",
          },
         
        
        
        ])
    
          .then(answers => {
        
if (answers.addmore === true)
promptstart()

else if (answers.addmore === false)
console.log('done! check out index.html to see your team')    
        
        
          })
          .catch(error => {
            if(error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else when wrong
            }
          });
        }



promptstart();