const express = require("express");
const cors = require("cors");
require("./db/config");
const app = express();
app.use(express.json());
app.use(cors());
const Admin = require("./db/models/adminM");
const Notifier=require("./db/models/notifiersM");
const Detection=require("./db/models/detectionM");


//Auth check
app.post("/adminlogin", async (req, res) => {
  if(req.body.password && req.body.email){
      let admin = await Admin.findOne(req.body);
      if(admin){
        console.log(admin)
        res.send(admin)
      }
      else{
          res.send({result:"No User Found"});
      }
  } else{
      res.send({result:"No User Found"});
      }

  
});

//Adding Motifiers
app.post("/notifiers", async (req, res) => {
  
  const {name,email,phone,gender,age,password,cnfrmPassword} = req.body;
  const findNotifier = await Notifier.findOne({email:email});
    if(findNotifier){
      console.log("Notifier Email Already Exist");
      return res.status(422).json({message:"Notifier Email Already Exist"});
    }
    if(password!=cnfrmPassword){
      console.log("Password Not Matched with Confirm Password");
      return res.status(422).json({message:"Password Does Not Matches With Confirm Password"});
    }

    console.log(email)
  const notifier = new Notifier({name,email,phone,gender,age,password,cnfrmPassword});
  const register =await notifier.save();
  // if(register)
  // {
    return res.status(201).json({ message: "Notifier Added Successfully" });

  // }
});


//Getting All Notifiers
app.get("/getNotifiers",async (req, res) => {
  let notifiers=await Notifier.find();
  if (notifiers.length>0)
  res.send(notifiers)
})

app.put("/changePassword",async (req,res)=>{
  
 var check=true
    let oldPass=req.body.oldPassword;
    let pass=req.body.password;
    let cnfrmPass=req.body.cnfrmPassword;
    console.log("Pas",req.body.password);
    console.log("Cnfrm Password",req.body.cnfrmPassword)
    console.log(typeof(oldPass))
    if(req.body.password!=req.body.cnfrmPassword){
      console.log("Current Password is Not Correct");
     return  res.json({message:"Password and confirm password does not matches"});
     
    }
    

    // Admin.find().then((results)=>{

    // })

    Admin.findOneAndUpdate({password:oldPass},{password:cnfrmPass},{new:true}).
    then((results)=>{
      if(results==null){
        throw new  Error("not Found")
      }
      console.log("Password Matches")
      // Admin.findOne({password:req.body.password}).then((data)=>{
      //   console.log("Inside Pas")

      //   })       
       return res.json({ message: "Password Changed" });
       // check=false;
       // return res

      }).catch((err)=>{
        console.log(err)
        return res.json( {message:"Current Password is Not Correct"})
      })
    })


//Getting Record of Detection
app.get("/getDetection",async (req, res) => {
  let detection=await Detection.find();
  if (detection.length>0)
  res.send(detection)
})

//Adding Record of Detection
app.post('/addDetection', (req,res,next)=>{
  console.log("into Detection")
  Detection.create(req.body).then((data)=>{
      res.send(data);
  })
})

//Deleting Detection Record

app.delete("/deleteDetection",async (req,res)=>{
  const { d_id } = req.body;
    try {
      const data = await Detection.deleteOne({ _id: d_id });
      if (data) {
        return res.status(201).json({ message: "Record Deleted" });
      }
      return res.status(422).json({ error: "No Record" });
    } catch (err) {
      console.log(err);
    }
})


//Deleting Notifiers
app.delete("/deleteNotifiers",async (req,res)=>{
  const { d_id } = req.body;
    try {
      const data = await Notifier.deleteOne({ _id: d_id });
      if (data) {
        return res.status(201).json({ message: "Record Deleted" });
      }
      return res.status(422).json({ error: "No Record" });
    } catch (err) {
      console.log(err);
    }
})






app.listen(4000);
