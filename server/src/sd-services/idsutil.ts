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

//append_imports_end

export class idsutil {
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
    this.serviceName = 'idsutil';
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
      instance = new idsutil(
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
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(clientInstance = null, ...others) {
    try {
      var bh = {
        input: {
          clientInstance: clientInstance
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_oI8ArXhEaL8EZCKz(bh);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance
          },
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iqptguGKXfkOfDnB');
    }
  }

  async getAuthorizationParams(authParams = null, ...others) {
    try {
      var bh = {
        input: {
          authParams: authParams
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_95NiWrpMVMY9hdGa(bh);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams
          },
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4VXggnKgmXtef2Q7');
    }
  }

  async handleTokenExpiry(existingSession = '', newSession = '', ...others) {
    try {
      var bh = {
        input: {
          existingSession: existingSession,
          newSession: newSession
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_QOiSdXxQDYBafeZj(bh);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession
          },
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_daTXg7jJnaYVC9Sa');
    }
  }

  //appendnew_flow_idsutil_Start

  //__server_service_designer_class_variable_declaration__client
  client: any;
  async sd_oI8ArXhEaL8EZCKz(bh) {
    try {
      bh.local.client = this.client;
      bh = await this.sd_9j1OM0xITnuOz02d(bh);
      //appendnew_next_sd_oI8ArXhEaL8EZCKz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oI8ArXhEaL8EZCKz');
    }
  }

  async sd_9j1OM0xITnuOz02d(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_l1ocXU4TqpjqV6No(bh);
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
        bh = await this.sd_YagXhymymK5iQxuk(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9j1OM0xITnuOz02d');
    }
  }

  async sd_l1ocXU4TqpjqV6No(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret']
      });
      client[custom.clock_tolerance] = process.env.CLOCK_TOLERANCE;
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_hPxIwgyXpMTD6HTE(bh);
      //appendnew_next_sd_l1ocXU4TqpjqV6No
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l1ocXU4TqpjqV6No');
    }
  }

  async sd_hPxIwgyXpMTD6HTE(bh) {
    try {
      this.client = bh.input.clientInstance;
      //appendnew_next_sd_hPxIwgyXpMTD6HTE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hPxIwgyXpMTD6HTE');
    }
  }

  async sd_YagXhymymK5iQxuk(bh) {
    try {
      bh.input.clientInstance = this.client;
      //appendnew_next_sd_YagXhymymK5iQxuk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YagXhymymK5iQxuk');
    }
  }

  async sd_95NiWrpMVMY9hdGa(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent'
      };
      //appendnew_next_sd_95NiWrpMVMY9hdGa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_95NiWrpMVMY9hdGa');
    }
  }

  async sd_QOiSdXxQDYBafeZj(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_p7Jw5aG423v1hEEe(bh);
      //appendnew_next_sd_QOiSdXxQDYBafeZj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QOiSdXxQDYBafeZj');
    }
  }

  async sd_p7Jw5aG423v1hEEe(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QbP8sIJ3rKTIMZDl(bh);
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
        bh = await this.sd_6dlGSA4bkTGJM7PO(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p7Jw5aG423v1hEEe');
    }
  }

  async sd_QbP8sIJ3rKTIMZDl(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_QbP8sIJ3rKTIMZDl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QbP8sIJ3rKTIMZDl');
    }
  }

  async sd_6dlGSA4bkTGJM7PO(bh) {
    try {
      const idsutilInstance: idsutil = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_6vMFMMER7x45R5Zh(bh);
      //appendnew_next_sd_6dlGSA4bkTGJM7PO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6dlGSA4bkTGJM7PO');
    }
  }

  async sd_6vMFMMER7x45R5Zh(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_L3BbpkNsarTtcFPY(bh);
      //appendnew_next_sd_6vMFMMER7x45R5Zh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6vMFMMER7x45R5Zh');
    }
  }

  async sd_L3BbpkNsarTtcFPY(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_tUwf5jwQambFZrCz(bh);
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
        bh = await this.sd_kclWwzd659bBa0kX(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L3BbpkNsarTtcFPY');
    }
  }

  async sd_tUwf5jwQambFZrCz(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_tUwf5jwQambFZrCz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tUwf5jwQambFZrCz');
    }
  }

  async sd_kclWwzd659bBa0kX(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_kclWwzd659bBa0kX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kclWwzd659bBa0kX');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_v71W7i8vDOaTfMCp(bh))
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
  async sd_v71W7i8vDOaTfMCp(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_kclWwzd659bBa0kX(bh);
      //appendnew_next_sd_v71W7i8vDOaTfMCp
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
