import { SDBaseService } from '../services/SDBaseService';
import * as httpStatusCodes from 'http-status-codes';
import { Middleware } from '../middleware/Middleware';
import log from '../utils/Logger';
import * as cookieParser from 'cookie-parser';
import { Readable } from 'stream';
import { setInterval } from 'timers';
import * as settings from '../config/config';
import { Issuer, custom } from 'openid-client';
import * as crypto from 'crypto';
import * as url from 'url';

let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { idsutil } from './idsutil'; //_splitter_
//append_imports_end

export class ids {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = `${this.app.settings.base}`;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_0i8w1QuC3tu23Ifg(bh);
          //appendnew_next_sd_azPbEJnPBJkBzwCw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_azPbEJnPBJkBzwCw');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_S2YpNlmIjMuC5jOl(bh);
          //appendnew_next_sd_ohAa7Z4B7dveHuIm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ohAa7Z4B7dveHuIm');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_TS5Oly3fJOEfkEKl(bh);
          //appendnew_next_sd_WitOpey9t492BJI5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_WitOpey9t492BJI5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_77yy7vbZxAyx8NUs(bh);
          //appendnew_next_sd_QL8oq3SpgYHWRFwm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QL8oq3SpgYHWRFwm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_vpAhHqVZBVjC9P9a(bh);
          //appendnew_next_sd_JZm7PiMGD6Qy5qBT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JZm7PiMGD6Qy5qBT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_HzFU6JwRIXROUpNT(bh);
          //appendnew_next_sd_TApboudDMHg7wHo7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TApboudDMHg7wHo7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_2tSkaP7UC5FBqOm6(bh);
          //appendnew_next_sd_SvrakZdDneQ1td1W
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_SvrakZdDneQ1td1W');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_Start

  async sd_TS5Oly3fJOEfkEKl(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_JJvGaupq3ltwPIhU(bh);
      //appendnew_next_sd_TS5Oly3fJOEfkEKl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TS5Oly3fJOEfkEKl');
    }
  }

  async sd_JJvGaupq3ltwPIhU(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_34xPAjcfOyLX1Ijp(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_R7I32VaRh1UzOWZo(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JJvGaupq3ltwPIhU');
    }
  }

  async sd_34xPAjcfOyLX1Ijp(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo
      };
      bh = await this.sd_CERLjxNAcEOnQRP8(bh);
      //appendnew_next_sd_34xPAjcfOyLX1Ijp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_34xPAjcfOyLX1Ijp');
    }
  }

  async sd_CERLjxNAcEOnQRP8(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_pFRfmKstDpdvJmvr(bh);
      //appendnew_next_sd_CERLjxNAcEOnQRP8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CERLjxNAcEOnQRP8');
    }
  }

  async sd_pFRfmKstDpdvJmvr(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_euaLPl91wZj1dG7B(bh);
      //appendnew_next_sd_pFRfmKstDpdvJmvr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pFRfmKstDpdvJmvr');
    }
  }

  async sd_euaLPl91wZj1dG7B(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getAuthorizationParams(null);
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_3Lko5vnVv5iQddOK(bh);
      //appendnew_next_sd_euaLPl91wZj1dG7B
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_euaLPl91wZj1dG7B');
    }
  }

  async sd_3Lko5vnVv5iQddOK(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0]
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest)
      };

      await this.sd_CIu9N0NeV6Qv3RND(bh);
      //appendnew_next_sd_3Lko5vnVv5iQddOK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3Lko5vnVv5iQddOK');
    }
  }

  async sd_CIu9N0NeV6Qv3RND(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CIu9N0NeV6Qv3RND');
    }
  }

  async sd_R7I32VaRh1UzOWZo(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again'
      };
      await this.sd_h6eDKnafzfLldoyg(bh);
      //appendnew_next_sd_R7I32VaRh1UzOWZo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_R7I32VaRh1UzOWZo');
    }
  }

  async sd_h6eDKnafzfLldoyg(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h6eDKnafzfLldoyg');
    }
  }

  async sd_0i8w1QuC3tu23Ifg(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_DhOO3DgC0PWa6Orp(bh);
      //appendnew_next_sd_0i8w1QuC3tu23Ifg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0i8w1QuC3tu23Ifg');
    }
  }

  async sd_DhOO3DgC0PWa6Orp(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DhOO3DgC0PWa6Orp');
    }
  }

  async sd_77yy7vbZxAyx8NUs(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_oqjweAOzvHc4cfEv(bh);
      //appendnew_next_sd_77yy7vbZxAyx8NUs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_77yy7vbZxAyx8NUs');
    }
  }

  async sd_oqjweAOzvHc4cfEv(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_oNacn0P5I1UNZH4c(bh);
      //appendnew_next_sd_oqjweAOzvHc4cfEv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oqjweAOzvHc4cfEv');
    }
  }

  async sd_oNacn0P5I1UNZH4c(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token'])
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_43juZ6uIOmxOjhq1(bh);
      //appendnew_next_sd_oNacn0P5I1UNZH4c
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oNacn0P5I1UNZH4c');
    }
  }

  async sd_43juZ6uIOmxOjhq1(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_DfBhmvAKtMjIdBp3(bh);
      //appendnew_next_sd_43juZ6uIOmxOjhq1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_43juZ6uIOmxOjhq1');
    }
  }

  async sd_DfBhmvAKtMjIdBp3(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_WVoXRYLHiHSHsD14(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ncvoMxH79Kc2BZJH(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DfBhmvAKtMjIdBp3');
    }
  }

  async sd_WVoXRYLHiHSHsD14(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_JCdDmeQaBCX0YxPj(bh);
      //appendnew_next_sd_WVoXRYLHiHSHsD14
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WVoXRYLHiHSHsD14');
    }
  }

  async sd_JCdDmeQaBCX0YxPj(bh) {
    try {
      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JCdDmeQaBCX0YxPj');
    }
  }

  async sd_ncvoMxH79Kc2BZJH(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo
      };
      await this.sd_0AVwJkYKYbGtOFnj(bh);
      //appendnew_next_sd_ncvoMxH79Kc2BZJH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ncvoMxH79Kc2BZJH');
    }
  }

  async sd_0AVwJkYKYbGtOFnj(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0AVwJkYKYbGtOFnj');
    }
  }

  async sd_vpAhHqVZBVjC9P9a(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_N6EV4IT9Lqd0cyfP(bh);
      //appendnew_next_sd_vpAhHqVZBVjC9P9a
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vpAhHqVZBVjC9P9a');
    }
  }

  async sd_N6EV4IT9Lqd0cyfP(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N6EV4IT9Lqd0cyfP');
    }
  }

  async sd_SpEjf8sP6A9sQkbP(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_SpEjf8sP6A9sQkbP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SpEjf8sP6A9sQkbP');
    }
  }

  async sd_HzFU6JwRIXROUpNT(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_JpTAE6JIZCC6G3wl(bh);
      //appendnew_next_sd_HzFU6JwRIXROUpNT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HzFU6JwRIXROUpNT');
    }
  }

  async sd_JpTAE6JIZCC6G3wl(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_2JuJyjD6Us2xKdyl(bh);
      //appendnew_next_sd_JpTAE6JIZCC6G3wl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JpTAE6JIZCC6G3wl');
    }
  }

  async sd_2JuJyjD6Us2xKdyl(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_uhr0aAtA6ZCzCYu2(bh);
      //appendnew_next_sd_2JuJyjD6Us2xKdyl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2JuJyjD6Us2xKdyl');
    }
  }

  async sd_uhr0aAtA6ZCzCYu2(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_79n8GeBT5blfWuGv(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Gq07MDSAD2LI0jYB(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uhr0aAtA6ZCzCYu2');
    }
  }

  async sd_79n8GeBT5blfWuGv(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id']
              }
            }
          )
        ),
        sessionExists: true
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh);
      //appendnew_next_sd_79n8GeBT5blfWuGv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_79n8GeBT5blfWuGv');
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      await this.sd_22JhgjklDBvXgn6f(bh);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCWCI7Lqpk6tk1KJ');
    }
  }

  async sd_22JhgjklDBvXgn6f(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_22JhgjklDBvXgn6f');
    }
  }

  async sd_Gq07MDSAD2LI0jYB(bh) {
    try {
      bh.local.res = {
        sessionExists: false
      };
      await this.sd_22JhgjklDBvXgn6f(bh);
      //appendnew_next_sd_Gq07MDSAD2LI0jYB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Gq07MDSAD2LI0jYB');
    }
  }

  async sd_2tSkaP7UC5FBqOm6(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_qwi61KqJy1rkAp3g(bh);
      //appendnew_next_sd_2tSkaP7UC5FBqOm6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2tSkaP7UC5FBqOm6');
    }
  }

  async sd_qwi61KqJy1rkAp3g(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function() {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function(error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_0xnGeVkxokrdZ6rj(bh);
      //appendnew_next_sd_qwi61KqJy1rkAp3g
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qwi61KqJy1rkAp3g');
    }
  }

  async sd_0xnGeVkxokrdZ6rj(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vkFhhhK01VKnN9H0(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_bJIGHS6cmmQ7XcnD(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0xnGeVkxokrdZ6rj');
    }
  }

  async sd_vkFhhhK01VKnN9H0(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_Pzgeb7R12KA6LRr7(bh);
      //appendnew_next_sd_vkFhhhK01VKnN9H0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vkFhhhK01VKnN9H0');
    }
  }

  async sd_Pzgeb7R12KA6LRr7(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Pzgeb7R12KA6LRr7');
    }
  }

  async sd_bJIGHS6cmmQ7XcnD(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo
      };
      await this.sd_P71Ueu8Jp87NRWIN(bh);
      //appendnew_next_sd_bJIGHS6cmmQ7XcnD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bJIGHS6cmmQ7XcnD');
    }
  }

  async sd_P71Ueu8Jp87NRWIN(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P71Ueu8Jp87NRWIN');
    }
  }

  async sd_S2YpNlmIjMuC5jOl(bh) {
    try {
      bh.local = {};
      bh = await this.sd_jSujjkNa7YXT3MF3(bh);
      //appendnew_next_sd_S2YpNlmIjMuC5jOl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_S2YpNlmIjMuC5jOl');
    }
  }

  async sd_jSujjkNa7YXT3MF3(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_LZNYBp3HcIRuPsjU(bh);
      //appendnew_next_sd_jSujjkNa7YXT3MF3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jSujjkNa7YXT3MF3');
    }
  }

  async sd_LZNYBp3HcIRuPsjU(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_yfakV4PLkg4IzKcb(bh);
      //appendnew_next_sd_LZNYBp3HcIRuPsjU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LZNYBp3HcIRuPsjU');
    }
  }

  async sd_yfakV4PLkg4IzKcb(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_t2neEMO2FoPj2jqs(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_58xFaIXIOk2AnAR6(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yfakV4PLkg4IzKcb');
    }
  }

  async sd_t2neEMO2FoPj2jqs(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.handleTokenExpiry(
        bh.local.sessionData,
        null
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_XuQdZsGkdAqPNMAb(bh);
      //appendnew_next_sd_t2neEMO2FoPj2jqs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t2neEMO2FoPj2jqs');
    }
  }

  async sd_XuQdZsGkdAqPNMAb(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_914qwvyr3Dp8pVEW(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_55SsyI6RuYYlUlTK(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XuQdZsGkdAqPNMAb');
    }
  }

  async sd_914qwvyr3Dp8pVEW(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function() {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function(error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_caE7khGk7EBbwKk9(bh);
      //appendnew_next_sd_914qwvyr3Dp8pVEW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_914qwvyr3Dp8pVEW');
    }
  }

  async sd_caE7khGk7EBbwKk9(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked'
      };
      await this.sd_GX4KwNcxkz5lrnMg(bh);
      //appendnew_next_sd_caE7khGk7EBbwKk9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_caE7khGk7EBbwKk9');
    }
  }

  async sd_GX4KwNcxkz5lrnMg(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GX4KwNcxkz5lrnMg');
    }
  }

  async sd_55SsyI6RuYYlUlTK(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_TZ6rgkntP38AS5Mf(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_W92d5A8CEzx8jUN1(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_55SsyI6RuYYlUlTK');
    }
  }

  async sd_TZ6rgkntP38AS5Mf(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_hW0O8ZPHqY3fjhNd(bh);
      //appendnew_next_sd_TZ6rgkntP38AS5Mf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TZ6rgkntP38AS5Mf');
    }
  }

  async sd_hW0O8ZPHqY3fjhNd(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_W92d5A8CEzx8jUN1(bh);
      //appendnew_next_sd_hW0O8ZPHqY3fjhNd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hW0O8ZPHqY3fjhNd');
    }
  }

  async sd_W92d5A8CEzx8jUN1(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W92d5A8CEzx8jUN1');
    }
  }

  async sd_58xFaIXIOk2AnAR6(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KXnlqrTxC6lVGoIF(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xqTiFGaOrSPMYwfb(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_58xFaIXIOk2AnAR6');
    }
  }

  async sd_KXnlqrTxC6lVGoIF(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_GX4KwNcxkz5lrnMg(bh);
      //appendnew_next_sd_KXnlqrTxC6lVGoIF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KXnlqrTxC6lVGoIF');
    }
  }

  async sd_xqTiFGaOrSPMYwfb(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_GX4KwNcxkz5lrnMg(bh);
      //appendnew_next_sd_xqTiFGaOrSPMYwfb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xqTiFGaOrSPMYwfb');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_c9uBsW1ouubL0Ajo(bh)) ||
      (await this.sd_qPuDM77L7FcBC93q(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_c9uBsW1ouubL0Ajo(bh) {
    const nodes = [
      'sd_euaLPl91wZj1dG7B',
      'sd_QL8oq3SpgYHWRFwm',
      'sd_oqjweAOzvHc4cfEv',
      'sd_oNacn0P5I1UNZH4c',
      'sd_77yy7vbZxAyx8NUs',
      'sd_DfBhmvAKtMjIdBp3',
      'sd_WVoXRYLHiHSHsD14',
      'sd_ncvoMxH79Kc2BZJH',
      'sd_JCdDmeQaBCX0YxPj',
      'sd_0AVwJkYKYbGtOFnj'
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_SpEjf8sP6A9sQkbP(bh);
      //appendnew_next_sd_c9uBsW1ouubL0Ajo
      return true;
    }
    return false;
  }
  async sd_qPuDM77L7FcBC93q(bh) {
    const nodes = ['sd_t2neEMO2FoPj2jqs'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_caE7khGk7EBbwKk9(bh);
      //appendnew_next_sd_qPuDM77L7FcBC93q
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
