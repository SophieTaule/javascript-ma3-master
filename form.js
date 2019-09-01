
    function validateInfo(email, phone, firstname, lastname){
        // create a pattern to test an email address
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var phonePattern =/^[0-9]{8}$/;
        var firstNamePattern =/^[a-zA-Z ]+$/;
        var lastNamePattern = /^[a-zA-Z ]+$/;

        console.log("email: " + emailPattern.test(email.value))
        console.log("phone: " +phonePattern.test(phone.value))
        console.log("first name: " + firstNamePattern.test(firstname.value))
        console.log("last name: " +lastNamePattern.test(lastname.value))

}