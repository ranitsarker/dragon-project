import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";
import LeftSidebar from "../Components/LeftSidebar";
import RightSidebar from "../Components/RightSidebar";
import { Helmet } from "react-helmet";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <>
            <Helmet>
                <title>Dragon News | Home</title>
            </Helmet>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/5  mb-4 md:mb-0">
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className="w-full lg:w-3/5 newsContainer  mb-4 md:mb-0">
                    {news.map(aNews => (
                        <NewsCard key={aNews._id} news={aNews}></NewsCard>
                    ))}
                </div>
                <div className="w-full lg:w-1/5 ">
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </>

    );
};


export default Home;