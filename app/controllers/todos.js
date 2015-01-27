import Ember from 'ember';

export default Ember.ArrayController.extend({
  todos: function() {
	return this.get('model').filterBy('isNew', false);
  }.property('model.length'),
  todoCount: Ember.computed.alias("todos.length"),
  completedCount: function() {
	return this.get("todos").filterBy("isCompleted").get("length");
  }.property("@each.isCompleted"),
  todo: function() {
	return this.store.createRecord('todo', {
	  isCompleted: false
	});
  }.property(),
  actions: {
	createTodo: function() {
	  var controller = this;
	  this.get('todo').save().then(function(todo) {
		controller.set('todo', controller.store.createRecord('todo', {
		  isCompleted: false
		}));
	  });
	}
  }
});
