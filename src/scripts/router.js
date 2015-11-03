import Backbone from 'backbone';

export default class Router extends Backbone.Router {
  get routes() {
    return {
      '' : 'home',
      'shop' : 'shop',
      'sign' : 'signIn',
      'trip' : 'makeTrip',
      'up' : 'signUp',
      'results' : 'results',
      'details' : 'searchDetails'
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

  results() {
    this.current = 'results';
  }

  searchDetails() {
    this.current = 'searchDetails';
  }

  initialize() {
    Backbone.history.start();
  }
};
