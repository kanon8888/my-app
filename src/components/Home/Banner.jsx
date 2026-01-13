import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
                <h2 className='text-4xl font-bold'>Explor Smart Shop</h2>
                <p>Buy Every toy with up to 15% Discount</p>
                <button className='btn btn-primary btn-outline'>Expore Products</button>
            </div>
            <div className='flex-1'>
                <Image alt='Buy Every toy with up to 15% Discount' src={'/image-678.jpg'} width={500} height={400}></Image>
            </div>
        </div>
    );
};

export default Banner;