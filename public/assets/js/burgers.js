// /public/assets/js/burgers.js

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devourBtn").on("click", function (event) {
        var id = $(this).data("id");
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: {devoured: true}
		}).then(
			function () {
				location.reload();   // Reload the page to get the updated list
			}
		);
    });

	$(".create-form").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		var newBrg = {
			name: $("#ca").val().trim()
		};

		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBrg
		}).then(
			function () {
				location.reload();
			}
		);
	});

	$(".delete-cat").on("click", function (event) {
		var id = $(this).data("id");

		// Send the DELETE request.
		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(
			function () {
				location.reload();
			}
		);
	});
});
