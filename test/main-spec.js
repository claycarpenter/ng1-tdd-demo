
(function() {
  'use strict';

  const assert = chai.assert,
        expect = chai.expect;

  describe('The address book app', function() {
    let contactService,
        $httpBackend;

    beforeEach(function() {
      angular.mock.module('AddressBook');

      angular.mock.inject(function($injector) {
        contactService = $injector.get('contactService');
        $httpBackend = $injector.get('$httpBackend');
      });
    });

    describe('the contact service', function() {
      it('should have a contacts property', function() {
        console.log('contacts:', contactService.contacts);
        expect(contactService.contacts).to.be.an.instanceOf(Array);
      });

      it('should call the backend', function() {
        $httpBackend.expectGET('http://localhost:9001/contacts')
        .respond(200, []);

        $httpBackend.flush();
      });
    });

    describe('the contact controller', function() {
      let $scope,
          $controller;

      beforeEach(function() {
        angular.mock.inject(function($injector, $rootScope) {
          $scope = $rootScope.$new();
          $controller = $injector.get('$controller');
        })
      });

      it('should store an array of contacts in the scope', function() {
        $controller('ContactController', {$scope:$scope, contactService:contactService});

        assert.isArray($scope.contacts);
      });
    });
  });
}());