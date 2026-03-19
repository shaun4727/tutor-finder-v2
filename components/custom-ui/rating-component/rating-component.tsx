import { Star } from 'lucide-react';
import { useState } from 'react';

const RatingComponent = ({ className = '' }: { className: string }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    return (
        <div>
            <div className={`flex gap-2 ${className}`}>
                {[1, 2, 3, 4, 5].map((starValue) => (
                    <Star
                        key={starValue}
                        size={15}
                        className={`star-icon ${
                            (hover || rating) >= starValue ? 'active' : ''
                        } ${hover >= starValue && !rating ? 'hovered' : ''}`}
                        onClick={() => {
                            setRating(starValue);
                            setSubmitted(false);
                        }}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        fill={(hover || rating) >= starValue ? 'currentColor' : 'none'}
                    />
                ))}
            </div>

            <style jsx>{`
                .rating-container {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    padding: 50px 60px;
                    border-radius: 24px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    text-align: center;
                    max-width: 500px;
                    width: 100%;
                    transition: transform 0.3s ease;
                    margin: 0 auto;
                }

                .rating-container:hover {
                    transform: translateY(-5px);
                }

                h1 {
                    color: #2d3748;
                    font-size: 28px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }

                .provider-name {
                    color: #718096;
                    font-size: 18px;
                    margin-bottom: 35px;
                    font-weight: 500;
                }

                .stars-container {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 35px;
                }

                :global(.star-icon) {
                    cursor: pointer;
                    color: #cbd5e0;
                    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                :global(.star-icon:hover) {
                    transform: scale(1.3) rotate(10deg);
                }

                :global(.star-icon.active) {
                    color: #fbbf24;
                    animation: pulse 0.4s ease;
                }

                :global(.star-icon.hovered) {
                    color: #fbbf24;
                    transform: scale(1.2);
                }

                @keyframes pulse {
                    0%,
                    100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.3);
                    }
                }

                .rating-text {
                    font-size: 20px;
                    color: #4a5568;
                    font-weight: 600;
                    min-height: 30px;
                    margin-bottom: 20px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .rating-text.show {
                    opacity: 1;
                }

                .submit-btn {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    padding: 15px 40px;
                    font-size: 16px;
                    font-weight: 600;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                    opacity: 0;
                    transform: translateY(10px);
                }

                .submit-btn.show {
                    opacity: 1;
                    transform: translateY(0);
                }

                .submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
                }

                .rating-labels {
                    display: flex;
                    justify-content: space-between;
                    color: #a0aec0;
                    font-size: 12px;
                    margin-top: -15px;
                    margin-bottom: 20px;
                    padding: 0 10px;
                }
            `}</style>
        </div>
    );
};

export default RatingComponent;
