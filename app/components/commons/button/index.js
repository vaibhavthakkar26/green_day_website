import Link from 'next/link';
import React from 'react';

const Button = ({ label, href, variant, className }) => {
    const baseStyles = '';

    const variants = {
        grayButton: `text-[20px] md:text-[24px] leading-[100%] text-white font-OpenSans py-[27px] px-[60px] border-[1px] border-white backdrop-blur-[64px] block tracking-[0.65px] relative  bg-white/10 inline-block hover:opacity-75 basic-transition`,
        lineButton: "text-base font-OpenSans border-t-[1px] border-b-[1px] border-white hover:opacity-75 basic-transition"

    };

    return (
        <div>
            <Link href={href} className={`${variants[variant] || ''} ${className}`}>
                <button>
                    {label}
                </button>
            </Link>
        </div>
    );
};

export default Button;
