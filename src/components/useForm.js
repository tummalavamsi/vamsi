import {useState,useEffect} from 'react';
import validateinfo from './Validateinfo';
const useForm = validate =>{
    const [values,setValues]=useState({
    lastname:'',
   firstname:'',
    email:'',
    password:'',
    password2:''
});
const [errors,setErrors] =useState({});
const [isSubmitting,setIsSubmitting]=useState(false);
const handleChange = e =>{
    const {name,value}=e.target;
    setValues({
        ...values,
        [name]:value
    });
};
const handleSubmit= e =>{
    e.preventDefault();
    setErrors(validateinfo(values));
    setIsSubmitting(true);
};
return {handleChange,values,handleSubmit,errors};
};
export default useForm;