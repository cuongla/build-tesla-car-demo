export function formatNumber(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function formatPrice(value: number, zero = "included") {
    if (isNaN(value)) return null;
    return value === 0 ? zero : `$${formatNumber(value)}`;
};

export const selectedModel = (models: any[], configModel: string) => {
    return models.find(model =>
        model?.key === configModel
    );
};
