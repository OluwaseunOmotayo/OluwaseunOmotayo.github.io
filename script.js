/*jshint esversion: 6 */

const menuIcon = document.querySelector(".hamMenu");
const navbar = document.querySelector(".navbar");
const ul = document.querySelector(".mainMenu");
const menubar = document.querySelector(".menubar");

menuIcon.addEventListener("click", () => {
	console.log("Clicked");
	menubar.classList.toggle("z-index-vary");
	navbar.classList.toggle("change");
	ul.classList.toggle("show-hide");
});

window.onload = function() {
	var form = document.querySelector("#applyForm");
	if (!form) {
		return;
	}
	form.onsubmit = submitted.bind(form);
};

function submitted(event) {
	event.preventDefault();
	Swal.fire({
		title: "Please Confirm Your Details",
		text: "You won't be able to change this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, submit it!",
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire(
				"Saved!",
				"A member of the admin departement will reach out to you soon.",
				"success"
			).then((result) => {
        if (result.isConfirmed){
location.reload();
        }
        
      })
		}
	});
	
}