
import { useParams } from "react-router-dom";
import RightSidebar from "../Components/RightSidebar";

const NewsDetails = () => {
    const {id, image_url, title, details} = useParams();
    return (
        <div className="flex">
            <div className="w-4/5">
                <div className="max-w-xl mx-auto py-6">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <p>{id}</p>
                        <img src={image_url} alt={title} className="w-full h-auto" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{title}</div>
                            <p className="text-gray-700 text-base">{details}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/5">
                <RightSidebar />
            </div>
        </div>
    );
};

export default NewsDetails;
