$(document).ready(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    $("#formStatus").text("");

    // Check if all required fields are filled
    $(this).find("input, textarea").each(function () {
      if (!$(this).val().trim()) {
        isValid = false;
        $(this).css("border-color", "red");
      } else {
        $(this).css("border-color", "#ccc");
    }
});

// Validate email format
const email = $("#email").val().trim();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  isValid = false;
  $("#email").css("border-color", "red");
  $("#formStatus").text("Please enter a valid email address.");
}

// Show success or error message
if (isValid) {
  $("#formStatus").text("Form submitted successfully!").css("color", "green");
  $(this).find("input, textarea").val(""); // Clear form
} else {
    $("#formStatus").text("Please fill out all fields correctly.").css("color", "red");
}
});
});