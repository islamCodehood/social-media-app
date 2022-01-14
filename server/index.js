import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from './routes/posts.routes.js'

const app = express();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://admin:imageConsultant@cluster0.jzgpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5555;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => app.listen(PORT, () => console.log(`server running at port: ${PORT}`)))
	.catch((err) => {
		console.log(err.message);
	});

