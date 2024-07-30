import LinkButton from "../pieces/Button";
import HtmlRenderer from "../pieces/htmlRenderer";

type CopyWithCallToActionProps = {
    /** String comprised of HTML to render out as copy */
    copy: string;
    /** Link to where the the user is directed when the button is clicked */
    buttonLink: string;
    /** Text to go inside of the button */
    buttonText: string;
}

const CopyWithCallToAction = ({ copy, buttonLink, buttonText } : CopyWithCallToActionProps) => {
    return (
        <div>
            <div className="grid grid-cols-8">
                <div className="col-span-8 md:col-span-6">
                    <HtmlRenderer htmlString={copy} />
                </div>
                <div className="mt-12 col-span-8 md:col-span-2 flex flex-col justify-center items-center">
                    <LinkButton link={buttonLink} text={buttonText} />
                </div>
            </div>
        </div>  
    )
}

export default CopyWithCallToAction;