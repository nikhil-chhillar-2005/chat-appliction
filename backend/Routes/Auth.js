const Router =require('express').Router();
const Authcontroller=require('../controllers/authcontroller');


Router.post("/login",Authcontroller.login)
Router.post("/signup",Authcontroller.signup)
Router.post("/logout",Authcontroller.logout)
module.exports=Router;