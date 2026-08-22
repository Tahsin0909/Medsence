import FeedBacksPage from '@/components/feedbacks/FeedbacksPage';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: 'Feedbacks | Medsence',
}



const page = () => {
    return (
        <div>
            <FeedBacksPage />
        </div>
    );
};

export default page;