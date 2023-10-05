import { FaGoogle, FaTwitter, FaGithub, FaFacebook, FaYoutube} from 'react-icons/fa';
import qZone1 from "../../src/assets/qZone1.png";
import qZone2 from "../../src/assets/qZone2.png";
import qZone3 from "../../src/assets/qZone3.png";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';




const RightSidebar = () => {
const { googleLogin, githubLogin } = useContext(AuthContext);
    const handleSocialLogin = (media) =>{
        media()
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }
    return (
        <> 
        
        <div className='p4 space-y-2 m-3'>
        <h4 className="text-xl font-semibold">Login With:</h4>
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn my-3 btn-outline w-full">
                <FaGoogle></FaGoogle>
                Google
            </button>
            <button onClick={() => handleSocialLogin(githubLogin)} className="btn my-3 btn-outline w-full">
                <FaGithub></FaGithub>
                GitHub
            </button>
        </div>

        <div className='p4 space-y-2 m-3'>
        <h4 className="text-xl font-semibold">Find Us:</h4>
        <a href="" className='p-4 flex justify-center items-center border rounded-lg'>
            <FaFacebook className='mr-3'></FaFacebook>
            Facebook
        </a>
        <a href="" className='p-4 flex justify-center items-center border rounded-lg'>
            <FaTwitter className='mr-3'></FaTwitter>
            Twitter
        </a>
        <a href="" className='p-4 flex justify-center items-center border rounded-lg'>
            <FaYoutube className='mr-3'></FaYoutube>
            YouTube
        </a>
        </div>
        <div className='p4 space-y-2 m-3'>
            <h4 className="text-xl font-semibold">Q Zone:</h4>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />

        </div>
        </>
    );
};

export default RightSidebar;