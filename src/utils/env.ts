type EnvironmentVariableKey = keyof typeof process.env;

export const getEnvironmentVariable = (key: EnvironmentVariableKey): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};

export const environment = {
  application: {
    url: getEnvironmentVariable('NEXT_PUBLIC_APP_URL'),
  },
  api: {
    url: getEnvironmentVariable('NEXT_PUBLIC_API_URL'),
  },
  analytics: {
    googleAnalyticsId: getEnvironmentVariable('NEXT_PUBLIC_GA_ID'),
  },
} as const;
