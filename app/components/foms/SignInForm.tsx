'use client';

import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";

interface LoginData {
    email: String;
    password: String;
}

const SignInForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit =( data : LoginData) => console.log(data);

    return (
        <div className="bg-[#0e7673] bg-opacity-40 rounded-md p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                </div>
            </form>

            <div className="divider">OR</div>

            <div className='w-full flex justify-center mb-5'>
                <Link href='/sign-up' className="btn btn-xs btn-success sm:btn-sm md:btn-md lg:btn-lg text-white">Sign Up</Link>
            </div>
        </div>
    );
};

export default SignInForm;