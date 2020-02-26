const axios = require("axios");
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
.prompt([{
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
},
{
    type: "input",
    message: "What is your GitHub email address?",
    name: "Email"
},
{
    type: "input",
    message: "What is the title of your project?",
    name: "ProjectTitle"
},
{
    type: "input",
    message: "What is your project description?",
    name: "Description"
},
//{ 
//    type: some value for an array that lists username, email, projectitle, description, installation, usage, license, and collaborators
//    name: "TableofContents" 
//},
{
    type: "input",
    message: "What is the installation process for your application?",
    name: "Installation"
},
{
    type: "input",
    message: "What is your project used for?",
    name: "Usage"
},
{
    type: "input",
    message: "What is the license of your application (i.e. open source/public domain, copyright)",
    name: "License"
},
{
    type: "input",
    message: "Who are the contributors to this project?",
    name: "Contributors"
}]
)

.then(function({username, Email, ProjectTitle, Description, Installation, Usage, License, Contributors}){
    const queryURL = `https://api.github.com/users/${username}`;

axios.get(queryURL).then(function(res){
    const avatar = res.data.avatar_url;
    const userEmail = res.data.email;
    let displayAvatar = "<img src='" + avatar + "'/>"
        console.log(Email);
        let readMeInputin = [
            "Name: ", username, "\n",
            "Image: ", displayAvatar, "\n",
            "Email address:", Email, "\n",
            "Project Title: ", ProjectTitle, "\n",
            "Project Description", Description, "\n",
            "Table of Contents", "\n",
            "Installation process: ", Installation, "\n",
            "Uses for this app: ", Usage, "\n",
            "License for this app: ", License, "\n",
            "Contributors: ", Contributors, "\n",
        ]

    fs.writeFile("README.md", readMeInputin.join(""), function (err) {
        if (err) {
        throw err;
            }

        });
    });
});