import Backbone from 'backbone';

export default class Router extends Backbone.Router {
  get routes() {
    return {
      '' : 'home',
      'shop' : 'shop',
      'sign' : 'signIn',
      'trip' : 'makeTrip',
      'up' : 'signUp'
    }
  }
  home() {
    this.current = 'home';
  }

  shop() {
    this.current = 'shop';
  }

  signIn() {
    this.current = 'signIn';
  }

  makeTrip() {
    this.current = 'makeTrip';
  }

  signUp() {
    this.current = 'signUp';
  }

  initialize() {
    Backbone.history.start();
  }
};
