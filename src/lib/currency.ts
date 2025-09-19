export function formatINR(amount: number | undefined | null) {
  try {
    const value = typeof amount === 'number' && isFinite(amount) ? amount : 0;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return '₹0.00';
  }
}
