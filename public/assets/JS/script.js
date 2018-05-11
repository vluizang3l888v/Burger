$(document).ready(function() {
	$(".salad-btn").on("click", event => {
		console.log('hello');
		event.preventDefault();
		$(".salad-pic").append("<img src='https://img.memecdn.com/tasty-salad-but-a-not-so-healthy-salad_o_7021359.jpg'/>");
	});

	$('.devour').on('click', function(event) {
		console.log(event.target.value);
		$(`#burger-${event.target.value}`).empty();
	})
})

