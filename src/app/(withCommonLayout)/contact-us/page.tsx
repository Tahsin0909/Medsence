import ContactUs from "@/components/contactUs/ContactUs";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Contact Us | Medsence',
}



const ContactPage = () => {
  return (
    <div>
      <ContactUs />
    </div>
  );
};

export default ContactPage;