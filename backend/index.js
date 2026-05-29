import connection from "./config/db.js";
import express from "express";
import cors from "cors";
import session from "express-session";

import AdminRoute from "./routes/AdminRoute.js";
import GradeRoute from "./routes/GradeRoute.js";
import CandidateRoute from "./routes/CandidateRoute.js";


const app = express();

connection();