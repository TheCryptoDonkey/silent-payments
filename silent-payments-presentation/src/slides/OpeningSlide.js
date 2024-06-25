import React from 'react';
import logo from './images/TheCryptoDonkey.png'

export default function OpeningSlide() {
    return (
        <div className="bg-[#F7931A] p-8 rounded-lg shadow-2xl max-w-4xl mx-auto h-screen flex flex-col justify-center items-center">
            <div className="rounded-full p-4 mb-8 shadow-lg">
                <img
                    src={logo}
                    alt="The Crypto Donkey Logo"
                    className="w-64 h-64 object-cover rounded-full"
                />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-4 text-center">
                Silent Payments in Bitcoin
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#4D4D4D] mb-8 text-center">
                Enhancing Privacy and Fungibility
            </h2>
            <p className="text-xl text-[#FFFFFF] text-center">
                Presented by The Crypto Donkey
            </p>
        </div>
    );
}