export const apiBaseUrl = (): string => process.env.EXPO_PUBLIC_API_URL!;
export const googleMapsApiKey = (): string =>
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
export const stripePublishableKey = (): string =>
  process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!;

export const s3AwsRegion = (): string => process.env.EXPO_PUBLIC_S3_AWS_REGION!;
export const publicS3BucketName = (): string =>
  process.env.EXPO_PUBLIC_S3_PUBLIC_BUCKET_NAME!;
export const privateS3BucketName = (): string =>
  process.env.EXPO_PUBLIC_S3_PRIVATE_BUCKET_NAME!;
