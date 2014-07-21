describe("Tamagotchi", function() {
  describe("initialize", function() {
    it('Sets the name and properties of the pet', function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Zeus");
      myPet.name.should.equal("Zeus");
      myPet.foodLevel.should.equal(10);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(10);
    });
  });

  describe("timePasses", function() {
    it("decreases the amount of food, sleep, and activity of the Tamagotchi has left by 1", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Zeus");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
      myPet.sleepLevel.should.equal(9);
      myPet.activityLevel.should.equal(9);
    });
  });

  describe("isAlive", function() {
    it("It is alive if the food, sleep, and activity levels are above 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.isAlive().should.equal(true);
    });

    it("is dead if any of the food, sleep, or activity levels equal 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.foodLevel = 0;
      myPet.sleepLevel = 0;
      myPet.activityLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  });

});
