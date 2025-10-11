import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  try {
    const db = await connectDB();
    const feedBackCollections = await db.collection("feedbacks");
    const res = await feedBackCollections.find({ status: "published" }).toArray();
    if (res) {
      return Response.json({
        status: 200,
        data: res,
      });
    }
    console.log(res)
    return Response.json({
      status: 404,
      message: "No data Found",
    });
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
};