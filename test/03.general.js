'use strict';
require('dotenv').config();
var chai = require('chai');
var expect = require('chai').expect;
var assert = require('chai').assert;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var Cityworks = require('../dist/index.js');
var cw3 = new Cityworks(process.env.domain, {path: process.env.path});

before(function() {
  this.timeout(2000000);
  cw3.setToken('eyJFbXBsb3llZVNpZCI6MjQ1NSwiRXhwaXJlcyI6bnVsbCwiSXNzdWVkVGltZSI6MTYzNDQ3OTkzODIwNiwiTG9naW5OYW1lIjoibXJyb2JvdCIsIlNpZ25hdHVyZSI6IjhneWdqUzRRWTViZkExWjk0Zkt0QlJNQTFJOWtESC9ESWVWRnlWVlI4MUU9IiwiVG9rZW4iOiJqZnFLaGxpTU5lSSs2ZjlneGdoZmF2VmJSTllqNEowN1BVQ1lNeDhPSGJvPSJ9');
  // cw3.authenticate(process.env.login, process.env.password).then(resp => {
  //   done();
  // }).catch(e => {
  //   console.log(e, 'unexpected error')
  //   done();
  // });
});

describe('[General::notifications] function test', () => {
  it('should resolve a collection', (done) => {
    cw3.general.notifications().then(resp => {
      assert.isArray(resp);
      done();
    });
  });
});

describe('[General::amIWatching] function test', () => {
  it('should reject with an error if the activity type is not available or does not exist', (done) => {
    cw3.general.amIWatching('request', 42015).then(r => {
    }).catch(e => {
      assert.equal(e.message, 'Activity type provided does not exist.');
      done();
    });
  });
  it('should resolve a boolean', (done) => {
    cw3.general.amIWatching('case', 42015).then(r => {
      assert.isBoolean(r);
      done();
    });
  });
  it('should resolve with false if id does not exist', (done) => {
    cw3.general.amIWatching('case', 200042015).then(r => {
      assert.isFalse(r);
      done();
    }).catch(e => {
      done();
    });
  });
  it('should reject with an error if the activity id is too large', (done) => {
    cw3.general.amIWatching('case', 10000000000).then(response => {
    }).catch(e => {
      assert.equal(e.message, 'Unknown error.');
      done();
    });
  });
});

describe('[General::quickSearch] function test', () => {
  it('should resolve results', (done) => {
    cw3.general.quickSearch('256460').then(r => {
      assert.property(r, 'Permits');
      done();
    });
  });

  it('should resolve (empty) results even when the string is not found', (done) => {
    cw3.general.quickSearch('SomethingSidewalk').then(r => {
      assert.property(r, 'Permits');
      done();
    });
  });
});

describe('[General::getActivityMetadataByIds] function test', () => {
  it('should resolve an activity based on the metadata ids');
});

describe('[General::getWOEntityCostSummary] function test', () => {
  it('should get an Entity\'s cost summary');
});

describe('[General::searchWOEntityCostSummary] function test', () => {
  it('should resolve reults of a search for cost summary of an entity');
});
