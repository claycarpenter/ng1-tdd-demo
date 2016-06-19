
(function() {
  'use strict';

  angular.module('AddressBook', []);

  angular.module('AddressBook').service('contactService', ['$http', function($http) {
    this.contacts = [];

    const contactService = this;

    $http.get('http://localhost:9001/contacts')
      .then(function(response) {
        console.log(`response:`, response);
        while (response.data[0]) {
          contactService.contacts.push(response.data.pop());
        }
      });
  }]);

  angular.module('AddressBook').controller('ContactController', ['contactService', '$scope', function(contactService, $scope) {
    $scope.contacts = contactService.contacts;
  }]);
}());
