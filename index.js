const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// const { app, BrowserWindow } = require('electron');

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(response) {
      console.log(response);
      const userName = response.data.login;
      console.log(userName);
      const userFollowers = response.data.followers;
      console.log(userFollowers);
      const userFollowing = response.data.following;
      console.log(userFollowing);
      const userHome = response.data.html_url;
      console.log(userHome);
      const userRepos = response.data.public_repos;
      console.log(userRepos);
      // const repoNames = response.data.map(function(repo) {
      //   return repo.name;
      // });

      // const repoNamesStr = repoNames.join("\n");

      fs.writeFile("info.txt", userName, function(err) {
        if (err) {
          throw err;
        }
      });
      fs.appendFile("info.txt", "\n"+userFollowers, function(err) {
        if (err) {
          throw err;
        }
      });
      fs.appendFile("info.txt", "\n"+userFollowing, function(err) {
        if (err) {
          throw err;
        }
      });
      fs.appendFile("info.txt", "\n"+userHome, function(err) {
        if (err) {
          throw err;
        }
      });
      fs.appendFile("info.txt", "\n"+userRepos, function(err) {
        if (err) {
          throw err;
        }
      });

      //   console.log(`Saved ${repoNames.length} repos`);
    });
    const gitStarredURL = `https://api.github.com/users/${username}/starred`
    axios.get(gitStarredURL).then(function(response) {
      console.log(response);
      const starred = response.data.length;
      console.log(starred);
      fs.writeFile("starred.txt", starred, function(err) {
        if (err) {
          throw err;
        }
      });
    });

    
  });

  // function createWindow () {
  //   // Create the browser window.
  //   let win = new BrowserWindow({
  //     width: 800,
  //     height: 600,
  //     webPreferences: {
  //       nodeIntegration: true
  //     }
  //   })
  
  //   // and load the index.html of the app.
  //   win.loadFile('info.txt')
  // }
  
  // app.on('ready', createWindow)
// function getLocation() {
//   if (navigator.geolocation) {
//     console.log(navigator.geolocation);
//     // navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
// getLocation();
// writeFile();