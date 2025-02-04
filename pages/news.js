// // pages/news.js

// import { useEffect, useState } from "react";

// export default function NewsPage() {
//   const [newsList, setNewsList] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const response = await fetch("/api/getNews");
//       const data = await response.json();
//       setNewsList(data);
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div>
//       <h1>News List</h1>
//       {newsList.length === 0 ? (
//         <p>No news available.</p>
//       ) : (
//         newsList.map((news) => (
//           <div key={news._id}>
//             <img src={news.imgUrl} alt={news.title} width={200} />
//             <h2>{news.title}</h2>
//             <p>{news.news}</p>
//             <p><strong>Tags:</strong> {news.tags.join(", ")}</p>
//             <p><strong>Author:</strong> {news.author}</p>
//             <p><strong>Published:</strong> {new Date(news.dateTime).toLocaleString()}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }










// pages/news.js

// import { useEffect, useState } from "react";

// export default function NewsPage() {
//   const [newsList, setNewsList] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const response = await fetch("/api/getNews");
//       const data = await response.json();
//       setNewsList(data);
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="news-container">
//       <h1 className="header">Bollywood News</h1>
//       {newsList.length === 0 ? (
//         <p className="no-news">No news available.</p>
//       ) : (
//         newsList.map((news) => (
//           <div key={news._id} className="news-card">
//             <img className="news-image" src={news.imgUrl} alt={news.title} />
//             <h2 className="news-title">{news.title}</h2>
//             <p className="news-content">{news.news}</p>
//             <p className="news-tags">
//               <strong>Tags:</strong> {news.tags.join(", ")}
//             </p>
//             <p className="news-author">
//               <strong>Author:</strong> {news.author}
//             </p>
//             <p className="news-date">
//               <strong>Published:</strong> {new Date(news.dateTime).toLocaleString()}
//             </p>
//           </div>
//         ))
//       )}
//       <style jsx>{`
//         .news-container {
//           background-color: #fdf2f9;
//           color: #333;
//           padding: 20px;
//           font-family: 'Arial', sans-serif;
//         }

//         .header {
//           text-align: center;
//           font-size: 36px;
//           color: #e91e63;
//           text-transform: uppercase;
//           margin-bottom: 30px;
//         }

//         .no-news {
//           text-align: center;
//           font-size: 18px;
//           color: #555;
//         }

//         .news-card {
//           background-color: #fff;
//           border-radius: 12px;
//           box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
//           margin-bottom: 30px;
//           padding: 20px;
//           transition: transform 0.3s ease;
//         }

//         .news-card:hover {
//           transform: scale(1.02);
//         }

//         .news-image {
//           max-width: 100%;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .news-title {
//           font-size: 24px;
//           color: #d81b60;
//           margin-top: 20px;
//         }

//         .news-content {
//           font-size: 16px;
//           margin-top: 10px;
//           line-height: 1.6;
//         }

//         .news-tags,
//         .news-author,
//         .news-date {
//           margin-top: 12px;
//           font-size: 14px;
//           color: #888;
//         }

//         .news-tags strong,
//         .news-author strong,
//         .news-date strong {
//           color: #e91e63;
//         }

//         @media (max-width: 768px) {
//           .header {
//             font-size: 28px;
//           }

//           .news-card {
//             padding: 15px;
//           }

//           .news-title {
//             font-size: 22px;
//           }

//           .news-content {
//             font-size: 14px;
//           }
//         }

//         @media (max-width: 480px) {
//           .header {
//             font-size: 24px;
//           }

//           .news-card {
//             padding: 12px;
//           }

//           .news-title {
//             font-size: 20px;
//           }

//           .news-content {
//             font-size: 12px;
//           }

//           .news-tags,
//           .news-author,
//           .news-date {
//             font-size: 12px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }





















// pages/news.js

// import { useEffect, useState } from "react";

// export default function NewsPage() {
//   const [newsList, setNewsList] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchNews = async () => {
//       const response = await fetch(`/api/news?search=${searchQuery}`);
//       const data = await response.json();
//       setNewsList(data);
//     };

//     fetchNews();
//   }, [searchQuery]);

//   return (
//     <div className="news-container">
//       <h1 className="header">Bollywood News</h1>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search news..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {newsList.length === 0 ? (
//         <p className="no-news">No news available.</p>
//       ) : (
//         newsList.map((news) => (
//           <div key={news._id} className="news-card">
//             <img className="news-image" src={news.imgUrl} alt={news.title} />
//             <h2 className="news-title">{news.title}</h2>
//             <p className="news-content">{news.news}</p>
//             <p className="news-tags">
//               <strong>Tags:</strong> {news.tags.join(", ")}
//             </p>
//             <p className="news-author">
//               <strong>Author:</strong> {news.author}
//             </p>
//             <p className="news-date">
//               <strong>Published:</strong> {new Date(news.dateTime).toLocaleString()}
//             </p>
//           </div>
//         ))
//       )}

//       <style jsx>{`
//         .news-container {
//           background-color: #fdf2f9;
//           color: #333;
//           padding: 20px;
//           font-family: 'Arial', sans-serif;
//         }

//         .header {
//           text-align: center;
//           font-size: 36px;
//           color: #e91e63;
//           text-transform: uppercase;
//           margin-bottom: 30px;
//         }

//         .search-bar {
//           margin-bottom: 20px;
//           display: flex;
//           justify-content: center;
//         }

//         .search-bar input {
//           padding: 10px;
//           font-size: 16px;
//           width: 80%;
//           border-radius: 4px;
//           border: 1px solid #ccc;
//         }

//         .no-news {
//           text-align: center;
//           font-size: 18px;
//           color: #555;
//         }

//         .news-card {
//           background-color: #fff;
//           border-radius: 12px;
//           box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
//           margin-bottom: 30px;
//           padding: 20px;
//           transition: transform 0.3s ease;
//         }

//         .news-card:hover {
//           transform: scale(1.02);
//         }

//         .news-image {
//           max-width: 100%;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .news-title {
//           font-size: 24px;
//           color: #d81b60;
//           margin-top: 20px;
//         }

//         .news-content {
//           font-size: 16px;
//           margin-top: 10px;
//           line-height: 1.6;
//         }

//         .news-tags,
//         .news-author,
//         .news-date {
//           margin-top: 12px;
//           font-size: 14px;
//           color: #888;
//         }

//         .news-tags strong,
//         .news-author strong,
//         .news-date strong {
//           color: #e91e63;
//         }

//         @media (max-width: 768px) {
//           .header {
//             font-size: 28px;
//           }

//           .news-card {
//             padding: 15px;
//           }

//           .news-title {
//             font-size: 22px;
//           }

//           .news-content {
//             font-size: 14px;
//           }
//         }

//         @media (max-width: 480px) {
//           .header {
//             font-size: 24px;
//           }

//           .news-card {
//             padding: 12px;
//           }

//           .news-title {
//             font-size: 20px;
//           }

//           .news-content {
//             font-size: 12px;
//           }

//           .news-tags,
//           .news-author,
//           .news-date {
//             font-size: 12px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

























import { useEffect, useState } from "react";
import Image from 'next/image'; // Import Image from next/image

export default function NewsPage() {
  const [newsList, setNewsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(`/api/news?search=${searchQuery}`);
      const data = await response.json();
      setNewsList(data);
    };

    fetchNews();
  }, [searchQuery]);

  return (
    <div className="news-container">
      <h1 className="header">Bollywood News</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {newsList.length === 0 ? (
        <p className="no-news">No news available.</p>
      ) : (
        newsList.map((news) => (
          <div key={news._id} className="news-card">
            <Image
              className="news-image"
              src={news.imgUrl}
              alt={news.title}
              width={600}  // Specify width for optimization
              height={400} // Specify height for optimization
              objectFit="cover" // Ensures the image fills the area
            />
            <h2 className="news-title">{news.title}</h2>
            <p className="news-content">{news.news}</p>
            <p className="news-tags">
              <strong>Tags:</strong> {news.tags.join(", ")}
            </p>
            <p className="news-author">
              <strong>Author:</strong> {news.author}
            </p>
            <p className="news-date">
              <strong>Published:</strong> {new Date(news.dateTime).toLocaleString()}
            </p>
          </div>
        ))
      )}

      <style jsx>{`
        .news-container {
          background-color: #fdf2f9;
          color: #333;
          padding: 20px;
          font-family: 'Arial', sans-serif;
        }

        .header {
          text-align: center;
          font-size: 36px;
          color: #e91e63;
          text-transform: uppercase;
          margin-bottom: 30px;
        }

        .search-bar {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .search-bar input {
          padding: 10px;
          font-size: 16px;
          width: 80%;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .no-news {
          text-align: center;
          font-size: 18px;
          color: #555;
        }

        .news-card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          padding: 20px;
          transition: transform 0.3s ease;
        }

        .news-card:hover {
          transform: scale(1.02);
        }

        .news-image {
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .news-title {
          font-size: 24px;
          color: #d81b60;
          margin-top: 20px;
        }

        .news-content {
          font-size: 16px;
          margin-top: 10px;
          line-height: 1.6;
        }

        .news-tags,
        .news-author,
        .news-date {
          margin-top: 12px;
          font-size: 14px;
          color: #888;
        }

        .news-tags strong,
        .news-author strong,
        .news-date strong {
          color: #e91e63;
        }

        @media (max-width: 768px) {
          .header {
            font-size: 28px;
          }

          .news-card {
            padding: 15px;
          }

          .news-title {
            font-size: 22px;
          }

          .news-content {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .header {
            font-size: 24px;
          }

          .news-card {
            padding: 12px;
          }

          .news-title {
            font-size: 20px;
          }

          .news-content {
            font-size: 12px;
          }

          .news-tags,
          .news-author,
          .news-date {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
