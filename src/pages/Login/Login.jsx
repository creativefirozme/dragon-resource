import React from 'react';
import Navbar from '../Shered/Navbar/Navbar';
import Header from '../Shered/Header/Header';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user,'success');
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='mt-5'>
                <h1 className='text-center font-medium text-2xl mb-5'>Please Login</h1>
                <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>don't have an account <Link to='/register' className='font-medium text-blue-600'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;