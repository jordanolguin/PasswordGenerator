# Password Generator Bugs Fixed

This is a complete rundown of the updates made to the JavaScript file to fix the bugs in the password generator.

## JavaScript Updates

I updated the JavaScript file by first declaring global variables for all upper-case, lower-case, number, and special characters. Then I built out the function generatePassword to conduct this sequence of events:

        1. Upon clicking the "Generate Password" button, a page alert pops up with the message "Please choose a password length between 8 and 128 characters."

        2. Once entered, if the number of characters fits the criteria, it will move on to offer choices to select Upper-Case, Lower-Case, Numbers, and Special-Characters. (These will inturn produce a Boolean value to determine whether or not they are included in the password.) If the number of characters does not fit the criteria, the message "Please choose an appropriate password length." will appear.

        3. The new password will then be displayed in the textarea.

## Contributing

All requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please refer to the link: https://github.com/jordanolguin/PasswordGenerator and screenshots provided in the GitHub Repo. Special thanks to Matthew Calimbas for clarifying function declarations in a tutoring session.

## License

[MIT](https://choosealicense.com/licenses/mit/)
