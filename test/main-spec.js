
(function() {
  'use strict';

  const assert = chai.assert,
        expect = chai.expect;

  describe('The address book app', function() {
    describe('the contact service', function() {
      it('should have a contacts property', function() {
        angular.mock.module('AddressBook');

        let contactService;
        angular.mock.inject(function($injector) {
          contactService = $injector.get('contactService');
        });

        console.log('contacts:', contactService.contacts);
        expect(contactService.contacts).to.be.an.instanceOf(Array);
      });
    });
  });

}());