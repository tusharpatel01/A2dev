import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: ["http://localhost:5173"],
credentials: true}
));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true ,limit: '50mb'}));
app.use(express.static('public'));
app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js"
app.use('/api/v1/users', userRouter);



export {app};