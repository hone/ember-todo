import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.findAll('todo');

    return this.store.filter('todo', function(todo) {
      return !todo.get('isNew');
    });
  }
});
