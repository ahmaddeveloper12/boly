











// import connectMongo from "../../lib/mongodb";
// import News from "../../models/News";

// export default async function handler(req, res) {
//   await connectMongo();

//   try {
//     const newsList = await News.find({}).sort({ dateTime: -1 });
//     res.status(200).json(newsList);
//   } catch (error) {
//     console.error(error); // Log the error to the console
//     res.status(500).json({ error: "Failed to fetch news.", details: error.message });
//   }
// }





























import connectMongo from "../../lib/mongodb";
import News from "../../models/News";

export default async function handler(req, res) {
  await connectMongo();

  const newsList = await News.find({}).sort({ dateTime: -1 });
  res.status(200).json(newsList);
}
