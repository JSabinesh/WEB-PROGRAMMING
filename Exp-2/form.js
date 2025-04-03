function printform() {
    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const number = document.getElementById("number").value;
    const lname = document.getElementById("lname").value;
    const address = document.getElementById("address").value;


    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    const numberPattern = /^\d{10}$/;

    if (!fname || !email || !password || !number || !lname || !address) {
        alert("Please fill in all fields.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    if (!numberPattern.test(number)) {
        alert("Please enter a valid 10-digit phone number.");
        return; 
    }
    console.log(fname)
}
