import { useContext } from "react";
import { AuthContext } from '../Providers/AuthProvider';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import qZone1 from "../../src/assets/qZone1.png";
import qZone2 from "../../src/assets/qZone2.png";
import qZone3 from "../../src/assets/qZone3.png";
import toast from "react-hot-toast";

const RightSidebar = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      // Show toast message upon successful Google login
      toast.success('Successfully logged in.');
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  // Function to handle GitHub login
  const handleGitHubLogin = async () => {
    try {
      await githubLogin();
      // Show toast message upon successful GitHub login
      toast.success('Successfully logged in.');
    } catch (error) {
      console.error("GitHub login error:", error);
    }
  };

  return (
    <> 
      <div className='p4 space-y-2 m-3'>
        <h4 className="text-xl font-semibold">Login With Social:</h4>
        <button onClick={handleGoogleLogin} className="btn my-3 btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button onClick={handleGitHubLogin} className="btn my-3 btn-outline w-full">
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
