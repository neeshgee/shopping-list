import Parse from 'parse';

export default class Coupon extends Parse.Object {

  constructor() {
    super('Coupons');
  }
}

window.Coupon = Coupon;
