import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsByCategory from "../Components/NewsByCategory";

const CategoryNews = () => {
  const { categoryId } = useParams(); // Get the categoryId from the URL parameter
  const [categoryName, setCategoryName] = useState(""); // State to store the category name

  useEffect(() => {
    // Fetch the category name from categories.json based on categoryId
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => {
        const category = data.find((cat) => cat.id === categoryId);
        if (category) {
          setCategoryName(category.name);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, [categoryId]);

  return (
    <div>
      <h1 className="text-3xl text-center py-10 font-bold">{categoryName}</h1>
      <NewsByCategory categoryId={categoryId} />
    </div>
  );
};

export default CategoryNews;
