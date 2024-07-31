import Image, { StaticImageData } from "next/image";
import Button from "../pieces/Button";
import HtmlRenderer from "../pieces/htmlRenderer";
import { HorizontalPosition } from "../types/position";
import { sizes } from "../types/sizes";

interface ImageWithTextSideBySideProps {
    image: StaticImageData;
    imageAlt: string;
    imageSize: sizes;
    imageSide: HorizontalPosition;
    copy: string;
    imageFocus: string;
    callToAction?: {
        text: string;
        link: string;
    }
}

const gridClasses = {
    '1': 'order-1',
    '2': 'order-2',
};

const imageSizes = {
    [sizes.small]: "h-64",
    [sizes.medium]: "h-96",
    [sizes.large]: "h-96 md:h-128",
}

//Vertical Padding - This might go to the block level
//"small" => "py-8",
//"medium" => "py-8 md:py-12",
//"large" => "py-12 md:py-16",

//We did not yet implement image focus

const ImageWithTextSideBySide = ({ image, imageAlt, imageSize, imageSide, copy, callToAction }: ImageWithTextSideBySideProps) => {
    return (
        <div>
            <div className="gap-8 items-center md:py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className={`${imageSide == HorizontalPosition.left ? gridClasses['1'] : gridClasses['2']} ${imageSizes[imageSize]}`}>
                    <Image className="object-contain w-full h-full" src={image} alt={imageAlt} />
                </div>
                <div className={`mt-4 md:mt-0 ${imageSide == HorizontalPosition.left ? gridClasses['2'] : gridClasses['1']}`}>
                    <HtmlRenderer htmlString={copy} />
                    {callToAction && <Button
                        text={callToAction.text}
                        link={callToAction.link}
                    />}
                </div>
            </div>
        </div>)
}

export default ImageWithTextSideBySide;