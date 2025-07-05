const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
// Port website will run on
app.listen(8080);
const fs = require('fs');



const Sequelize = require("sequelize-cockroachdb");
require('dotenv').config();
// Connect to CockroachDB through Sequelize.
const connectionString = process.env.DATABASE_URL
const sequelize = new Sequelize(connectionString, {
  dialectOptions: {
    application_name: "AggX",
    ssl: {
       rejectUnauthorized: false,
      //For secure connection:
      ca: fs.readFileSync('certs/root.crt')
              .toString()
    },
  }
});

// Define the Account model for the "accounts" table.
const Account = sequelize.define("accounts", {
  email: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  password:{
    type: Sequelize.STRING,
  },
  name:{
    type: Sequelize.STRING,
  }
});

app.get('/login',(req,res)=>{
  var email = req.query.email;
  var password = req.query.password;

  Account.sync({
  force: true,
  })
  .then(function () {
    // Insert two rows into the "accounts" table.
    return Account.bulkCreate([
      {
        email: "jaydang@berkeley.edu",
        password: 'djc549',
        name:"Jay Dang"
      },
      {
        email: "ethanzhang@berkeley.edu",
        password: 'ez549',
        name:"Ethan Zhang"
      },
      {
        email: "lixingyu@berkeley.edu",
        password: 'pl549',
        name:"Peter Li"
      },
    ]);
  }).then((accounts)=>{
    accounts.forEach(account => {
      if(account.email.toString()===String(email)){
        if(account.password===password){
          res.redirect('http://localhost:3000/wallet-connect')
        }
      }})
      res.send(false);
      })
      
    });
    
      

  
  
  

// Create the "accounts" table.


