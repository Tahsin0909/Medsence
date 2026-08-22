import AdminLogin from '@/components/auth/Login';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Admin | Medsence',
}



const page = () => {
    return (
        <div>
            <AdminLogin />
        </div>
    );
};

export default page;