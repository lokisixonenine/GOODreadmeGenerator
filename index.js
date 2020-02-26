const inquirer = require("inquirer");
    const axios = require("axios");
    const fs = require("fs");

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
    name: "ProjectDescription"
},
{
    type: "input",
    message: "What is the installation process for your application?",
    name: "installation"
},
{
    type: "input",
    message: "What is your project used for?",
    name: "Use"
},
{
    type: "input",
    message: "What is the license of your application (i.e. open source/public domain, copyright)",
    name: "license"
},
{
    type: "input",
    message: "Who are the contributors to this project?",
    name: "contributors"
}]
)

.then(function({username, Email, ProjectTitle, ProjectDescription, installation, Use, license, contributors}){
    const queryURL = `https://api.github.com/users/${username}`;
    axios.get(queryURL).then(function(res){
        const avatar = res.data.avatar_url;
        const userEmail = res.data.email;
    let displayAvatar = "<img src=`" + avatar + "`/>"
        console.log(Email);
        let readMeInput = [
            "Name: ", username, "\n",
            "Image: ", displayAvatar, "\n",
            "Email address:", Email, "\n",
            "Project Title: ", ProjectTitle, "\n",
            "Table of Contents", "\n",
            "Installation process: ", installation, "\n",
            "Uses for this app: ", use, "\n",
            "License for this app: ", license, "\n",
            "Contributors: ", contributors, "\n",
        ]

    fs.writeFile("README.md", infoData.join(""), function (err) {
        if (err) {
        throw err;
            }

        });
    });
});