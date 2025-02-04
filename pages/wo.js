


















import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    imgUrl: "",
    title: "",
    news: "",
    tags: "",
    description: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("News saved successfully!");
      setFormData({
        imgUrl: "",
        title: "",
        news: "",
        tags: "",
        description: "",
        author: "",
      });
    } else {
      alert("Failed to save news.");
    }
  };

  return (
    <div className="container">
      <h1>Submit News</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>News:</label>
          <textarea
            name="news"
            value={formData.news}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Tags:</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: linear-gradient(135deg, #fbd3e9, #f7a1d7);
          border-radius: 12px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
          color: #d6336c;
        }

        .input-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
          color: #f56ca5;
        }

        .input {
          width: 100%;
          padding: 10px;
          border: 2px solid #f56ca5;
          border-radius: 8px;
          background: #fff;
          color: #333;
          font-size: 1rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .input:focus {
          outline: none;
          transform: scale(1.02);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .submit-btn {
          display: block;
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #ff8ac2, #ff2b7f);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .submit-btn:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #ff2b7f, #ff8ac2);
        }

        @media (max-width: 600px) {
          .container {
            padding: 15px;
          }

          h1 {
            font-size: 1.5rem;
          }

          .input, .submit-btn {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
