import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: 'isCompleted:completed isEditing:editing'.w(),

  isCompleted: function(key, value) {
    var todo = this.get('todo');

    if (value === undefined) {
      return todo.get('isCompleted');
    } else {
      todo.set('isCompleted', value);
      todo.save();
    }
  }.property('todo.isCompleted'),

  isEditing: false,

  actions: {
    deleteTodo: function(todo) {
      todo.destroyRecord();
    },

    editTodo: function() {
      this.set('isEditing', true);
    },

    completeEdit: function() {
      this.get('todo').save().then(() => {
        this.set('isEditing', false);
      });
    }
  }
});
