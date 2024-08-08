import MaterialSymbol from "../components/pieces/materialSymbol";
import Section from "../components/pieces/section"

const ThankYou = () => {
    return (
        <Section>
            <div className="">
                <div className="bg-white p-6  md:mx-auto">
                    <div className="w-full flex justify-center">
                        <MaterialSymbol symbol="check_circle" size={80} classes="text-success" />
                    </div>
                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Complete!</h3>
                        <p className="text-gray-600 my-2">Thank you for your purchase! I will reach out to get started!</p>
                        <p> Have a great day!</p>
                        <div className="py-10 flex justify-center">
                            <div className="w-60 grid grid-cols-1 space-y-8">
                            <a href="https://www.westsidetechsolutions.com" className="btn btn-primary col-span-1">
                                Other Software Development Services
                            </a>
                            <a href="/" className="btn btn-primary btn-outline col-span-1">
                                Back to Homepage
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ThankYou;