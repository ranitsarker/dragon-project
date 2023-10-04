
import { useParams } from "react-router-dom";
import RightSidebar from "../Components/RightSidebar";

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div className="flex">
            <div className="w-4/5">
                <div className="max-w-xl mx-auto py-6">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <p>{id}</p>
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
