export const getMicrosoftApisOauthScopes = () => {
  const scopes = [
    'openid',
    'email',
    'profile',
    'offline_access',
    'Mail.Read',
    'Calendars.Read',
    'User.Read',
  ];

  return scopes;
};
