import Character from './character';

export default class MathChar extends Character {
  constructor(name, stoned, attack, range) {
    super(name, stoned, attack);
    this.range = range;
  }

  set attack(val) {
    this._attack = val;
  }

  get attack() {
    let attack = this._attack;
    attack -= attack * ((this.range - 1) / 10);

    if (this.stoned) {
      attack -= Math.log(this.range) * 5;
    }
    return (attack > 0) ? Math.floor(attack) : 0;
  }
}
