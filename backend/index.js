const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "youth_football_portal",
  port: 3360
});

db.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('MySql Connected')
})

const app = express()
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json("From the server")
})

//Insert agents
app.post('/insert-agent', async (req, res) => {
  const { firstname, lastname, email, username, password } = req.body;
  const currentDate = new Date();
  const agentUser = 'agent';

  try {
    // Check if username already exists
    const usernameCheckQuery = "SELECT * FROM users WHERE username = ?";
    db.query(usernameCheckQuery, [username], async (checkError, checkResults) => {
      if (checkError) {
        console.error("Error checking username:", checkError);
        return res
          .status(500)
          .json({
            error: "An error occurred while checking username."
          });
      }

      if (checkResults.length > 0) {
        return res
          .status(400)
          .json({
            error: "Username already exists."
          });
      }

      // Hash the password before inserting
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

      const insertAgent = "INSERT INTO users (firstname, lastname, email, username, password, date_joined, usertype) VALUES (?, ?, ?, ?, ?, ?, ?)";
      db.query(insertAgent, [firstname, lastname, email, username, hashedPassword, currentDate, agentUser], (insertError, result) => {
        if (insertError) {
          console.error("An Error occurred: ", insertError);
          return res
            .status(500)
            .json({
              error: "An error occurred while inserting data."
            });
        }

        return res
          .status(200)
          .json({ message: "Agent Account has been created successfully." });
      });
    });
  } catch (hashError) {
    console.error("Error hashing password:", hashError);
    return res
      .status(500)
      .json({
        error: "An error occurred while processing the password."
      });
  }
});


app.listen(4500, () => {
    console.log("Listening on port 4500")
})