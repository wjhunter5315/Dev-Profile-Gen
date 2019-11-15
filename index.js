const fs = require("fs");
// const axios = require("axios");
// const inquirer = require("inquirer");

// inquirer
//   .prompt({
//     message: "Enter your GitHub username:",
//     name: "username"
//   })
//   .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/:${username}`;

//     axios.get(queryUrl).then(function(response) {
//         console.log(response);
//     //   const repoNames = res.data.map(function(repo) {
//     //     return repo.name;
//       });

//     //   const repoNamesStr = repoNames.join("\n");

//     //   fs.writeFile("repos.txt", repoNamesStr, function(err) {
//     //     if (err) {
//     //       throw err;
//     //     }

//     //     console.log(`Saved ${repoNames.length} repos`);
//     //   });
//     });
// //   });
const gitStarredURL = "https://api.github.com/users/wjhunter5315/starred";
const githubURL = "https://api.github.com/users/wjhunter5315";
$.ajax({
  url: githubURL,
  method: "GET"
})
.then(function(response) {
  console.log(response);
  const userName = response.login;
  console.log(userName);
  const userFollowers = response.followers;
  console.log(userFollowers);
  const userFollowing = response.following;
  console.log(userFollowing);
  const userHome = response.html_url;
  console.log(userHome);
  const userRepos = response.public_repos;
  console.log(userRepos);
  
})
const starred = [];
$.ajax({
  url: gitStarredURL,
  method: "GET"
})
.then(function(response) {
  console.log(response);
  const starred = response.length;
  console.log(starred);
  
})
fs.writeFile("info.txt", starred, function(err) {
  if (err) {
    throw err;
  }
})

function getLocation() {
  if (navigator.geolocation) {
    console.log(navigator.geolocation);
    // navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();
writeFile();