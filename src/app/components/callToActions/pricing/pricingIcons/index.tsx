
import Visa from './dark/1.png';
import Mastercard from './dark/2.png';
import Google from './dark/11.png';
import JCB from './dark/16.png';
import Amex from './dark/22.png';
import Image from 'next/image';

const PricingIcons = () => {
    return (
        <div className="flex justify-center w-full">
            <div className='w-fit grid grid-cols-2 md:grid-cols-5 justify-items-center'>
                <Image className='col-span-1' src={Visa} alt="Visa Logo" />
                <Image className='col-span-1' src={Mastercard} alt="Mastercard Logo" />
                <Image className='col-span-1' src={Google} alt="Google Wallet Logo" />
                <Image className='col-span-1' src={JCB} alt="JCB Logo" />
                <Image className='col-span-1' src={Amex} alt="American Express Logo" />
            </div>
        </div>
    )
}

export default PricingIcons;