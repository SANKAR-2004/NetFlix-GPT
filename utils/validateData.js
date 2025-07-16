
export const validateData = (email, password) => {
    const isEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    if (!isEmail) return "Email is Not Valid";
    //Eight character,one smallcase,one uppercase,one number,one SpecialCharacter
    const isPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/~`]).{8,}$/.test(
        password
        );
    if (!password) return "Password is not Valid";
    
}