/**
 * Format a number as currency (USD)
 */
export const formatCurrency = (amount: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return formatter.format(amount);
};

/**
 * Format a date in relative time (e.g., "2 days ago", "1 month ago")
 */
export const formatDate = (date: Date): string => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
};

/**
 * Format a number with thousands separators
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

/**
 * Format square feet with appropriate units
 */
export const formatArea = (squareFeet: number): string => {
  if (squareFeet >= 10000) {
    return `${(squareFeet / 1000).toFixed(1)}k sq ft`;
  }
  return `${squareFeet.toLocaleString()} sq ft`;
};

/**
 * Format lot size with appropriate units (acres or sq ft)
 */
export const formatLotSize = (lotSize: number): string => {
  if (lotSize < 0.1) {
    // Convert to square feet
    const sqFt = Math.round(lotSize * 43560);
    return `${sqFt.toLocaleString()} sq ft lot`;
  }
  return `${lotSize.toFixed(lotSize < 1 ? 2 : 1)} acre${lotSize !== 1 ? 's' : ''} lot`;
};