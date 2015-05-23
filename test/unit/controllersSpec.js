'use strict';

/* Number of phones displayed test */

describe('PhoneListCtrl', function(){

  // load the phonecatApp before each test
  beforeEach(module('phonecatApp'));

  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.phones.length).toBe(3);
  }));

});
