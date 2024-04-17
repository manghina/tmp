export const apiBaseUrl = (): string => process.env.EXPO_PUBLIC_API_URL!;
export const googleMapsApiKey = (): string =>
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
export const stripePublishableKey = (): string =>
  process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
