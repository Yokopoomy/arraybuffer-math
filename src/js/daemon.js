import MathChar from './math';

export default class Daemon extends MathChar {
  constructor(name, stoned, attack, range) {
    super(name, stoned, attack, range);
    this.stoned = false;
    this.attack = 100;
  }
}
