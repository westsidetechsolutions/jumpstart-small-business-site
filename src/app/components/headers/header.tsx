import logo from "@/app/assets/logos/yellow-white-logo.png";

const Header = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="navbar-start">
                <img className="h-8 m-2" height="150" src={logo.src} about="Jumpstart Small Business Logo" />
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