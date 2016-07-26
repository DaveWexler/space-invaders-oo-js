const CrewMember = (function(){

  return class {
    constructor(object) {
      this.id = object.id;
      this.position = object.position;
      this.currentShip = "Looking for a Rig";
      this.spaceshipId = undefined;
      Store.data.crewMembers.push(this);
    }

    assignShip(spaceship) {
      this.currentShip = spaceship
      this.spaceshipId = spaceship.id
      spaceship.docked = false
    }
    
    findShip() {
      return Store.data.spaceships.find(function(obj) {
        obj.id === this.currentShip;
      })
    }

    engageWarpDrive() {
      if (this.position === "Pilot" && this.currentShip != "Looking for a Rig") {
        this.currentShip.warpDrive = "engaged!";
      } else {
        return "had no effect"
      }
    }

    setsInvisibility() {
      if (this.position === "Defender" && this.currentShip != "Looking for a Rig") {
        this.currentShip.cloaked = true;
      } else {
        return "had no effect"
      }
    }

    chargePhasers() {
      if (this.position === "Gunner" && this.currentShip != "Looking for a Rig") {
        this.currentShip.phasersCharge = "charged!";
      } else {
        return "had no effect"
      }
    }
  }
}())