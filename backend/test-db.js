// test-db.js
import mongoose from "mongoose";

const uri = "mongodb+srv://sanoberq051_db_user:Pakistan+123@akcluster.triwgaz.mongodb.net/AKDB?retryWrites=true&w=majority&appName=AKcluster";

async function testDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  } finally {
    process.exit();
  }
}

testDB();
