import Ember from 'ember';

export default Ember.ArrayController.extend({
  todoCount: Ember.computed.alias("model.length"),
  completedCount: function() {
	return this.get("model").filterBy("isCompleted").get("length");
  }.property("@each.isCompleted"),
  newTitle: "",
  actions: {
	createTodo: function() {
	  var title = this.get('newTitle');
	  var todo = this.store.createRecord('todo', {
		title: title,
		isCompleted: false
	  });

	  var controller = this;
	  todo.save().then(function(todo) {
		controller.set('newTitle', '');
	  });
	}
  }
});
