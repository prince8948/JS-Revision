window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        const password = document.querySelector("#password").value;
        const repassword = document.querySelector("#repassword").value;
        e.preventDefault();
        if (password === '' || repassword === '') {
            alert('Password field is required...')
        }
        if (password === repassword) {
            alert("Success fully done .............")
        }
        else {
            alert("Please enter correct password")
        }
    });
    function showPassword() {
        let passwordField = document.querySelector('#password');
        let rePasswordField = document.querySelector('#repassword');
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            rePasswordField.type = 'text';
        } else {
            passwordField.type = 'password';
            rePasswordField.type = 'password';
        }
    }
    document.querySelector('#viewpassword').addEventListener('change', showPassword)
})




// window.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('form').addEventListener('submit', function (e) {
//         const password = document.querySelector("#password").value;
//         const repassword = document.querySelector("#repassword").value;

//         e.preventDefault();

//         // Check if any password field is empty
//         if (password === '' || repassword === '') {
//             alert('Password field is required...');
//             return;
//         }
//         if (password === repassword) {
//             alert("Successfully done!");
//         } else {
//             alert("Please enter the correct password.");
//         }
//     });
//     function showPassword() {
//         let passwordField = document.querySelector('#password');
//         let rePasswordField = document.querySelector('#repassword');
//         if (passwordField.type === 'password') {
//             passwordField.type = 'text';
//             rePasswordField.type = 'text';
//         } else {
//             passwordField.type = 'password';
//             rePasswordField.type = 'password';
//         }
//     }

//     // Correct query selector for #viewpassword (checkbox)
//     document.querySelector('#viewpassword').addEventListener('change', showPassword);
// });