import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
    //return this.store.find('todo').then(function(todos) {
    //  return todos.filterBy('isNew', false);
    //});
  }
});
