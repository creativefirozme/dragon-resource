import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h1 className='font-bold text-7xl text-center mb-6'> Oops </h1>

                <h1 className='font-bold text-5xl text-center mb-6'> 404 </h1>

                <h2 className='font-semibold text-2xl'> Page not Found</h2>

                <div className="mx-auto items-center justify-center">
                    <Link className="btn btn-neutral mt-10" to="/">Go Home</Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;