import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import Button from '../pieces/Button';

type HeroBannerProps = {
  /** URL of the background image. */
  image: string | StaticImageData;
  /** URL of the logo. */
  logo: string | StaticImageData;
  /** Alternative text for the background image. */
  altText: string;
  /** CSS class to set image focus. */
  imageFocus: string;
  /** Text to display as the main heading. */
  heroImageText: string;
  /** URL to navigate when the button is clicked. */
  link?: string;
  /** Text to display on the call-to-action button. */
  linkText?: string;
  /** Determines whether to show the site logo. */
  showLogo?: boolean;
};

const HeroImageBannerWithText: FC<HeroBannerProps> = ({
  image,
  logo,
  altText,
  imageFocus,
  heroImageText,
  link,
  linkText,
  showLogo = false,
}) => {
  return (
    <div className="h-96 w-screen block">
      <div className="relative h-full w-full">
        {image && (
          <Image
            src={image}
            alt={altText}
            className={`absolute h-[128vh] w-full object-cover opacity-30 max-h-full ${imageFocus}`}
          />
        )}
        <div className="absolute -z-10 bg-gradient-to-l from-slate-600 via-gray-500 to-primary h-[128vh] w-full max-h-full"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full grid grid-cols-3 px-12 lg:px-32 py-16 gap-y-4">
            <h1 className="order-2 col-span-3 md:col-span-2 xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-bold text-white text-center md:text-left mr-30">
              {heroImageText}
            </h1>
            {link && linkText && (
              <div className="order-3 col-span-3 md:col-span-2 flex justify-center md:justify-start items-center">
                <Button
                  link={link}
                  text={linkText}
                />
              </div>
            )}
            {showLogo && (
              <div className="order-1 md:row-start-1 md:row-end-3 col-span-3 md:col-start-3 flex justify-center md:justify-end items-center">
                <Image
                  src={logo}
                  alt="Woloszyk Plumbing Logo"
                  width={400}
                  height={400}
                  className="max-h-64"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageBannerWithText;
