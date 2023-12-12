
const registerValidation = (credentials)=>{
    let errors={};

    // validate for email 

    const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const emailRegex=/\S+@\S+\.\S+/;
    

    if(!credentials.email){
        errors.email="Email required";
    }
    else if(!emailRegex.test(credentials.email)){
        errors.email="Please enter valid email";
    }

    // validate for username
    if(!credentials.username){
        errors.name="Username required";
    }
    else if(credentials.username.length<5){
        errors.name="username must be having more than 4 characters";
    }

    // validate for password

    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(!credentials.password){
        errors.password="Password required";
    }
    else if(!passwordRegex.test(credentials.password)){
        errors.password="password must contain at least 1 lowercase alphabet, 1 uppercase alphabet, 1 number and must be between 6 to 20 characters length";
    }

    return errors;
}

export default registerValidation;