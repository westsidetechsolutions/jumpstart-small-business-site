import MaterialSymbol from "./materialSymbol";

enum Position {
    left,
    right
  }

type StepProps = {
    step: {
        title: string,
        explanation: string,
        position: Position,
        symbol: string,
    }
};

const Step = (props: StepProps) => {
    const position = props.step.position === Position.left ? `timeline-start md:text-end` : `timeline-end`;
    return (
        <li>
        <div className="timeline-middle">
            <MaterialSymbol symbol={props.step.symbol} />
        </div>
        <div className={`${position} mb-10 text-primary`}>
            <div className="text-lg font-black text-primary">{props.step.title}</div>
            <span className="text-base-content">
                {props.step.explanation}
            </span>
        </div>
        <hr />
    </li>
    )
}

const processSteps = [
    {
        title: "Initial consultation",
        explanation: "The first step in launching your business is a consultation call. (need to detail what will happen in the call and what we hope to accomplish.",
        position: Position.left,
        symbol: "partner_exchange",
    },
    {
        title: "Wireframe of your landing page",
        explanation: "I will create a very basic wireframe of your landing page with explanations for each section. This will be a simple overview to make sure that we are properly conveying the message of your business to your target market.",
        position: Position.right,
        symbol: "web_asset",
    },
    {
        title: "Marketing Strategy Development",
        explanation: "Next, a marketing plan is created for your business. This marketing plan will cover may different topics, such as some ideas for unique selling points, an in depth swot analysis, buyer persona examples and walking through the marketing funnel with a unique strategy.",
        position: Position.left,
        symbol: "groups",
    },
    {
        title: "Site design and development",
        explanation: "Once the wireframe is approved, I will craft a custom design for your site and send that over for approval once more. Once you are happy with the design, the landing page will be developed.",
        position: Position.right,
        symbol: "web",
    },
    {
        title: "Launch",
        explanation: "The site is developed and ready for launch! The code will either be delivered or I will set the site live!",
        position: Position.left,
        symbol: "rocket_launch",
    },
    {
        title: "Promotion",
        explanation: "Finally, I'll create and edit a video showcasing your business. I'll talk about what makes it so great and share the video on all of my social media channels.",
        position: Position.right,
        symbol: "play_arrow",
    },
]

const Steps = () => {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {processSteps.map((step, index) => {
                return <Step key={`step-${index}`} step={step} />
            })}
        </ul>
    )
}

export default Steps;