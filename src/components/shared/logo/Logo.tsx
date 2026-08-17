import Image from "next/image";
import logo from "@/assets/logo/medsence.png"
import Link from "next/link";
const Logo = () => {
    return (
        <Link href={"/"}>
            <div className="md:w-24 w-20 h-20 md:h-24 rounded-md">
                <Image src={logo} alt="Company Logo" objectFit="fit" className="rounded-md inset-5" />
            </div>
        </Link>

    );
};

export default Logo;