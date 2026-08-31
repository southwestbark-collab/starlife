const isNode = typeof window === 'undefined';
const windowObj = isNode ? { localStorage: new Map() } : window;
const storage = windowObj.localStorage;

const getAppParamValue = (paramName, { defaultValue = undefined } = {}) => {
  if (isNode) return defaultValue;

  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get(paramName);

  if (searchParam) {
    return searchParam;
  }

  if (defaultValue) {
    return defaultValue;
  }

  return null;
};

export const appParams = {
  appId: getAppParamValue('app_id', { defaultValue: import.meta.env.VITE_APP_ID || 'local-app' }),
  token: getAppParamValue('access_token'),
  fromUrl: getAppParamValue('from_url', { defaultValue: window.location.href }),
  functionsVersion: getAppParamValue('functions_version', { defaultValue: import.meta.env.VITE_FUNCTIONS_VERSION || 'local' }),
  appBaseUrl: getAppParamValue('app_base_url', { defaultValue: import.meta.env.VITE_APP_BASE_URL || window.location.origin }),
};
