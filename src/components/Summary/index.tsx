import React, { FC } from 'react';
import { IDesign, IModel } from '../../interfaces/model.interface';
import { IConfig } from '../../interfaces/preview.interface';
import { formatPrice } from '../../utils';
import './Summary.css';

interface SummaryProps {
    config: IConfig
    models: IModel[]
    totalPrice: number
}

const Summary: FC<SummaryProps> = ({
    config,
    models,
    totalPrice
}) => {
    // model
    const selectedModel = models?.find(model => model?.key === config?.model);

    // type
    const selectedType = selectedModel?.types?.find(type => type.value === config?.car_type);

    // color
    const selectedColor = selectedModel?.colors?.find((color: IDesign) => color.value === config?.color);

    // wheels
    const selectedWheels = selectedModel?.wheels?.find(wheels => wheels.value === config?.wheels);

    // interior color
    const selectedInteriorColor = selectedModel?.interiorColors?.find(interiorColor => interiorColor.value === config?.interior_color);

    // interior layout
    const selectedInteriorLayout = selectedModel?.interiorLayouts?.find(interiorLayout => interiorLayout.value === config?.interior_layout);
    
    return (
        <div className="summary">
            <h1>Your {selectedModel?.name}</h1>
            <p className="summary-edd">Estimated delivery: 5-9 weeks</p>
            <div className="summary-content">
                <p>Summary</p>
                <ul>
                    <li>
                        <span>{selectedModel?.name} {selectedType?.label}</span>
                        <span>{formatPrice(selectedType?.price as number)}</span>
                    </li>
                    <li>
                        <span>{selectedColor?.label}</span>
                        <span>{formatPrice(selectedColor?.price)}</span>
                    </li>
                    <li>
                        <span>{selectedWheels?.label}</span>
                        <span>{formatPrice(selectedWheels?.price as number)}</span>
                    </li>
                    <li>
                        <span>{selectedInteriorColor?.label}</span>
                        <span>{formatPrice(selectedInteriorColor?.price as number)}</span>
                    </li>
                    <li>
                        <span>{selectedInteriorLayout?.label}</span>
                        <span>{formatPrice(selectedInteriorLayout?.price as number)}</span>
                    </li>
                </ul>
                <p>
                    <span>Total price</span>
                    <span>{formatPrice(totalPrice)}</span>
                </p>
            </div>
        </div>
    )
}

export default Summary
