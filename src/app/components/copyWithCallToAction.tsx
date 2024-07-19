import LinkButton from "./linkButton";

const CopyWithCallToActions = () => {
    return (
        <div className="py-8 sm:py-16">
            <div className="grid grid-cols-8">
                <div className="col-span-8 md:col-span-6">
                    <h2 className="mb-4 text-primary">
                        What is Jumpstart Small Business?
                    </h2>
                    <p className="mb-8 text-base-content">
                        Jumpstart Small Business is an affordable collection of services that I wished that I had when I started my business, such as a tailored landing page with a custom design, a marketing plan specific to your business, a bespoke branding kit with professional social media banners and more.
                    </p>
                    <p className="mb-8 text-base-content">
                        Designed specifically for new entrepreneurs and small businesses, Jumpstart Small Business is the ultimate starter kit that provides everything you need to launch your business successfully and affordably. Experience the ease of having a dedicated team handle your business setup, allowing you to focus on what you do best.
                    </p>
                </div>
                <div className="col-span-8 md:col-span-2 flex flex-col justify-center items-center">
                    <LinkButton link="#pricing" text="Get Started" />
                </div>
            </div>
        </div>
    )
}

export default CopyWithCallToActions;