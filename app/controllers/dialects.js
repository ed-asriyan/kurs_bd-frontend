/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.user'),
  dialects: null,

  init() {
    this._super();
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('dialects', dialects);
    }.bind(this));
  },
});
