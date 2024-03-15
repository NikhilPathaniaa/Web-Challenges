import express from "express";
import yargs from "yargs";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Sequelize } from "sequelize";
import mysql from "mysql2/promise.js";

/*MIDDLEWARES*/
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

/*ROUTES*/
import authRoutes from "./src/routes/auth.route.js";
import userRoutes from "./src/routes/user.route.js";
import quizRoutes from "./src/routes/quiz.route.js";
import questionRoutes from "./src/routes/question.route.js";
import choiceRoutes from "./src/routes/choice.route.js";
import answerRoutes from "./src/routes/answer.route.js";
import resultRoutes from "./src/routes/result.route.js";

/**DATABASE */
import db, { initializeDB } from "./src/models/index.js";

/**utils */
import {
  createAdmin,
  createChoice,
  createQuestion,
  createQuiz,
  createUser,
  createUserAnswer,
} from "./src/utils/seedDB.js";

/**ARGUMENTS */
if (process.argv.length < 6) {
  process.exit(1);
}

const app = express();
const { serverPort, dbusername, dbpassword, dbname, dev, secure } = yargs(
  process.argv.splice(2) //first attribute is node and second is index.js file
).argv;

export let secureValue;

secureValue = secure === "true" ? true : false;

/**CONNECT AND INITIALIZE DB */
export let sequelize;
function connectDB() {
  mysql
    .createConnection({
      host: "localhost",
      port: "3306",
      user: dbusername,
      password: dbpassword,
    })
    .then((connection) => {
      console.log("creating database");
      connection
        .query(`create database if not exists ${dbname};`)
        .then((res) => {
          console.info(`database ${dbname} created successfully`);
          sequelize = new Sequelize(dbname, dbusername, dbpassword, {
            host: "127.0.0.1",
            dialect: "mysql",
          });

          sequelize
            .authenticate()
            .then(() => {
              console.log("Connected to database");
            })
            .catch((err) => {
              console.log("Unable to connect to Database", err);
            });

          initializeDB();

          /*****************DEVELOPMENT *********/
          if (dev == "true") {
            db.sequelize
              .sync({ force: true })
              .then(() => {
                console.log("Drop and Resync Db");
              })
              .then(async () => {
                await createAdmin();
                await createUser();
                await createQuiz();
                await createQuestion();
                await createChoice();
                await createUserAnswer();
              });
          }
          /********************** **************/
        });
    });
}

/**INBUILT MIDDLEWARE**/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      version: "1.0.0",
      title: "Quiz",
      description: "API documentation",
      contact: {
        name: "MPXFACTOR",
      },
      servers: [`http://localhost:${serverPort}`],
    },
  }),
  apis: ["index.js", "./src/routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/rest-api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**EXTERNAL MIDDLEWARE */
dotenv.config();
let corsOptions = {
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "http://localhost:5501",
    "http://127.0.0.1:5501",
    "http://localhost:3000",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

/**ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/choice", choiceRoutes);
app.use("/api/answer", answerRoutes);
app.use("/api/result", resultRoutes);

/**SERVER */
app.listen(serverPort, () => {
  console.log(`SERVER => http://localhost:${serverPort}`);
  connectDB();
  console.log(`SWAGGER => http://localhost:${serverPort}/rest-api/`);
});
