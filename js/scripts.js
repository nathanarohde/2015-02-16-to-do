$(document).ready(function() {
  $('form#new-list').submit(function(event) {
    event.preventDefault();

    var inputTask = $('input#new-task').val();
    var newList = { task: inputTask };

    $('ul#tasks').append('<li><input type="checkbox" class="completed-task" value= "'+newList.task+'" >' + ' ' + '<span class="task">' + newList.task + '</span></li>');

    $('input#new-task').val('');

  });

  $('#save_value').click(function() {
    var newCompletedTaskList = []
    $(':checkbox:checked').each(function(i) {
        newCompletedTaskList[i] = $(this).val();
    });

    var completedList = {}
    newCompletedTaskList.forEach(function(completedTask) {
       completedList = { task: completedTask};
    });

    newCompletedTaskList.forEach(function(task) {
    $('ul#completed-tasks').append('<li>'+ task +'</li>');
    });
  });

  //

  // });

  // $('form#completed-list').submit(function(event) {
  //   event.preventDefault();
  // });
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
