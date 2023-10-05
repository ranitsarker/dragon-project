import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <>
            <div className='p4 space-y-2 m-3'>
                <h4 className="text-xl font-semibold">All Categories:</h4>
                {categories.map(category => (
                    <Link
                        to={`/category/${category.id}`} // Set the category id as part of the URL
                        className="block m-4 text-md font-semibold"
                        key={category.id}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default LeftSidebar;
