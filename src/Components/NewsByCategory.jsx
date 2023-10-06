import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsByCategory = ({ categoryId }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch all news data from news.json
    fetch(`/news.json`)
      .then((response) => response.json())
      .then((data) => {
        // Filter news based on the categoryId
        const filteredNews = data.filter((post) => post.category_id === categoryId);
        setNews(filteredNews);
      })
      .catch((error) => console.error("Error fetching news data:", error));
  }, [categoryId]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4 md:mx-10">
        {news.map((post) => (
          <div key={post.id} className="border p-4">
            <img src={post.image_url} alt={post.title} className="w-full h-auto" />
            <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
            <p className="mt-2">
              {post.details.length > 200
                ? post.details.slice(0, 200) + "..."
                : post.details}
            </p>
            <Link
              to={`/news/${post._id}`} // Set the specific news post URL
              className="text-blue-950 font-bold"
            >
              Read More...
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
NewsByCategory.propTypes = {
  categoryId: PropTypes.string.isRequired, // Adjust the prop type as needed
};

export default NewsByCategory;