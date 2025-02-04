

















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
//       console.error(error); // Log the error to the console for debugging
//       res.status(500).json({ error: "Failed to save news.", details: error.message }); // Include error message
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
//       console.error(error); // Log the error to the console
//       res.status(500).json({ error: "Failed to search news.", details: error.message }); // Include error message
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
    const { imgUrl, title, news, tags, description, author } = req.body;

    if (!imgUrl || !title || !news || !tags || !description || !author) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const newNews = new News({
      imgUrl,
      title,
      news,
      tags,
      description,
      author,
    });

    try {
      await newNews.save();
      return res.status(201).json({ message: "News saved successfully!" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to save news.", details: error.message });
    }
  }

  // Handling GET request (search news)
  else if (req.method === "GET") {
    const { search } = req.query;

    try {
      let newsData;

      // If there is no search query, return all news
      if (!search) {
        newsData = await News.find({});
      } else {
        // Search based on title or tags
        newsData = await News.find({
          $or: [
            { title: { $regex: search, $options: "i" } }, // Case-insensitive search in title
            { tags: { $elemMatch: { $regex: search, $options: "i" } } }, // Case-insensitive search in tags
          ],
        });
      }

      return res.status(200).json(newsData);
    } catch (error) {
      return res.status(500).json({ error: "Failed to search news.", details: error.message });
    }
  } else {
    return res.status(400).json({ error: "Invalid request method." });
  }
}
