const router= require("express").Router();
const protectroute=require("../middleware/protectroute")
const messagecontroller=require("../controllers/messagecontroller")
router.get("/:id",protectroute,messagecontroller.getmessage);
router.post("/send/:id",protectroute,messagecontroller.sendmessage)

module.exports=router;