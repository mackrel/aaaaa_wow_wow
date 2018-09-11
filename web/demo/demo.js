var elem = document.getElementById('elem');
var bell = new Audio('./bell.mp3');

elem.addEventListener('click',function()
{
	console.log(bell.play());
	bell.currentTime = 0;
	/*
	anime({
		targets: elem,
		opacity: 0
	});
	*/

});