import Ember from 'ember';

export default Ember.ObjectController.extend({
  isCompleted: function(key, value) {
	var model = this.get('model');

	if (value === undefined) {
	  return model.get('isCompleted');
	} else {
	  model.set('isCompleted', value);
	  model.save();
	}
  }.property('model.isCompleted'),
  isEditing: false,

  actions: {
	deleteTodo: function(todo) {
	  todo.destroyRecord();
	},
	editTodo: function() {
	  this.set('isEditing', true);
	},
	completeEdit: function() {
	  var controller = this;

	  this.get('model').save().then(function() {
		controller.set('isEditing', false);
	  });
	}
  }
});
