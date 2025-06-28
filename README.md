Interactive Tech Blog
backend + frontend CRUD app

This is a JavaScript source-code for building both the back end components and the front-end views of a interactive Tech Blog. 
It uses Sequelize package to interact with a MySQL database in terms of ORM to support CRUD operations of existing product records in the DB. It uses Handlebars package to support view templates and partial page contents.
The app will be using MySQL and Sequelize of NPM as dependency. The app will be invoked by using the following commands:

“node ./seeds/index.js”

“node server.js”

The completed JavaScript source-code, table models, api routes and package log (ie package.json file) are available in the following GitHub repo as Main branch,

  https://github.com/mikehui1124/challenge_14_interactive_tech_blog
  
The deployed URL on Heroku host is as follows.

  https://quiet-chamber-30968.herokuapp.com/

Description

The tech blog provides CRUD services for users to display, add, update and deletes blogs. It also allow users to leave comments to existing blogs and display properly.
There functionality requires users to be logged in/ signup at first, and if not, prompt user to open login/signup view to do so.
The application has a database with 3 tables of records, namely

-	Blog,  -User and -Comment

The back-end will setup these 3 models and their dependency using Sequalize as ORM interface, and then support CRUD functionality to access the DB. One-to-many relationship between Blog, User and Comments models will be established using Sequalize.

Snapshot of Main Page showing all blogs and associated comments

![image](https://user-images.githubusercontent.com/105307687/194889954-72b48334-489f-4b45-90d5-5b667172fd31.png)

Snapshot of Dashboard Page adding or updating existing blogs

![image](https://user-images.githubusercontent.com/105307687/194890010-cda163fc-3e5a-4f06-a504-db13712862d1.png)

Snapshot of Blog Page commenting an existing blog
![image](https://user-images.githubusercontent.com/105307687/194890065-0e7e1b8e-2f0f-44f9-a796-66be8c836097.png)

