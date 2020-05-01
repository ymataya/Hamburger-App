$(function() {

    // POST - MAKE NEW BURGER //
        $("#add").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#new-burger").val().trim(),
        };

        $.ajax("/api/create/" + newBurger, {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("Created New Burger");
            location.reload();
            }
        );
    });

    // PUT - UPDATE BURGER STATE //

    $(".change-sleep").on("click", function(event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
    
        var newSleepState = {
          sleepy: newSleep
        };
    
    $.ajax("/api/change/:bool/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // DELETE BURGER //
    
    $("#delete").on("click", function(event) {
        var id = $(this).data("id");
    
        $.ajax("api/delete/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("Burger Deleted", id);
            location.reload();
          }
        );
      });




});
