import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, details, image_url, _id } = news;

    return (
        <div className="w-full p-2">
            <div className="max-w-full rounded border p-4 bg-slate-100">
                <img src={image_url} alt={title} className="w-full h-auto" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    {
                        details.length > 200
                        ? <p>{details.slice(0, 200)} <Link 
                        to={`/news/${_id}`}
                        className="text-blue-950 font-bold">
                            Read More...
                            </Link>
                        </p>
                        :<p className="text-gray-700 text-base">{details}</p>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
