const Header = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="navbar-start">
                <div className="text-xl text-primary-content px-4">Jumpstart Small Business</div>
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-primary-content">
                    <li><a href="#faq">FAQs</a></li>
                    <li><a href="#testimonials">Tesimonials</a></li>
                    <li><a href="#how-it-works">How it Works</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;