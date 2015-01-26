import Ember from 'ember';

export default Ember.ArrayController.extend({
  todoCount: Ember.computed.alias("model.length"),
  completedCount: function() {
	return this.get("model").filterBy("isCompleted").get("length");
  }.property("@each.isCompleted")
});
