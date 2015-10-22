
//enter "karma start unit-tests.conf.js" in tests folder to run this!

describe('app.controllers', function() {
  var controller;

  describe('welcomeCtrl', function() {

    // beforeEach(module('app.controllers'));
    // beforeEach(inject(function($controller, $rootScope) {
    //   controller = $controller('welcomeCtrl', {
    //     $scope : $rootScope.$new()
    //   });
    //   console.log('The controller is', controller);
    // }));

    // it('should call game factory\'s create function', function() {
    //   //think I might need a sinon spy to check if called
    // });

    // it('should call game factory\'s get function', function() {
    //   //think I might need a sinon spy to check if called
    // });

    // it('should only reroute to createTeam if gameCode is valid', function() {
    //   //currently automatically reroutes
    // });
  });

  describe('lobbyCtrl', function() {

    beforeEach(module('app.controllers'));
    it('should have an array of the teams in $scope', function() {
      inject(function($controller, $rootScope) {
        var scope = $rootScope.$new()
        controller = $controller('lobbyCtrl', {
          $scope : scope
        });

        (scope.teams).should.be.a("array");
      })
    });

    // beforeEach(inject(function($controller, $rootScope) {
    //   controller = $controller('lobbyCtrl', {
    //     $scope : $rootScope.$new()
    //   });
    //   console.log('The controller is', controller);
    // }));


    // it('should only show the start button to server', function() {

    // });
  });

  describe('challengeCtrl', function() {
    beforeEach(module('app.controllers'));

    it('should have a description and question for user', function() {
      inject(function($controller, $rootScope) {
        var scope = $rootScope.$new()
        controller = $controller('challengeCtrl', {
          $scope : scope
        });

        (scope.question).should.be.a("string");
        (scope.description).should.be.a("string");
      })
    });

    it('should display to user whether answer is correct or incorrect', function() {
      //use ngClass to change background color
      //will have to write a directive test, I believe
    });

    it('should display photo from url', function() {
      //not sure how to test this yet. Maybe file type?
    });
  });


  describe('createTeamCtrl', function() {
    it('should call team factory\'s make function with team id', function() {
      //think I might need a sinon spy to check if called
    });
    it('should reroute to lobby', function() {
      //need to find out how to test rerouting
    });
  });

  describe('dashboardCtrl', function() {
    beforeEach(module('app.controllers'));
    beforeEach(module('app.services'));

    it('should update with team list Challenge from server', function() {
      //need to make fake update and then check scope's team list
      inject(function($controller, $rootScope, $interval, $resource) {
        var scope = $rootScope.$new()
        controller = $controller('dashboardCtrl', {
          $scope : scope
        });
        expect(scope.teams).to.have.length(3);
        $interval.flush(1000);
        expect(scope.teams).to.have.length(4);
      })
    });

    it('should have an equal number of teams and challenges', function() {
       inject(function($controller, $rootScope, $interval, $resource) {
        var scope = $rootScope.$new()
        controller = $controller('dashboardCtrl', {
          $scope : scope
        });

        var length = scope.teams.length;
        expect(scope.challenges.length).to.equal(length);
      })
    });

  });

  describe('endGameCtrl', function() {
    it('should be able to reroute to welcome page', function() {
      // need to find out how to test rerouting
    });
  });

});