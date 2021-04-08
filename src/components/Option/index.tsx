import React, { FC } from 'react'

const types = ["text", "color", "image"];

interface OptionProps {
    value: string
    label?: string
    src?: string
    type: string
    price: string | null
    active: boolean
    onSelectOption: (value: any) => void
}

const Option: FC<OptionProps> = ({
    value,
    label,
    src,
    type,
    price,
    active,
    onSelectOption
}) => {
    if (!types.includes(type)) return null;

    // adjust class 
    let classNames = `option ${type}-option`;
    if (active) {
        classNames += ' active';
    }

    const renderContent = () => {
        switch (type) {
            case "text":
                return (
                    <>
                        <span>{label}</span>
                        {price ? <span className="price">{Number(price)}</span> : null}
                    </>
                );
            case "image":
                return <img src={src} alt={label} title={label} />;
            case "color":
                return <div className={value} title={label} />;
            default:
                return null;
        }
    }

    return (
        <div
            role="button"
            className={classNames}
            onClick={() => onSelectOption(value)}
        >
            {renderContent()}
        </div>
    )
}

export default Option
