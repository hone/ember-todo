import Ember from 'ember';

export default Ember.ArrayController.extend({
  todoCount: Ember.computed.alias("model.length"),
  completedTodos: function() {
	return this.get("model").filterBy("isCompleted");
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
