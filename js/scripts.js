$(document).ready(function() {
  $('form#new-list').submit(function(event) {
    event.preventDefault();

    var inputTask = $('input#new-task').val();
    var newList = { task: inputTask };


    $('ul#tasks').append('<li><input type="checkbox" class="completed-task">' + ' ' + '<span class="task">' + newList.task + '</span></li>');

    $('input#new-task').val('');



  });

// $('.task').last().click(function() {
//   $('#show-list').show();
//   $('.task').text(newList.task);
// });


  // $('.completed-task').change(function() {
  //
  //   if ($(this).is(':checked')) {
  //     $('#show-completed').show();
  //   };
  //
  // });

});
