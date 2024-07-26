import Visa from'./dark/1.png';
import Mastercard from'./dark/2.png';
import Google from'./dark/11.png';
import JCB from'./dark/16.png';
import Amex from'./dark/22.png';

const PricingIcons = () => {
    return (
        <div className='w-full justify-center items-center flex'>
            <img className='h-12' src={Visa.src} alt="Visa Logo" />
            <img className='h-12' src={Mastercard.src} alt="Matercard Logo" />
            <img className='h-12' src={Google.src} alt="Googl Wallet Logo" />
            <img className='h-12' src={JCB.src} alt="JCB Logo" />
            <img className='h-12' src={Amex.src} alt="American Express Logo" />
        </div>
    )
}

export default PricingIcons;