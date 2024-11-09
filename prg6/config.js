// Import Mongoose
const mongoose = require("mongoose");

// Function to connect to MongoDB and run the main logic
async function main() {
  // Connect to MongoDB
  await mongoose.connect("mongodb://localhost:27017/Sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");

  // Define the Schema
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFoods: [String],
  });

  // Create the Model
  const Person = mongoose.model("Person", personSchema);

  // Sample data to insert
  const people = [
    { name: "Frankie", age: 74, favoriteFoods: ["Taco"] },
    { name: "Sol", age: 76, favoriteFoods: ["Roast chicken", "Pizza"] },
    { name: "Robert", age: 78, favoriteFoods: ["Burger"] },
  ];

  // Insert sample data
  await Person.insertMany(people);
  console.log("Data inserted");

  // Find a person by name
  const result = await Person.find({ name: "Robert" });
  console.log("Search result:", result);

  // Close the connection
  mongoose.connection.close();
}

// Run the main function
main();
