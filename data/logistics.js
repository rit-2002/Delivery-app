// data/logistics.js
export const logisticsProviders = {
    A: 'Provider A',
    B: 'Provider B',
    General: 'General Partners',
  };
  
  export function getProviderByPincode(pincode) {
    if (pincode % 3 === 0) return logisticsProviders.A;
    if (pincode % 3 === 1) return logisticsProviders.B;
    return logisticsProviders.General;
  }
  