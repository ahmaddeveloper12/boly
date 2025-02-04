// // pages/api/news.js

// import connectMongo from "../../lib/mongodb";
// import News from "../../models/News";

// export default async function handler(req, res) {
//   await connectMongo();

//   if (req.method === "POST") {
//     try {
//       const { imgUrl, title, news, tags, description, author } = req.body;

//       const newNews = new News({
//         imgUrl,
//         title,
//         news,
//         tags,
//         description,
//         author,
//       });

//       await newNews.save();
//       res.status(201).json({ message: "News saved successfully!" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to save news." });
//     }
//   } else {
//     res.status(400).json({ error: "Invalid request method." });
//   }
// }








// pages/api/news.js

// import connectMongo from "../../lib/mongodb";
// import News from "../../models/News";

// export default async function handler(req, res) {
//   await connectMongo();

//   // Handling POST request (create news)
//   if (req.method === "POST") {
//     try {
//       const { imgUrl, title, news, tags, description, author } = req.body;

//       const newNews = new News({
//         imgUrl,
//         title,
//         news,
//         tags,
//         description,
//         author,
//       });

//       await newNews.save();
//       res.status(201).json({ message: "News saved successfully!" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to save news." });
//     }
//   }

//   // Handling GET request (search news)
//   else if (req.method === "GET") {
//     try {
//       const { search } = req.query;

//       // If there is no search query, return all news
//       if (!search) {
//         const allNews = await News.find({});
//         return res.status(200).json(allNews);
//       }

//       // Search based on the title or tags
//       const searchResults = await News.find({
//         $or: [
//           { title: { $regex: search, $options: "i" } }, // Case-insensitive search in title
//           { tags: { $elemMatch: { $regex: search, $options: "i" } } }, // Case-insensitive search in tags
//         ],
//       });

//       // Return search results
//       res.status(200).json(searchResults);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to search news." });
//     }
//   } else {
//     res.status(400).json({ error: "Invalid request method." });
//   }
// }


















import connectMongo from "../../lib/mongodb";
import News from "../../models/News";

export default async function handler(req, res) {
  await connectMongo();

  // Handling POST request (create news)
  if (req.method === "POST") {
    try {
      const { imgUrl, title, news, tags, description, author } = req.body;

      const newNews = new News({
        imgUrl,
        title,
        news,
        tags,
        description,
        author,
      });

      await newNews.save();
      res.status(201).json({ message: "News saved successfully!" });
    } catch (error) {
      console.error(error); // Log the error to the console for debugging
      res.status(500).json({ error: "Failed to save news.", details: error.message }); // Include error message
    }
  }

  // Handling GET request (search news)
  else if (req.method === "GET") {
    try {
      const { search } = req.query;

      // If there is no search query, return all news
      if (!search) {
        const allNews = await News.find({});
        return res.status(200).json(allNews);
      }

      // Search based on the title or tags
      const searchResults = await News.find({
        $or: [
          { title: { $regex: search, $options: "i" } }, // Case-insensitive search in title
          { tags: { $elemMatch: { $regex: search, $options: "i" } } }, // Case-insensitive search in tags
        ],
      });

      // Return search results
      res.status(200).json(searchResults);
    } catch (error) {
      console.error(error); // Log the error to the console
      res.status(500).json({ error: "Failed to search news.", details: error.message }); // Include error message
    }
  } else {
    res.status(400).json({ error: "Invalid request method." });
  }
}
