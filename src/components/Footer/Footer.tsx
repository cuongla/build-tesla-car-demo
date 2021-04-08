import React, { FC } from 'react';
import { formatPrice } from '../../utils';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import './Footer.css';

interface FooterProps {
    totalPrice: number
    disablePrev: boolean
    disableNext: boolean
    onClickPrev: () => void
    onClickNext: () => void
}

const Footer: FC<FooterProps> = ({
    totalPrice,
    disablePrev,
    disableNext,
    onClickPrev,
    onClickNext
}) => {
    return (
        <div className="footer">
            <div>
                <button
                    onClick={onClickPrev}
                    disabled={disablePrev}>
                    <MdNavigateBefore />
                    <span>Prev</span>
                </button>
            </div>
            <div>
                <span>{formatPrice(totalPrice, '-')}</span>
            </div>
            <div>
                <button
                    onClick={onClickNext}
                    disabled={disableNext}
                >
                    <span>Next</span>
                    <MdNavigateNext />
                </button>
            </div>
        </div>
    )
}

export default Footer
