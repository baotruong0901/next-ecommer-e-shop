export const formatPrice = (amount: number) => {
    const roundedAmount = Math.round(amount / 10000) * 10000;
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(roundedAmount);
}