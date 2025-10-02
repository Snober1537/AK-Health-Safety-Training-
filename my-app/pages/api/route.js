import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const certId = searchParams.get("certId");

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const cert = await db.collection("certificates").findOne({ certId });

    if (!cert) {
      return new Response(JSON.stringify({
        valid: false,
        message: "Certificate not found",
      }), { status: 404 });
    }

    return new Response(JSON.stringify({
      valid: true,
      certificate: cert,
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({
      valid: false,
      error: error.message,
    }), { status: 500 });
  }
}
