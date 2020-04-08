import express from "express";
import morgan from "morgan"; //middleware
import helmet from "helmet"; //for security
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//these two handle cookie and body
// import { userRouter } from "./routers/userRouter";
// it didn't be imported as default. that's why use {} bracket
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

//req = request object , res = response object

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser()); //this is how the server understands cookies coming from users
app.use(bodyParser.json()); //this is how the server understands data coming from users
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
