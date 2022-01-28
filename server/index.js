import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//posts route
app.use("/posts", postRoutes);
//user route 
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`server running at port: ${process.env.PORT}`)
    )
  )
  .catch((err) => {
    console.log(err.message);
  });
