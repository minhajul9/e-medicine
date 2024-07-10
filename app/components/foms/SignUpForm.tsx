'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface LoginData {
    email: String;
    password: String;
    cpassword?: String;
    name: String;
    address: String,
    phone: String,
    gender: String
}

const SignUpForm = () => {

    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data: LoginData) => {
        console.log(data)

        if (data.password === data.cpassword) {

            delete data.cpassword;
            const response = await fetch('/api/user', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(response.ok){
                router.push('/')
            }
        }
        else {
            toast.error("Passwords do not match !", {
                position: "top-center"
              });
        }
    }

    return (<>
        <div className="bg-[#0e7673] bg-opacity-40 rounded-md p-4">
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="card-body grid grid-cols-2">


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name <span className='text-red-600'>*</span></span>

                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email <span className='text-red-600'>*</span></span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password <span className='text-red-600'>*</span></span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" {...register("password", { required: true })} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password <span className='text-red-600'>*</span></span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="input input-bordered" {...register("cpassword", { required: true })} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone <span className='text-red-600'>*</span></span>

                        </label>
                        <input type="text" placeholder="Phone" required className="input input-bordered" {...register("phone", { required: true })} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>

                        </label>
                        <input type="text" placeholder="Address" className="input input-bordered" {...register("address")} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Gender <span className='text-red-600'>*</span></span>

                        </label>
                        <select className="select select-primary w-full max-w-xs" {...register("gender")}>
                            <option disabled selected>Select your gender</option>
                            <option>Male</option>
                            <option>Female</option>

                        </select>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>

        <ToastContainer />
    </>
    );
};

export default SignUpForm;