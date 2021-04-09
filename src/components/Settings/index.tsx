import React, { FC } from 'react';
import Option from '../Option';
import { formatPrice } from '../../utils';
import { ISettings } from '../../interfaces/model.interface'
import './Setting.css';

interface SettingsProps {
    config: any | null
    settings?: ISettings[]
    onSelectOption: (prop: any, value: any) => void
}

const Settings: FC<SettingsProps> = ({
    config,
    settings,
    onSelectOption
}) => {
    const selectedOptions: any = settings?.reduce(
        (acc, setting) => ({
            ...acc,
            [setting.prop]: setting.options.find(option =>
                option.value === config[setting.prop]
            ) ?? []
        }),
        {}
    );

    return (
        <div className="settings">
            {
                settings?.map(setting => {
                    // @ts-ignore
                    if (!setting.options || setting.options.length === 0) {
                        return null;
                    }
                    return (
                        <div
                            key={setting.label}
                            className="settings-group"
                        >
                            <h3>{setting.label}</h3>
                            {
                                setting.disclaimer_1 ? (
                                    <p className="settings-group-disclaimer">
                                        {setting.disclaimer_1}
                                    </p>
                                ) : null
                            }
                            <div className={`settings-options settings-options-${setting.type}`}>
                                {
                                    setting.options.map(option => (
                                        <>
                                            <Option
                                                {...option}
                                                key={option.value}
                                                type={setting.type}
                                                // @ts-ignore
                                                price={formatPrice(option.price)}
                                                active={config?.[setting.prop] === option.value}
                                                onSelectOption={(value) =>
                                                    onSelectOption(setting.prop, value)
                                                }
                                            />
                                        </>
                                    ))
                                }
                            </div>
                            {
                                setting.type !== "text"
                                    ? (
                                        <div className="settings-group-label">
                                            <span>{selectedOptions?.[setting.prop]?.label}</span>
                                            <span className="price">
                                                {formatPrice(selectedOptions?.[setting.prop]?.price)}
                                            </span>
                                        </div>
                                    )
                                    : null
                            }
                            {
                                selectedOptions?.[setting.prop]?.benefits ? (
                                    <div className="settings-group-benefits">
                                        <p>Model {config.model.toUpperCase()} {selectedOptions[setting.prop].label} includes:</p>
                                        <ul>
                                            {
                                                selectedOptions?.[setting.prop]?.benefits?.map((benefit: any, i: number) => (
                                                    <li key={i}>
                                                        {benefit}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ) : null
                            }
                            {
                                setting.disclaimer_2 ? (
                                    <p className="settings-group-disclaimer">
                                        {setting.disclaimer_2}
                                    </p>
                                ) : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Settings
