const submit = document.querySelector('#submit');


submit.addEventListener('click', (eo) => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    document.getElementById('signup_form').style.display = 'none';
    document.getElementById("thank_you").innerHTML = ` Congratulations ${firstName} ${lastName}  you are now signed up! `;
});
