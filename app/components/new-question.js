import Ember from 'ember';


export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        thumbsUp: 0,
        thumbsDown: 0,
        totalVotes: 0,
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
      }
    }
});
