import logo from "@/app/assets/logos/yellow-white-logo.png";

const Footer = () => {
    return (
        <footer className="p-4 bg-primary text-primary-content md:p-8 lg:p-10">
            <div className="mx-auto max-w-screen-xl text-center flex justify-center flex-col space-y-8">
                <img className="h-12 mx-auto"  height="150" src={logo.src} about="Jumpstart Small Business Logo" />
                <span className="text-sm text-primary-content sm:text-center">©{new Date().getFullYear()} <a href="https://www.westsidetechsolutions.com" className="hover:underline">West Side Technology Solutions</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;