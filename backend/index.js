import connection from "./config/db.js";
import express from "express";
import cors from "cors";
import session from "express-session";

import AdminRoute from "./routes/AdminRoute.js";
import GradeRoute from "./routes/GradeRoute.js";
import CandidateRoute from "./routes/CandidateRoute.js";
connection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'My-secret-key',
    resave: false,
    saveUninitialized: true, 
    cookie: { httpOnly: true }
}));

// middleware
app.use('/auth', AdminRoute);
app.use('/grade', GradeRoute);
app.use('/candidates', CandidateRoute);

app.listen(4000, () => {
    console.log('http://localhost:4000');
});
