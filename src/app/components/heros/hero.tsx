import LinkButton from "../pieces/Button";
import YoutubePlayer from "../youtubePlayer";

const Hero = () => {
    return (
        <div className="py-12 mx-auto max-w-7xl lg:py-24">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 md:mb-0 xl:mt-0">
                    <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-primary md:text-7xl lg:text-5xl">Effortless Small Business Launch Packages</h1>
                    <p className="mb-8 text-base leading-relaxed text-left text-base-content">
                        Simplify your startup journey with easy-to-choose packages. Includes a custom landing page, marketing plan, branding essentials and more tailored to meet your unique business needs.
                    </p>
                    <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                        <div className="mt-3 rounded-lg sm:mt-0">
                            <LinkButton link="#pricing" text="Learn More" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                    <div>
                        <div className="relative w-full max-w-lg">
                            <div className="absolute top-0 rounded-full bg-primary-content -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute rounded-full bg-secondary-content -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                            <div className="relative">
                                <YoutubePlayer videoId="GXkEvXHS4Qk" autoPlay={false} title="Test title" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;