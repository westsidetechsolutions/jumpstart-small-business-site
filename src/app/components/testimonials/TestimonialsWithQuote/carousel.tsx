import Carousel from "../../carousels/carousel";
import Testimonial, { TestimonialProps } from "./testimonial";

type TestimonialCarouselProps = {
    /** Array of testimonials */
    testimonials: TestimonialProps[];
};

const TestimonialCarouselWithQuote = ({ testimonials }: TestimonialCarouselProps) => {
    return (
        <Carousel>
            {testimonials.map((testimonial, index) => (
                <Testimonial key={index} name={testimonial.name} review={testimonial.review} />
            ))}
        </Carousel>
    )
}

export default TestimonialCarouselWithQuote;