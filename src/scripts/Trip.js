import Parse from 'parse';

export default class Trip extends Parse.Object {

  constructor() {
    super('Trip');
  }
}

window.Trip = Trip;
