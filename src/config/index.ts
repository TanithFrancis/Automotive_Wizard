export const GROK_API_ENDPOINT = 'https://api.x.ai/v1/chat/completions';

export const GROK_API_KEY = 'xai-CqXwl9N1pEuhdUVpR6QLWrYfm4jRmUzPP9Icieklgnvck6nlQ3PWIZ9RdX5s6Nxweta6YYlSOVHuVHXz';

export const getGrokHeaders = () => ({
  'Authorization': `Bearer ${GROK_API_KEY}`,
  'Content-Type': 'application/json'
});

export const GROK_SYSTEM_PROMPT = 'You are a a all knowing automotive expert, understanding cars and all their specific technical details and will explain it to the user in a way that is compelling and firm.';