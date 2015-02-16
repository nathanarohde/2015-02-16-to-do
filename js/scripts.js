$(document).ready(function () {
  $('form#new-list').submit(function(event) {
    event.preventDefault();

    var inputTask = $('input#new-task').val();
    var newList = { task: inputTask };

    $('ul#tasks').append('<li><span class="task">' + newList.task + '</span></li>');

    $('input#new-task').val('');

    $('.task').last().click(function() {
      $('#show-list').show();
      $('.task').text(newList.task);
    });
  });
});
