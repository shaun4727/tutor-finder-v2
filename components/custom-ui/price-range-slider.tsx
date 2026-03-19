'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import './price-range-slider.css';

interface PriceRangeSliderProps {
    min: number;
    max: number;
    onChange: (value: { min: number; max: number }) => void;
    rangeColor?: string;
    width?: string | number;
    currency?: string;
}

const PriceRangeSlider = ({
    min,
    max,
    onChange,
    rangeColor = '#0466c8',
    width = '70%',
    currency = 'BDT',
}: PriceRangeSliderProps) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (val: number) => Math.round(((val - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        if (minVal !== minValRef.current || maxVal !== maxValRef.current) {
            onChange({ min: minVal, max: maxVal });
            minValRef.current = minVal;
            maxValRef.current = maxVal;
        }
    }, [minVal, maxVal, onChange]);

    return (
        <div className="slider-container" style={{ width }}>
            {/* Minimalist Price Display */}
            <div className="price-display">
                <div className="price-box">
                    <span>Min</span>
                    <p>
                        {currency} {minVal.toLocaleString()}
                    </p>
                </div>
                <div className="price-divider" />
                <div className="price-box text-right">
                    <span>Max</span>
                    <p>
                        {currency} {maxVal.toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="price_range_slider">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(e) => {
                        const value = Math.min(Number(e.target.value), maxVal - 1);
                        setMinVal(value);
                    }}
                    className="thumb thumb-left"
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(e) => {
                        const value = Math.max(Number(e.target.value), minVal + 1);
                        setMaxVal(value);
                    }}
                    className="thumb thumb-right"
                />

                <div className="slider">
                    <div className="track-slider" />
                    <div
                        ref={range}
                        className="range-slider"
                        style={{ backgroundColor: rangeColor }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
