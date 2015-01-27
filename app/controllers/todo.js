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

  actions: {
	deleteTodo: function(todo) {
	  todo.destroyRecord();
	}
  }
});