function register() {

    document.getElementById('registerBtn').addEventListener('click', () => {
        let usernameInputValue = document.getElementById('username').value;
        let emailInputValue = document.getElementById('email').value;
        let passwordInputValue = document.getElementById('password').value;
        let pattern = /(.+)@(.+).(com|bg)/gm;
        let createH1Element = document.createElement('h1');
        createH1Element.textContent = 'Successful registration';
        let username = `Username: ${usernameInputValue}`;
        let email = `Email: ${emailInputValue}`;
        let password = `Password: ${'*'.repeat(passwordInputValue.length)}`;
        let resultElement = document.getElementById('result');

        if (usernameInputValue.length > 0 && passwordInputValue.length > 0 && pattern.test(emailInputValue)) {

            append(); // display the result from the input fields

            hide();
        }

        function append() {
            resultElement.appendChild(createH1Element);
            resultElement.insertAdjacentHTML('beforeend', username);
            resultElement.innerHTML += '<br>';
            resultElement.insertAdjacentHTML('beforeend', email);
            resultElement.innerHTML += '<br>';
            resultElement.insertAdjacentHTML('beforeend', password);
        }

        function hide() {
            setTimeout(function () { //using setTimeout function
                document.getElementById('result').style.display = 'none'; //hide the button after 3 seconds
            }, 5000);
        }

    });
}
