import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./src/routes/user.route.js";
import authRouter from "./src/routes/auth.route.js";

dotenv.config(); 

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Successfully!!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// create routes -

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//create a middleware for try-catch error handling -

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
}); 
   