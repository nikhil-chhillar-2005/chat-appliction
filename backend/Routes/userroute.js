const router=require("express").Router();
const getuser=require("../controllers/usercontroler")
const protectroute=require("../middleware/protectroute");
router.get("/",protectroute,getuser)

module.exports=router;