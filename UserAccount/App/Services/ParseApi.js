import config, {timeoutDef} from '../Config/AppSetting';
import _ from 'lodash';
import { Platform } from 'react-native';
  
export default class Parse {

  constructor(token) {
    if (!_.isNull(token) && _.isUndefined(token)) {
      throw 'TokenMissing';
    }
    this._sessionToken =
      _.isNull(token) ?  null : token;

    this._applicationId = config.PARSE_ID;
    this._restAPIKey = config.PARSE_API_KEY;
    this._masterKey = null;

    this.API_BASE_URL= config.URL;
  }

  login(data) {
    return this._fetch({
      method: 'GET',
      url: '/1/login?username='+data.username+'&password='+data.password
    }).then(response => response.json());
  }

  logout() {
    return this._fetch({
      method: 'POST',
      url: '/1/logout',
      body: {}
    }).then(response => response.json());
  }

  getReport(data) {
    return this._fetch({
      method: 'POST',
      url: '/1/functions/getStatisticReview',
      body: data
    }).then(response => response.json());
  }
  
  getCustomReport(data) {
    return this._fetch({
      method: 'POST',
      url: '/1/functions/getStatisticReviewsByPeriod',
      body: data
    }).then(response => response.json());
  }

  updateUser (id, data) {
    return this._fetch({
      method: 'PUT',
      url: '/1/users/' + id,
      body: data
    }).then(response => response.json());
  }

  uploadAvatar (data) {
    return this._fetch({
      method: 'POST',
      url: '/1/files/' + 'picture.png',
      body: data
    })
    .then((response) => response.json())
  }
  
  getBusiness(data) {
    let containedIn = data.map( (data, index) => { return data? data.objectId : '' });
    let filter = {
     objectId: {
       "$in": containedIn
     }
    };
    return this._fetch({
      method: 'GET',
      url: '/1/classes/Business?include=categories&limit=1000&where=' + JSON.stringify(filter)
    })
    .then((response) => response.json());
  }
  
  getReview(data) {
    return this._fetch({
      method: 'POST',
      url: '/1/functions/getReviewHistories',
      body: {businessId: data.objectId}
    }).then((response) => response.json());
  }
  
  getReasons(data) {
    let containedIn = data.map( (data, index) => { return data? {
      __type: "Pointer", 
      className: "Categories",
      objectId: data.objectId
    } : '' });

    let filter = {
     category: {
       "$in": containedIn
     }
    };
    return this._fetch({
      method: 'GET',
      url: '/1/classes/Reasons?where='+JSON.stringify(filter)
    })
    .then((response) => response.json());
  }
  
  createInstallation(token, locale, business) {
    return this._fetch({
      method: 'POST',
      url: '/1/installations',
      body: {
        deviceToken: token.token || 'd944d35a2be436b056cc71d86718ed9cb8b62bb4d8e7000e8187baa8c258e852',
        deviceType: token.os || '',
        pushType: Platform.OS === 'android' ? 'gcm' : undefined,
        GCMSenderId: Platform.OS === 'android' ? '551230414638' : undefined,
        localeIdentifier: locale,
        business: business
      }
    })
    .then((response) => response.json());
  }

  updateInstallation(token, userId, locale, business) {
    return this._fetch({
      method: 'POST',
      url: '/1/installations',
      body: {
        deviceToken: token.token || 'd944d35a2be436b056cc71d86718ed9cb8b62bb4d8e7000e8187baa8c258e852',
        deviceType: token.os || '',
        pushType: Platform.OS === 'android' ? 'gcm' : undefined,
        GCMSenderId: Platform.OS === 'android' ? '551230414638' : undefined,
        user: {
          __type: 'Pointer',
          className: '_User',
          objectId: userId
        },
        badge: Platform.OS === 'android' ? undefined : 0,
        localeIdentifier: locale,
        business: business
      }
    })
    .then((response) => response.json());
  }

  deleteInstallation (id) {
    return this._fetch({
      method: 'POST',
      url: '/1/functions/deleteInstallation',
      body: {
        installationId: id
      }
    }).then((response) => response.json());
  }

  updateServerBadge (token, number) {
    return this._fetch({
      method: 'POST',
      url: '/1/installations',
      body: {
        deviceToken: token,
        badge: Platform.OS === 'android' ? undefined : number
      }
    }).then(response => response.json());
  }

  updateLocaleIdentifier(token, locale) {
    return this._fetch({
      method: 'POST',
      url: '/1/installations',
      body: {
        deviceToken: token.token,
        deviceType: token.os,
        pushType: Platform.OS === 'android' ? 'gcm' : undefined,
        GCMSenderId: Platform.OS === 'android' ? '551230414638' : undefined,
        localeIdentifier: locale
      }
    })
    .then((response) => response.json());
  }
  
  _fetch(opts) {
    opts = _.extend({
      method: 'GET',
      url: null,
      body: null,
      callback: null
    }, opts);

    var reqOpts = {
      method: opts.method,
      headers: {
        'X-Parse-Application-Id': this._applicationId,
        'X-Parse-REST-API-Key': this._restAPIKey
      }
    };
    if (this._sessionToken) {
      reqOpts.headers['X-Parse-Session-Token'] = this._sessionToken;
    }

    if (this._masterKey) {
      reqOpts.headers['X-Parse-Master-Key'] = this.masterKey;
    }

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers['Accept'] = 'application/json';
      reqOpts.headers['Content-Type'] = 'application/json';
    }

    if (opts.body) {
      reqOpts.body = JSON.stringify(opts.body);
    }

    if (opts.timeout) {
      return this._timeoutPromise(opts.timeout, fetch(this.API_BASE_URL + opts.url, reqOpts));
    }

    return fetch(this.API_BASE_URL + opts.url, reqOpts);
  }

  _timeoutPromise(milisecond, promise) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("promise timeout"))
      }, milisecond);
      promise.then(
        (res) => {
          clearTimeout(timeoutId);
          resolve(res);
        },
        (err) => {
          clearTimeout(timeoutId);
          reject(err);
        }
      );
    })
  }
};
