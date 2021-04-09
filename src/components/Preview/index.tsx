import React, { FC } from 'react';
import { IModel } from '../../interfaces/model.interface';
import { IConfig } from '../../interfaces/preview.interface';
import Slideshow from '../Slideshow';
import { Items } from '../../interfaces/preview.interface';
import './Preview.css';

interface PreviewProps {
    config: IConfig
    models: IModel[]
    showAllModels: boolean
    showSpecs: boolean
    onChangeModel: (key: 's' | 'x' | 'y') => void
}

const Preview: FC<PreviewProps> = ({
    config,
    models,
    showAllModels,
    showSpecs,
    onChangeModel
}) => {
    // get index model
    const index = models.findIndex(model => model.key === config?.model);

    // get items
    const items: Items[] = models.map(model => ({
        alt: model.name,
        url: `${process.env.PUBLIC_URL}/cars/model_${model.key}/model_${model.key}_${config.color}_${config.wheels}.png`,
        scale: ['x'].includes(model.key)
    }));

    // get selected models
    const selectedModel = models.find(model => model.key === config.model);

    // get selected type
    const selectedType = selectedModel?.types?.find(type => type.value === config.car_type);

    // get specs
    const specs = selectedType?.specs;

    const handleOnClickPrev = () => {
        const newIndex = index > 0
            ? index - 1
            : models.length - 1;
            
        onChangeModel(models?.[newIndex]?.key);
    };

    const handleOnClickNext = () => {
        const newIndex = index < models.length - 1
            ? index + 1
            : 0;

        onChangeModel(models?.[newIndex]?.key);
    };
    return (
        <div className="preview">
            <Slideshow
                items={items}
                index={index}
                showPrev={showAllModels}
                showNext={showAllModels}
                onClickPrev={handleOnClickPrev}
                onClickNext={handleOnClickNext}
            />
            {
                showSpecs ? (
                    <ul className="specs">
                        <li>
                            <span className="specs-value">{specs?.range ?? ' - '}mi</span>
                            <span className="specs-label">Range (EPA est.)</span>
                        </li>
                        <li>
                            <span className="specs-value">{specs?.top_speed ?? ' - '}mph</span>
                            <span className="specs-label">Top Speed</span>
                        </li>
                        <li>
                            <span className="specs-value">{specs?.acceleration_time ?? ' - '}s</span>
                            <span className="specs-label">0-60 mph</span>
                        </li>
                    </ul>
                ) : null
            }
        </div>
    )
}

export default Preview;
