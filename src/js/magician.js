import MathChar from './math';

export default class Magician extends MathChar {
  constructor(name, _stoned, _attack, range) {
    super(name, _stoned, _attack, range);
    this._stoned = false;
    this._attack = 100;
  }
}
