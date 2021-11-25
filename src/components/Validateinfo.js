export default function validateinfo(values){
    let errors={};
    if(!values.firstname.trim()){
        errors.firstname="Firstname Required";
    }
    if(!values.lastname.trim()){
        errors.lastname="Lastname Required";
    }
    if(!values.email){
        errors.email="Email Reqired"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    errors.email="Email Address is innvalid"

    if(!values.password){
        errors.password='password is required'
    }else if(values.password.length<6){
        errors.password="Password needs to be 6 characters or more";
    }
    if(!values.password2){
        errors.password2='Password need to be confirmed';
    }else if(values.password2!=values.password){
        errors.password2='Password do not match';
    }
    return errors;
}