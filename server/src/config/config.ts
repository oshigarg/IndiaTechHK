export default {
  logger: { level: 'debug', transport: ['file', 'console'] },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' }
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } }
  },
  ids: {
    client_id: 'dV43IlnTUWAGxWTRlyDrp',
    client_secret:
      'J0EEaammYuKWWjUpp0EDCAmIW7v0QIiKA-yFIY8__zQxpdSebrPdlROcL6Q059b96RqBkZzjML1G10wlq2UiWw',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true
  }
};
