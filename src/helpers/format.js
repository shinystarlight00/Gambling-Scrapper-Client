export function formatNumber(num, digits = 2) {
    return (num || 0).toLocaleString(undefined, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    });
}