// Import Mongoose
var mongoose = require("mongoose");

// Connect to MongoDB without deprecated options
mongoose.connect("mongodb://localhost:27017/Sample");

// Define the Schema
var Schema = mongoose.Schema;
var personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [{ type: String }],
});

// Create the Model
var Person = mongoose.model("Person", personSchema);

// Sample data to insert
var arrayOfPeople = [
  { name: "Frankie", age: 74, favoriteFoods: ["Taco"] },
  { name: "Sol", age: 76, favoriteFoods: ["Roast chicken", "Pizza"] },
  { name: "Robert", age: 78, favoriteFoods: ["Burger"] },
];

// Insert sample data into the database
async function insertData() {
  await Person.insertMany(arrayOfPeople);
  console.log("Sample data inserted.");
}

// Call the insert function
insertData().then(() => {
  // Function to find one person by their favorite food
  findOneByFood("Pizza");
});

// Function to find one person by their favorite food
async function findOneByFood(food) {
  const data = await Person.findOne({ favoriteFoods: food });
  console.log(data);
}
