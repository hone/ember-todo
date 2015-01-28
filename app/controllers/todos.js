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
  allCompleted: function(key, value) {
	if (value === undefined) {
	  return this.get("completedCount") == this.get("model").get("length");
	} else {
	  this.get("model").forEach(function(todo) {
		todo.set("isCompleted", value);
		todo.save();
	  });
	  return value;
	}
  }.property("@each.isCompleted"),

  actions: {
	createTodo: function() {
	  var controller = this;
	  this.get('todo').save().then(function() {
		controller.set('todo', controller.store.createRecord('todo', {
		  isCompleted: false
		}));
	  });
	},
	clearCompleted: function() {
	  this.get("completedTodos").forEach(function(item) {
		item.destroyRecord();
	  });
	}
  }
});
