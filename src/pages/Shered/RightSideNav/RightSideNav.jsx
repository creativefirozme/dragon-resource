import { FaFacebook, FaGithub, FaGoogle, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 mb-6'>
                <h1 className="text-3xl font-semibold">Login With</h1>
                <button className="btn btn-outline w-full mt-2">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full mt-2">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h1 className="text-3xl font-semibold">Login With</h1>
                <div className="p-4 flex items-center gap-2 border rounded-t-lg w-full mt-2">
                    <a href=""><FaFacebook></FaFacebook></a>
                    Facebook
                </div>
                <div className="p-4 flex items-center gap-2 border-x w-full ">
                    <a href=""><FaTwitter></FaTwitter></a>
                    Twitter
                </div>
                <div className="p-4 flex items-center gap-2 border rounded-b-lg w-full">
                    <a href=""><FaInstagramSquare></FaInstagramSquare></a>
                    Twitter
                </div>
            </div>
            <div className='p-4 mb-6'>
                <h1 className="text-3xl font-semibold">Q-Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;