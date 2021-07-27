document.addEventListener('DOMContentLoaded', () => {
    const input_Username = document.getElementById('input_username');
    const input_Password = document.getElementById('input_password');
    const input_PasswordCheck = document.getElementById('input_passwordcheck');
    const input_Checkbox = document.getElementById('input_checkbox');
    const button_submit = document.getElementById('button_submit');

    /**
     * This function checks, if the two passwords are matching
     */
    function checkPasswordValues() {
        const password = input_Password.value;
        const passwordCheck = input_PasswordCheck.value;

        if(password === passwordCheck) {
            alert(`Passwords are matching!\nPassword: ${password}\nPasswordCheck: ${passwordCheck}`);
        } else {
            alert(`Die are not matching!\nPassword: ${password}\nPasswordCheck: ${passwordCheck}`);
        }
    }

    function checkCheckboxValue() {
        const isChecked = input_Checkbox.checked;

        if(isChecked) {
            alert('Checkbox is checked!')
        } else {
            alert('Checkbox is not checked!')
        }
    }

    button_submit.addEventListener('click', () => {
        checkPasswordValues();
        checkCheckboxValue()
    })
});