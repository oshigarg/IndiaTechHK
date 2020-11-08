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

import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end

export class transfer {
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
    this.serviceName = 'transfer';
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
      instance = new transfer(
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
      //appendnew_flow_transfer_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: transfer');

    //appendnew_flow_transfer_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: transfer');

    if (!this.swaggerDocument['paths']['/shipment']) {
      this.swaggerDocument['paths']['/shipment'] = {
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
      this.swaggerDocument['paths']['/shipment']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/shipment`,
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
          bh = await this.sd_d3I6qUO2OV26mMlF(bh);
          //appendnew_next_sd_uLIzc9iKbnzBd49c
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uLIzc9iKbnzBd49c');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_transfer_HttpIn
  }
  //   service flows_transfer

  //appendnew_flow_transfer_Start

  async sd_d3I6qUO2OV26mMlF(bh) {
    try {
      bh.DEF = await MongoPersistance.getInstance().find(
        'sd_KidNuxBcqL8UvOqD',
        'XYZ',
        bh.ABC,
        {}
      );
      await this.sd_9xClzWSogBPA1tes(bh);
      //appendnew_next_sd_d3I6qUO2OV26mMlF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d3I6qUO2OV26mMlF');
    }
  }

  async sd_9xClzWSogBPA1tes(bh) {
    try {
      bh.web.res.status(200).send(bh.XYZ);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9xClzWSogBPA1tes');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
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
  //appendnew_flow_transfer_Catch
}
