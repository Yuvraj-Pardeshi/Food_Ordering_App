export const checkValidate = (name,email,password)=>{
    const isNameValid = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    /*At least one upper case English letter, (?=.*?[A-Z])
    At least one lower case English letter, (?=.*?[a-z])
    At least one digit, (?=.*?[0-9])
    At least one special character, (?=.*?[#?!@$%^&*-])
    Minimum eight in length .{8,} (with the anchors)*/
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isNameValid && name!=="") return "Please Enter valid Name";
    else if(!isEmailValid) return "Please enter a valid email";
    else if(!isPasswordValid) return "Please Enter valid password";
    else return null;
}