import Image from 'next/image';
import { FC } from 'react';
import MaterialSymbol from '../pieces/materialSymbol';

type ServiceProps = {
    /** Name of the service */
    service: string;
    /** Google Material Symbols slug */
    symbol: string;
};

type ServicesGridProps = {
    /** Array of services to display */
    services: ServiceProps[];
};

export const ListItem = ({ service, symbol }: ServiceProps) => {
    return (<div
        className="flex items-start gap-4 sm:gap-5 flex-row"
        data-aos="fade-in"
    >
        <div className="bg-gray-100 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
            <MaterialSymbol size={64} symbol={symbol} />
        </div>
        <div className="h-full flex justify-center items-center">
            <h3
                className="text-lg sm:text-xl font-bold font-header text-primary"
            >
                {service}
            </h3>
        </div>
    </div>)
}

/**
 * ServicesGrid component
 *
 * This component displays a grid of services, each with an optional icon.
 * The service name is displayed next to the icon, and the icon is either
 * provided via URL or falls back to a default gear icon.
 */
const ListWithSvgs: FC<ServicesGridProps> = ({ services }) => {
    return (
        <div className="grid grid-cols-3 w-full gap-y-6 antialiased">
            <div className="col-span-3 gap-y-6">
                <div className="p-4 rounded-lg sm:p-8 bg-gray-50">
                    <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
                        {services.map((service, index) => (
                            <ListItem service={service.service} symbol={service.symbol} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListWithSvgs;
