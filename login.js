document.getElementById('login-submit').addEventListener('click',function(){
    
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail)
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value
    // console.log(userPassword)

    window.location.href = 'banking.html'

    // if(userEmail == 'arnayan21@gmail.com' && userPassword == 12345){
    //         // console.log("Valid")

    //         window.location.href = 'banking.html'
    // }
})
