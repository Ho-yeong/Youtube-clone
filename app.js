import express from "express";
import morgan from "morgan"; //middleware
import helmet from "helmet"; //for security
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//these two handle cookie and body
import { userRouter } from "./router";
// it didn't be imported as default. that's why use {} bracket

const app = express();

const PORT = 4000;

const handleHome = (req, res) =>
  //req = request object , res = response object
  res.send("Hello from ass");

const handleProfile = (req, res) => res.send("you are on my profile");

app.use(cookieParser()); //this is how the server understands cookies coming from users
app.use(bodyParser.json()); //this is how the server understands data coming from users
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;
