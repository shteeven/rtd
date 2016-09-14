'use strict';

describe('Rtd E2E Tests:', function () {
  describe('Test rtd page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/rtd');
      expect(element.all(by.repeater('article in rtd')).count()).toEqual(0);
    });
  });
});
