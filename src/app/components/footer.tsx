const Footer = () => {
    return (
        <footer className="p-4 bg-primary text-primary-content md:p-8 lg:p-10">
            <div className="mx-auto max-w-screen-xl text-center">
                <div className="text-primary-content">Jumpstart Small Business</div>
                <span className="text-sm text-primary-content sm:text-center">©{new Date().getFullYear()} <a href="https://www.westsidetechsolutions.com" className="hover:underline">West Side Technology Solutions</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;