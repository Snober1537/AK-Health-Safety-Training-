import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "akhealth");

    // Just list the collections in the DB
    const collections = await db.listCollections().toArray();

    res.status(200).json({
      success: true,
      message: "Connected to MongoDB 🎉",
      collections: collections.map(c => c.name),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
