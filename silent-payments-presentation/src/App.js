import React, {useState} from 'react';
import BIP352SummarySlide from './slides/BIP352SummarySlide';
import SilentPaymentsPrivacySlide from './slides/SilentPaymentsPrivacySlide';
import SilentPaymentsTechnicalSlide from './slides/SilentPaymentsTechnicalSlide';
import SilentPaymentsAdoptionSlide from './slides/SilentPaymentsAdoptionSlide';
import SilentPaymentsFutureSlide from './slides/SilentPaymentsFutureSlide';
import OverviewComparisonSlide from "./slides/OverviewComparisonSlide";
import GlossarySlide from "./slides/Glossary";
import WrapUpSlide from "./slides/Wrapup";
import OpeningSlide from "./slides/OpeningSlide";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    OpeningSlide,
    GlossarySlide,
    OverviewComparisonSlide,
    BIP352SummarySlide,
    SilentPaymentsPrivacySlide,
    SilentPaymentsTechnicalSlide,
    SilentPaymentsAdoptionSlide,
    SilentPaymentsFutureSlide,
    WrapUpSlide
];

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const CurrentSlideComponent = slides[currentSlide];

    return (
        <div className="relative h-screen">
            <CurrentSlideComponent/>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full shadow-lg hover:bg-opacity-75 transition-all duration-200"
                aria-label="Previous slide"
            >
                <ChevronLeft size={64} className="text-[#F7931A]"/>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full shadow-lg hover:bg-opacity-75 transition-all duration-200"
                aria-label="Next slide"
            >
                <ChevronRight size={64} className="text-[#F7931A]"/>
            </button>
        </div>
    );
}

export default App;