import MaterialSymbol from "../pieces/materialSymbol";
import { HorizontalPosition } from "../types/position";

type StepProps = {
    /** Bolded text that represents the title for the step */
    title: string,
    /** Accompanying text for the step that is descriptive and more in depth for the step */
    explanation: string,
    /** Horizontal Position to indicate which side the step should be on */
    position: HorizontalPosition,
    /** Google Material Symbols Icon slug to be rendered out in the step */
    symbol: string,
};

type StepsProps = {
    /** Array of steps */
    steps: StepProps[];
}

export const Step = ({ title, explanation, position, symbol }: StepProps) => {
    const positionClass = position === HorizontalPosition.left ? `timeline-start md:text-end` : `timeline-end`;
    return (
        <li className="mb-12">
        <div className="timeline-middle mx-8">
            <MaterialSymbol symbol={symbol} size={64} classes="text-primary" />
        </div>
        <div className={`${positionClass} mb-10 text-primary`}>
            <div className="text-lg font-black text-primary">{title}</div>
            <span className="text-base-content">
                {explanation}
            </span>
        </div>
        <hr />
    </li>
    )
}

const Steps = ({ steps } : StepsProps) => {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {steps.map((step, index) => {
                return <Step key={`step-${index}`} {...step} />
            })}
        </ul>
    )
}

export default Steps;