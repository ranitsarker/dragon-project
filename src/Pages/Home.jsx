import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";
import LeftSidebar from "../Components/LeftSidebar";
import RightSidebar from "../Components/RightSidebar";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div className="flex">
            <div className="w-1/5 border"><LeftSidebar></LeftSidebar></div>
            <div className="w-3/5 newsContainer border">
                {
                    news.map(aNews => <NewsCard
                        key={aNews._id}
                        news={aNews}
                    ></NewsCard>)
                }
            </div>
            <div className="w-1/5 border"><RightSidebar></RightSidebar></div>
        </div>
    );
};


export default Home;