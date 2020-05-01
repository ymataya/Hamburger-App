$(function() {

    // POST - MAKE NEW BURGER //
        $("#add").on("click", function(event) {
        event.preventDefault();

        var newBurger = $("#new-burger").val().trim();

        $.ajax("/api/create/" + newBurger, {
            type: "POST"
        }).then(
            function() {
            console.log("Created New Burger");
            location.reload();
            }
        );
    });

    // PUT - UPDATE BURGER STATE //

    $(".eat").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevour = $(this).attr("data-id");
    
    $.ajax("/api/change/" + newDevour + "/" + id, {
        type: "PUT"
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // DELETE BURGER //
    $(".delete").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("data-del");
    
        $.ajax("api/delete/" + id, {
          type: "DELETE"
        }).then(
          function(data) {
            location.reload();
            //   console.log("deleted")
          }
        );
      });
});
