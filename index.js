const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/my_database");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.use(express.json());

//Route to create a user
app.post("/users", async (req, res) => {
  try {
    //create a new user instance using the data using the reqest body
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    //Handle any error that occurs during user creation and send 500 (Internal Server error) status code
    res.status(500).send(err);
  }
});

//Route to get all the users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Route to get a user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send({ message: "User deleted successfully!" });
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
