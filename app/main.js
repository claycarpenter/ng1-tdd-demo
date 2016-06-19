
(function() {
  'use strict';

  angular.module('AddressBook', []);

  angular.module('AddressBook').service('contactService', ['$http', function($http) {
    this.contacts = [];

    $http.get('localhost:9001/contacts', function(response) {
      console.log(`response:`, response);
    });
  }]);
}());
