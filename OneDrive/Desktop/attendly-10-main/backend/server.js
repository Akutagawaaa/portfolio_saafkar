require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db"); // Import the database connection

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS for frontend

// ✅ Test API
app.get("/", (req, res) => {
  res.send("🚀 Attendance Backend is Running!");
});

// ✅ API to submit attendance
app.post("/api/attendance", async (req, res) => {
  const { user_name, email, training_name, lab_name } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO attendance (user_name, email, training_name, lab_name, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
      [user_name, email, training_name, lab_name]
    );
    res.json({ message: "✅ Attendance recorded!", data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ API to fetch attendance records
app.get("/api/attendance", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM attendance ORDER BY timestamp DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to PostgreSQL at:", res.rows[0].now);
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

