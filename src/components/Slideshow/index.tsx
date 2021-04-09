import React, { FC } from 'react'
import { Items } from '../../interfaces/preview.interface';
import './Slideshow.css';

interface SlideshowProps {
    items: Items[]
    index: number
    showPrev: boolean
    showNext: boolean
    onClickPrev: () => void
    onClickNext: () => void
}

const Slideshow: FC<SlideshowProps> = ({
    items,
    index,
    showPrev,
    showNext,
    onClickPrev,
    onClickNext
}) => (
    <div className="slideshow">
        {
            items.map((item, i) => (
                <div
                    key={item.alt}
                    className={
                        i === index
                            ? 'slideshow-slide active'
                            : 'slideshow-slide'
                    }
                >
                    <img
                        src={item.url}
                        alt={item.alt}
                        className={item.scale ? 'scale' : null}
                    />
                </div>
            ))
        }
        {showPrev
            ? (
                <span
                    onClick={onClickPrev}
                    className="arrow arrow-prev"
                />
            ) : null
        }
        {showNext
            ? (
                <span
                    onClick={onClickNext}
                    className="arrow arrow-next"
                />
            ) : null
        }
    </div>
)

export default Slideshow;
