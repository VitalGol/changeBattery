window.onload = function () {

	function changeBattery() {
		let battery = document.getElementById('battery'),
			bat = 244;

		battery.innerHTML = '&#xf' + bat;

		// 	unicodeBattery = ['&#xf243;', '&#xf242;', '&#xf241;', '&#xf240;'];

		for (let i = 1000; i <= 4000; i += 1000) {
			setTimeout(function () {
				battery.innerHTML = '&#xf' + (bat - i / 1000);
			}, i);
		}
	}

	// run animation
	changeBattery();

	// run animation every 5sec
	setInterval(changeBattery, 5000);

}