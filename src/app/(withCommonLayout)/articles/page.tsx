import Blogs from '@/components/blogs/Blogs';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: 'Latest Article | Medsence',
}



const page = () => {
    return (
        <div className='lg:mt-0 md:mt-20 mt-28'>
            <Blogs />
        </div>
    );
};

export default page;