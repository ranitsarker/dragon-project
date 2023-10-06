import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RightSidebar from "../Components/RightSidebar";
import { Helmet } from "react-helmet";

const NewsDetails = () => {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        fetch('/news.json') 
            .then((response) => response.json())
            .then((data) => {
                const foundNewsItem = data.find((item) => item._id === id);
                setNewsItem(foundNewsItem);
            })
            .catch((error) => {
                console.error("Error fetching news details:", error);
            });
    }, [id]);

    if (!newsItem) {
        return <p>Loading...</p>;
    }

    const { title, details, image_url } = newsItem;

    return (
        <>
            <Helmet>
                <title>Dragon News | Details</title>
            </Helmet>
            <div className="flex flex-wrap">
                <div className="w-full md:w-70p lg:w-4/5 px-4 md:px-10">
                    <div className="max-w-full rounded overflow-hidden shadow-lg mx-auto">
                        <img src={image_url} alt={title} className="w-full h-auto" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{title}</div>
                            <p className="text-gray-700 text-base">{details}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-30p lg:w-1/5 px-4 md:px-10 mt-4 md:mt-0">
                    <RightSidebar />
                </div>
            </div>
        </>
    );
};

export default NewsDetails;
