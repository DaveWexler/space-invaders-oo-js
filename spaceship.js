const Spaceship = (function(){

  return class {
    constructor(obj) {
      this.name = obj.name;
      this.id = obj.id;
      this.phasers = obj.phasers;
      this.shields = obj.shields;
      this.warpDrive = "disengaged";
      this.phasersCharge = "uncharged";
      this.cloaked = false;
      this.docked = true;


      // this.crew = [];
      Store.data.spaceships.push(this);
    }
  }
}())