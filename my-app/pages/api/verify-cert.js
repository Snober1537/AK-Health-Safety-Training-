import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const { certId } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const cert = await db.collection("certificates").findOne({ certId });

    if (!cert) {
      return res.status(404).json({ valid: false, message: "Certificate not found" });
    }

    return res.status(200).json({ valid: true, certificate: cert });
  } catch (error) {
    return res.status(500).json({ valid: false, error: error.message });
  }
}
