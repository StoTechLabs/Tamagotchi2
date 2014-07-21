var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
  },

  foodLevel: 10,
  sleepLevel: 10,
  activityLevel: 10,

  timePasses: function() {
    if (this.foodLevel>0) {
      this.foodLevel -= 1
    }

    if (this.sleepLevel>0) {
      this.sleepLevel -=1
    }

    if (this.activityLevel>0) {
      this.activityLevel -=1
    }

    $("#food-display").text(myPet.foodLevel);
    $("#sleep-display").text(myPet.sleepLevel);
    $("#activity-display").text(myPet.activityLevel);
  },

  isAlive: function() {
    if(this.foodLevel>0 && this.sleepLevel>0 && this.activityLevel>0) {
      return true
    } else if (this.foodLevel===0 || this.sleepLevel===0 || this.activityLevel===0) {
      return false
    }
  }

};

var myPet = Object.create(Tamagotchi);
myPet.initialize(name);

$(document).ready(function() {
  $("form#Tamagotchi").submit(function(event) {
    event.preventDefault();

    $("#egg-hide").hide();
    $("#my-pets-name").show();
    var petName = $("input#pet-name").val();
    $("#my-pets-name").text(petName);

    this.reset();

    myPet.initialize(petName);
    $("#food-display").text(myPet.foodLevel);
    $("#sleep-display").text(myPet.sleepLevel);
    $("#activity-display").text(myPet.activityLevel);
    // $("#tamagotchi-div").prepend('<img id ="chilling" src="tamagotchi/css/tamagotchi-gifs/chilling.gif" />')

    var timeBegins = setInterval(function() {
      myPet.timePasses();

      if (myPet.isAlive() === true) {
        $("#life-status").text("is Alive.")
        $("#chilling-hide").show()
      }

      if (myPet.isAlive() === false) {
        $("#life-status").text("is Dead.")
        $("#chilling-hide").hide()
        $("#dead-hide").show()
      }
    }, 800);
  });

  $(".food-btn").click(function() {
    myPet.foodLevel +=1;
    $("#food-display").text(this.foodLevel);
  });

  $(".sleep-btn").click(function() {
    myPet.sleepLevel +=1;
    $("#sleep-display").text(this.sleepLevel);
  });

  $(".activity-btn").click(function() {
    myPet.activityLevel +=1;
    $("#activity-display").text(this.activityLevel);
  });

});
