/* Changes Title for each Scroll and Applies Enhanced Parallax */
function scroll(){
    
    var t= window.scrollY;
    
    /*Changes Title for each Scroll*/
   
    var s1 = document.getElementById ("topSection");
    var s2 = document.getElementById ("aboutSection");
    var s3 = document.getElementById ("sloganSection");
    var s4 = document.getElementById ("servicesSection");
    var s5 = document.getElementById ("accountSection");
    var s6 = document.getElementById ("referencesSection");

    /*Multiplies by 80% to Accomodate for Banner*/
    var t1 = s1.offsetTop*.8;
    var t2 = s2.offsetTop*.8; 
    var t3 = s3.offsetTop*.8; 
    var t4 = s4.offsetTop*.8; 
    var t5 = s5.offsetTop*.8;
    var t6 = s6.offsetTop*.8;
    
   
    if (t>t6){
     document.title = ("Sunshine Resort - References");   
    }
    else if(t>t5){
     document.title = ("Sunshine Resort - Account");   
    }
     else if(t>t4){
     document.title = ("Sunshine Resort - Services") ;  
    }
     else if(t>t3){
     document.title = ("Sunshine Resort - Slogan") ;  
    }
     else if(t>t2){
     document.title = ("Sunshine Resort - About") ;  
    }
     else if(t>t1){
     document.title = ("Sunshine Resort - Welcome") ;  
    }
    
    /*Enhanced Parallax Scroll*/
    
    var para = document.getElementById("parallax");
    
    var m= -0.5;
    var b= 0;
    
    newY = m*t+b;
    
    para.style.backgroundPositionY = newY + "px";

    /*Enhanced Sticky Header Scroll*/
    var bannerBox = document.getElementById("banner-box");
 
    var sticky;
    if(bannerBox.offsetTop!==0){
    sticky = bannerBox.offsetTop;
     }
    else sticky=499;     

    if (window.pageYOffset > sticky) {
        bannerBox.classList.add("sticky");
    } 
    else {
        bannerBox.classList.remove("sticky");
    }
}

 /*Closes Covid Statement Box*/
function closeCovid(){
    var covidBox = document.getElementById("covid-box");
        
    covidBox.style.display = "none";
}

 /*Validates Login Information*/
function login(){
    
    var usernameBox= document.getElementById("usernameInput");
    var username= usernameBox.value;
    
     var passwordBox= document.getElementById("passwordInput");
    var password= passwordBox.value;
   
    if(username===("user2033") && password===("letmein")){
        alert("Welcome back!")
    }
    else{
        loginShake();
    }
}

 /*Validates Registration Information*/
function register(){
   
     /*Declare Used Elements*/
    var usernameBox= document.getElementById("regUsernameInput");
    var username= usernameBox.value;
    
    var passwordBox= document.getElementById("regPasswordInput");
    var password= passwordBox.value;
    
      var confirmPasswordBox= document.getElementById("regConfirmPasswordInput");
    var confirmPassword= confirmPasswordBox.value;
   
     /*Tracks Validation*/
    var validPassword = false;
    var validUsername = false;
    
    /*USERNAME VALIDATION*/
     var format1 = new RegExp("[A-Za-z]+.*[0-9]+.*")
    var correctPasswordFormat1 = format1.test(password);
    
     var format2 = new RegExp("[0-9]+.*[A-Za-z]+.*")
    var correctPasswordFormat2 = format2.test(password);
   
    if(username.length<6||username.length>10){
        registerShake();
        usernameBox.style.borderColor="red";
    }
    else{
        usernameBox.style.borderColor="green";
        validUsername=true;
    }
   
    /*PASSWORD VALIDATION*/
    if(password.length<5){
        registerShake();
       passwordBox.style.borderColor="red";
        
    }
     else{
          if(correctPasswordFormat1 == false && correctPasswordFormat2 == false){
            registerShake();
            passwordBox.style.borderColor="red";
          }
         else{
        passwordBox.style.borderColor="green";
             validPassword=true;
         }
    }
    
    /*CONFIRM PASSWORD VALIDATION */
    if(confirmPassword===password){
       if(validPassword && validUsername){
        confirmPasswordBox.style.borderColor="green";
        alert("Welcome aboard!")
       }
    
        confirmPasswordBox.style.borderColor="green";
     
    }
    else{
        registerShake();
        confirmPasswordBox.style.borderColor="red";
    }
}

 /*Toggle between Login and Registration Form*/
function switchEntryPoint(){
    var loginPlatform= document.getElementById("login");
     
    var registrationPlatform= document.getElementById("registration");
    
    var switchEntryText= document.getElementById("switchEntryText");
    
     /*Display Registration and hide Login if currently on Login*/
    if (loginPlatform.style.display !== "none"){
    loginPlatform.style.display = "none";
    registrationPlatform.style.display = "block";
    switchEntryText.innerHTML = "Already have an account? Login here.";
    }
    
    /*Display Login and hide Registration if currently on Registration*/
    else if (loginPlatform.style.display === "none"){
     registrationPlatform.style.display = "none";
    loginPlatform.style.display = "block";
    switchEntryText.innerHTML = "No Account? Register now!";
 }
   
   
}

/*Shake Animation for Registration Validation*/
function registerShake(){
    var registerBox= document.getElementById("registration");
    registerBox.classList.add("shake");
}
/*Shake Animation for Login Validation*/
function loginShake(){
    var loginBox= document.getElementById("login");
    loginBox.classList.add("shake");
}
/*Resets Shake Animation for Both Validations*/
function resetShake(){
 var loginBox= document.getElementById("login");
    loginBox.classList.remove("shake");
 var registerBox= document.getElementById("registration");
   registerBox.classList.remove("shake");
}
