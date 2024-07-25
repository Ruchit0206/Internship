function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var gender = document.getElementById("gender").value;
    var branch = document.getElementById("branch").value;
    var semester = document.getElementById("semester").value;
    var enrollmentNumber = document.getElementById("enrollmentNumber").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var event = document.getElementById("event").value;
    var mobileRegex = /^[6-9]\d{9}$/;
    if (!fullName || !gender || !branch || !semester || !enrollmentNumber || !email || !mobileNumber || !event) {
        alert("All fields are required!");
        return false;
    }
    if (!mobileRegex.test(mobileNumber)) {
        alert("Please enter a valid mobile number!");
        return false;
    }
    // Display success message
    var message = "Registration successful!\n\n";
    message += "Full Name: " + fullName + "\n";
    message += "Gender: " + gender + "\n";
    message += "Branch: " + branch + "\n";
    message += "Semester: " + semester + "\n";
    message += "Enrollment Number: " + enrollmentNumber + "\n";
    message += "Email: " + email + "\n";
    message += "Mobile Number: " + mobileNumber + "\n";
    message += "Event: " + event;
    alert(message);
    return true;
}


