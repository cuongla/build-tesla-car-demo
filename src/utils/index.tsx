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

export const randomNumbers = (count: number) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    let result = '';

    for (var i = 0; i < count; i++) {
        var x = Math.floor(Math.random() * chars.length);
        result += chars[x];
    }
    return result;
}