let checkmenu = document.getElementById("checkmenu");
	function showMenu(){
		checkmenu.style.right = "0";
	}
	function hideMenu(){
		checkmenu.style.right = "-500px";
	}


	// --------------password visibility---------------

const seePassword = document.querySelector('#togglePassword');

const password = document.querySelector('#password');
    
seePassword.addEventListener('click', () =>{
    const type = password.getAttribute('type') === 'password' ?
    'text' : 'password';
    password.setAttribute('type', type);

this.classList.toggle('fa-eye-eye')

});
	
//------------------form validation-----------------
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
// const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('.signUp');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();
    
    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();
        // isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid;
        // isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        document.querySelector('.sign-up-btn').addEventListener('click', (e) =>{
            e.preventDefault();
            alert("Thank You For Submitting your details \u{1F60D}");
        })
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));


/*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
      var sections = $("section"),
      navigation_links = $("#main-nav-wrap li a");	
  
      sections.waypoint( {
  
         handler: function(direction) {
  
             var active_section;
  
              active_section = $('section#' + this.element.id);
  
              if (direction === "up") active_section = active_section.prev();
  
              var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			
  
           navigation_links.parent().removeClass("current");
              active_link.parent().addClass("current");
  
          }, 
  
          offset: '25%'
      });
  
  
      /*---------------------------------------------------- */
        /* Smooth Scrolling
        ------------------------------------------------------ */
        $('.smoothscroll').on('click', function (e) {
           
           e.preventDefault();
  
         var target = this.hash,
          $target = $(target);
  
          $('html, body').stop().animate({
             'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
  
        }); 