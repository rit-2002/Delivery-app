import { getProviderByPincode, logisticsProviders } from '../data/logistics';

export function estimateDeliveryDate(pincode, product, orderTime) {
  const provider = getProviderByPincode(pincode);
  if (!product.inStock) return 'Out of stock';
  const currentHour = orderTime.getHours();

  if (provider === logisticsProviders.A) {
    return currentHour < 17 ? 'Same-day delivery' : 'Next-day delivery';
  }
  if (provider === logisticsProviders.B) {
    return currentHour < 9 ? 'Same-day delivery' : 'Next-day delivery';
  }
  return '2-5 days based on location';
}
