require("dotenv").config();
const cookieParser = require("cookie-parser");

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
// const passportLocal = require("passport-local");
// const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const holdingModel = require("./model/holdingModel");
const positionModel = require("./model/positionModel");
const { OrderModel } = require("./model/ordersModel");
const signupModel = require("./model/signupModel");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.port || 3002;
const uri = process.env.MONGO_URL;

const app = express();
const corsOptions = {
  origin: ["https://online-trading-platform-frontend.onrender.com","https://online-trading-platform-1.onrender.com"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());

// app.get('/addHoldings',async(req,res)=>{
//    let tempHoldings =[
//       {
//          name: "BHARTIARTL",
//          qty: 2,
//          avg: 538.05,
//          price: 541.15,
//          net: "+0.58%",
//          day: "+2.99%",
//        },
//        {
//          name: "HDFCBANK",
//          qty: 2,
//          avg: 1383.4,
//          price: 1522.35,
//          net: "+10.04%",
//          day: "+0.11%",
//        },
//        {
//          name: "HINDUNILVR",
//          qty: 1,
//          avg: 2335.85,
//          price: 2417.4,
//          net: "+3.49%",
//          day: "+0.21%",
//        },
//        {
//          name: "INFY",
//          qty: 1,
//          avg: 1350.5,
//          price: 1555.45,
//          net: "+15.18%",
//          day: "-1.60%",
//          isLoss: true,
//        },
//        {
//          name: "ITC",
//          qty: 5,
//          avg: 202.0,
//          price: 207.9,
//          net: "+2.92%",
//          day: "+0.80%",
//        },
//        {
//          name: "KPITTECH",
//          qty: 5,
//          avg: 250.3,
//          price: 266.45,
//          net: "+6.45%",
//          day: "+3.54%",
//        },
//        {
//          name: "M&M",
//          qty: 2,
//          avg: 809.9,
//          price: 779.8,
//          net: "-3.72%",
//          day: "-0.01%",
//          isLoss: true,
//        },
//        {
//          name: "RELIANCE",
//          qty: 1,
//          avg: 2193.7,
//          price: 2112.4,
//          net: "-3.71%",
//          day: "+1.44%",
//        },
//        {
//          name: "SBIN",
//          qty: 4,
//          avg: 324.35,
//          price: 430.2,
//          net: "+32.63%",
//          day: "-0.34%",
//          isLoss: true,
//        },
//        {
//          name: "SGBMAY29",
//          qty: 2,
//          avg: 4727.0,
//          price: 4719.0,
//          net: "-0.17%",
//          day: "+0.15%",
//        },
//        {
//          name: "TATAPOWER",
//          qty: 5,
//          avg: 104.2,
//          price: 124.15,
//          net: "+19.15%",
//          day: "-0.24%",
//          isLoss: true,
//        },
//        {
//          name: "TCS",
//          qty: 1,
//          avg: 3041.7,
//          price: 3194.8,
//          net: "+5.03%",
//          day: "-0.25%",
//          isLoss: true,
//        },
//        {
//          name: "WIPRO",
//          qty: 4,
//          avg: 489.3,
//          price: 577.75,
//          net: "+18.08%",
//          day: "+0.32%",
//        },
//    ];

//    tempHoldings.forEach((item)=>{
//       let newHolding = new holdingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day
//       });

//        newHolding.save();
//    });
//    res.send("Done");
// });

// app.get("/addPositions",async(req,res)=>{
//   let positions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   positions.forEach((item)=>{
//     let newPostions = new positionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss
//     });
//     newPostions.save();
//   });
//    console.log("Done");
// });


app.post("/addNewUser",async (req, res) => {
  // console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  let addNewUser = new signupModel({
    email: req.body.email,
    password: password,
  });
  await addNewUser.save();
  res.send("User saved");
});

app.post("/loginUser", async (req, res) => {
  const { email, password } = req.body;
  let user = await signupModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ err: "Please try to login with correct credentials" });
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
   return res.status(400).json({ err: "Please try to login with correct credentials" });
  }
  const data = {
    user:{
    id: user.id,
    }
  };
  const authToken = jwt.sign(data,process.env.JWT_SECRET,{expiresIn: "1h"});
  console.log(authToken);
  res.cookie("authToken",authToken,{httpOnly:false,secure:true, sameSite: "None"  });
  return res.json({ success: true,authToken});  
});

app.get("/verifyToken", (req, res) => {
  const token = req.cookies.authToken;
  console.log("Cookies", req.cookies);

  if (!token) {
    return res.status(403).json({ error: "Access denied, token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ success: true, user: decoded.user });
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
});

app.get("/allHoldings",async (req, res) => {
  let allHoldings = await holdingModel.find({});
  console.log(allHoldings);
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await positionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved");
});

app.listen(PORT, () => {
  console.log("App started");
  mongoose.connect(uri);
  console.log("Db connected");
});
