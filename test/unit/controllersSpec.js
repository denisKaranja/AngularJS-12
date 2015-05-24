'use strict';


describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('PhoneListCtrl', {$scope:scope});
    }));

    //  number of phones displayed
    it('should create "phones" model with 3 phones', function() {
      expect(scope.phones.length).toBe(3);
    });

    //  two-way data binding
    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
});



































