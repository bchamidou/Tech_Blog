# 
# Project: TECH_BLOG

 ![License Badge](https://img.shields.io/badge/License-MIT%20License-blue)

![GitHub]
 https://github.com/bchamidou/Tech_Blog

  
## Technologies
***
Technologies used: 
![Technologies](https://img.shields.io/badge/-Git-F05032?logo=Git&logoColor=white)
![Technologies](https://img.shields.io/badge/-JavaScript-007396?logo=JavaScript&logoColor=white)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/-MySQL-4479A1?logo=MySQL&logoColor=white)
![Technologies](https://img.shields.io/badge/-Inquirer-000000?logo=&logoColor=white)


## Table of Contents
***
- [Description](#description)
- [Installation](#installation)
- [Project Usage](#usage) 
- [Contributing](#contributing) 
- [Contact Me](#contact)
- [License](#license)

## Description
*** 

This challenge is to build The Tech Blog website where developers can publish their blog posts and comment on other developers’ posts as well. This application follows the MVC paradigm and it is using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
 
### User Story
```
S A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```
## Installation
***

The installation can be completed by following these instructions:

***Requirments***
[Node.js](https://nodejs.org/en/) | [MySQL](https://www.npmjs.com/package/mysql2) | [Sequelize] https://www.npmjs.com/package/sequelize | [Express] https://www.npmjs.com/package/express | [dotenv] https://www.npmjs.com/package/dotenv 

1. Clone the GitHub repository to you local computer. Click on the following link.
* Repository link : https://github.com/bchamidou/bchamidou/Tech_Blog

2. Install the following packages:
    - Connect to MySql and use databases dedicated
    - Run the command npm install  
    - Run the command source db/schema.sql to create the database.
    - Run the command npm run seed to seed the database.
    - Run the command node start to run the software.
    
    The application will then begin to run locally.

## Usage 
***
To execute the script, open a Git terminal on the main project folder (cloned folder) Run the following command: npm start

### Screenshot
![Alt text](<Assets/tecn blog.png>)

### Deployment
Link to Heroku
https://deploy-tech-blog-to-hereku-9c695d955945.herokuapp.com/
    

## Contributing
***

I  utilized several coding website for help, including STackOverflow, w#schools.com, and more. I also watched YouTube video tutorials and the course resources.

Any developers who are interested in contributing ideas for this application must agree to follow and comply with the Contributor Covetnant: Code of Conduct.
The Contributor Covenant Code of Conduct can be found in the following address:

[Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md/)
    
## Contact
***

For additional questions, please contact bchamidou@gmail.com.
or my Github page:(https://github.com/bchamidou)

## License
***

This application is covered under the MIT License.

Copyright (c) 2023 bchamidou.

    This software/code is licensed under the MIT License; 
    to use this software/code you must agree to follow and comply the License.
    A copy of the License can be found at: https://www.gnu.org/licenses/gpl-3.0.md 

