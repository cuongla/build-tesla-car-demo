import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { randomNumbers } from '../../utils';
import './OrderSuccess.css';

const OrderSuccess = () => {
    const [isOpen, setIsOpen] = useState(false);
    const orderId = randomNumbers(20);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="order-wrapper">
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '1rem'
            }}>
                <button
                    className="box-button box-order-button"
                    onClick={togglePopup}>
                    Order Now
            </button>
            </div>
            {
                isOpen && (
                    <div className="popup-box">
                        <div className="box">
                            <span
                                className="close-icon"
                                onClick={togglePopup}>
                                x
                            </span>
                            <BsCheckCircle className="success-icon" />
                            <h2>Order Successful</h2>
                            <p style={{ marginBottom: '3rem' }}>Thank you for ordering. We received your order and will begin prcessing it soon.Your order information appears belows.</p>
                            <p>YOUR ORDER NO. <b>{orderId}</b></p>
                            <Link to="/">
                                <button className="box-button">
                                    Continue
                                </button>
                            </Link>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default OrderSuccess
