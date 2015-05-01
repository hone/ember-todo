import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var routeContext = this;

    return this.store.findAll('todo')
      .then(function() {
        return routeContext.store.filter('todo', function(todo) {
          return !todo.get('isNew');
        });
      });
  }
});
