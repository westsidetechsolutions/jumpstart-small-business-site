const TestimonialCard = () => {
    return (
        <div className="w-full card bg-secondary text-secondary-content lg:w-80 shadow-xl col-span-1 text-center">
            <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h2 className="card-title text-center w-full">Card title!</h2>
            </div>
        </div>
    )
}

const Testimonials = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
        </div>
    )
}

export default Testimonials;