import DisclaimerPage from '@/components/disclaimer/Disclaimer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Disclaimer | Medsence',
}




const page = () => {
  return (
    <div>
      <DisclaimerPage />
    </div>
  );
};

export default page;