var app = app || {};
app.Views = app.Views || {};

app.Views.GamePage = Backbone.View.extend({
  tag: 'div',
  id: 'mainGamePage',

  initialize: function () {

    $('#main').html(this.$el);
    this.render();
  },

  render: function () {
    var game = $('#gamePage').html();
    this.$el.html(game);
  }

  //TODO finish this page
});
