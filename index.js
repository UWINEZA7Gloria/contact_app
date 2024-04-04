import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import swagger from "./docs/swagger.json" assert{type:"json"}
import swaggerUi from "swagger-ui-express"
import configuration from './configs/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/contact.routes.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(router)
app.use("/contact-docs", swaggerUi.serve, swaggerUi.setup(swagger));
mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("listening on port "+configuration.port);
    });
})
.catch(err => {
    console.log(err);
});
