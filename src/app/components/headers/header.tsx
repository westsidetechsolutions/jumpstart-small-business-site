import logo from "@/app/assets/logos/yellow-white-logo.png";
import Image from "next/image";

const Header = () => {
    return (
        <nav className="navbar bg-primary fixed top-0 z-50">
            <div className="navbar-start">
                <Image className="h-8 w-36 m-2" src={logo} alt="Jumpstart Small Business Logo" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-primary-content">
                    <li><a href="#faq">FAQs</a></li>
                    {/*<li><a href="#testimonials">Tesimonials</a></li>*/}
                    <li><a href="#how-it-works">How it Works</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;