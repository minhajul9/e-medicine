import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaBriefcaseMedical, FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaMobile, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {

    const paymentSystems = [
        {
            title: 'Bkash',
            logo: "https://seeklogo.com/images/B/bkash-logo-FBB258B90F-seeklogo.com.png"
        },
        {
            title: 'Nagad',
            logo: "https://seeklogo.com/images/N/nagad-logo-AA1B37DF1B-seeklogo.com.png"
        },
        {
            title: 'Rocket',
            logo: "https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png"
        },
        {
            title: 'Sure Cash',
            logo: "https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2020/04/15/surecash.png"
        },
        {
            title: 'Upai',
            logo: "https://seeklogo.com/images/U/upay-logo-44D7B11A45-seeklogo.com.png"
        },
        {
            title: 'M Cash',
            logo: "data:image/png;base64,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"
        },
        {
            title: 'Visa',
            logo: "https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png"
        },
        {
            title: 'MasterCard',
            logo: "https://static-00.iconduck.com/assets.00/mastercard-icon-1024x643-j3zb44jj.png"
        },
        {
            title: 'AmericanExpress',
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png"
        },
    ]
    
    return (
        <footer className="footer bg-[#0e7673] text-white p-10">
            <aside>
                <Link href='/' className='flex gap-2 items-center'>
                    <FaBriefcaseMedical className='text-2xl' />
                    <p className='font-londrina text-3xl'>Medicine</p>
                </Link>
                <p className='max-w-64 text-xs'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud
                    exercitation
                </p>

                <div className='flex items-center gap-2 text-sm'>
                    <Image src='/tradeLicense.png' width='100' height='200' alt='Trade License' />

                    <div className='flex flex-col gap-2'>
                        <p className='underline'>Trade License</p>
                        <p className='opacity-80'>TRAD/DNCC/057777/2024</p>
                        <p className='opacity-80'>Others License : 180000</p>
                    </div>
                </div>
            </aside>

            <div className='md:w-80'>
                <div className='footer'>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Terms and Conditions</a>
                        <a className="link link-hover">Refund and Return Policy</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title">Userful Links</h6>
                        <a className="link link-hover">Account</a>
                        <a className="link link-hover">Best Selling Products</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">Blogs</a>
                    </nav>
                </div>

                <div className='w-full'>
                    <p className='text-center border-b-2 border-slate-700'>Pay With</p>
                    <div className='flex gap-2 justify-center mt-4'>
                        <div className='grid grid-cols-3 gap-2'>
                            {
                                paymentSystems.map((item, index) => (
                                    <div className='bg-white w-10 h-5 flex justify-center item-center p-0.5 rounded' key={index}>
                                        <img src={item.logo} height='20' alt={item.title} />
                                    </div>
                                ))
                            }
                        </div>

                        <div className='grid grid-cols-3 gap-2'>
                            {
                                paymentSystems.map((item, index) => (
                                    <div className='bg-white w-10 h-5 flex justify-center item-center p-0.5 rounded' key={index}>
                                        <img src={item.logo} height='20' alt={item.title} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <nav>
                <h6 className="footer-title">Contact Info</h6>
                <p className='flex gap-2 items-center'>
                    <FaLocationDot />
                    <span>Address: Sirajganj Sadar, Sirajganj</span>
                </p>
                <p className='flex gap-2 items-center'>
                    <FaPhoneAlt />
                    <span>Hot Line : 0962000000</span>
                </p>
                <p className='flex gap-2 items-center'>
                    <FaMobile />
                    <span>Mobile : 01700000000</span>
                </p>
                <p className='flex gap-2 items-center'>
                    <IoMdMail />
                    <span>E-mail : medicine@gmail.com</span>
                </p>

                <div className='flex gap-4 text-[#0e7673] mt-5'>
                    <div className='bg-white p-1 rounded-full  hover:bg-slate-600 hover:text-white'>
                        <FaFacebookF />
                    </div>
                    <div className='bg-white p-1 rounded-full  hover:bg-slate-600 hover:text-white'>
                        <FaXTwitter />
                    </div>
                    <div className='bg-white p-1 rounded-full  hover:bg-slate-600 hover:text-white'>
                        <FaInstagram />
                    </div>
                    <div className='bg-white p-1 rounded-full  hover:bg-slate-600 hover:text-white'>
                        <AiOutlineYoutube />
                    </div>
                    <div className='bg-white p-1 rounded-full  hover:bg-slate-600 hover:text-white'>
                        <FaLinkedinIn />
                    </div>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;