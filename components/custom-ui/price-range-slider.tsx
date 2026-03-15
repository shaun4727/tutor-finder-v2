'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import './price-range-slider.css';

const cssValues = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    gap: '2px',
    paddingTop: '10px',
};

interface PriceRangeSliderProps {
    min: number;
    max: number;
    onChange: (value: { min: number; max: number }) => void;
    trackColor?: string;
    rangeColor?: string;
    width?: number;
    currency?: string;
    // valueStyle?: any; // Add type for cssValues
}

const PriceRangeSlider = ({
    min,
    max,
    trackColor = '#cecece',
    onChange,
    rangeColor = '#ff0303',
    // valueStyle = cssValues,
    width = 300,
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
        if (minVal != minValRef.current || maxVal != maxValRef.current) {
            onChange({ min: minVal, max: maxVal });

            minValRef.current = minVal;
            minValRef.current = maxVal;
        }
    }, [minVal, maxVal, onChange]);

    return (
        <div className="w-full flex items-center justify-center flex-col space-y-16">
            {/* Display the min and max values */}
            <div className="w-75 px-4 flex items-center justify-between gap-x-5">
                <p className="text-xl text-neutral-100 font-semibold">
                    {currency} {minVal}
                </p>
                <div className="flex-1 border-dashed border border-neutral-500 mt-1"></div>
                <p className="text-xl text-neutral-100 font-semibold">
                    {currency} {maxVal}
                </p>
            </div>
            {/* style the custom page range slider */}
            <div className="price_range_slider" style={{ width }}>
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
                    style={{
                        width,
                        zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
                    }}
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
                    style={{
                        width,
                        zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
                    }}
                />

                <div className="slider">
                    <div className="track-slider" style={{ backgroundColor: trackColor }} />
                    <div className="range-slider" style={{ backgroundColor: rangeColor }} />
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
