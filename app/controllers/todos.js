import Ember from 'ember';

export default Ember.ArrayController.extend({
  todos: function() {
	return this.get('model').filterBy('isNew', false);
  }.property('model.length'),
  todoCount: Ember.computed.alias("todos.length"),
  completedTodos: function() {
	return this.get("todos").filterBy("isCompleted");
  }.property("@each.isCompleted"),
  completedCount: function() {
	return this.get("completedTodos").get("length");
  }.property("@each.isCompleted"),
  todo: function() {
	return this.store.createRecord('todo', {
	  isCompleted: false
	});
  }.property(),
  actions: {
	createTodo: function() {
	  var controller = this;
	  this.get('todo').save().then(function() {
		controller.set('todo', controller.store.createRecord('todo', {
		  isCompleted: false
		}));
	  });
	},
	deleteTodo: function(todo) {
	  todo.destroyRecord();
	},
	clearCompleted: function() {
	  this.get("completedTodos").forEach(function(item) {
		item.destroyRecord();
	  });
	}
  }
});
