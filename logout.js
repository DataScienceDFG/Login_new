// Add event listener to the logout button
document.getElementById("logout-btn").addEventListener("click", function() {


	// Send an AJAX request to the PHP logout script
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Redirect the user to the login page or another page
			console.log('6666666')
			window.location.href = "index.html";
			console.log('77777777')
			
		}
	};
	xhttp.open("GET", "logout.html", true);
	xhttp.send();

	closeWin(); 
	console.log('555555')
});

