export default function Validation(register) {
    const errors = {}
    const email= /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/
    const password =/^(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/
   if (register.firstname === '') {
    errors.firstname ='FirstName is Required!'
   }
   if (register.lastname === '') {
    errors.lastname ='LasttName is Required!'
   }
   if (register.mobile === '') {
    errors.mobile ='Mobile Number is Required!'
   }
   if (register.street === '') {
    errors.street ='Street is Required!'
   }
   if (register.district === '') {
    errors.district ='District is Required!'
   }
   if (register.city === '') {
    errors.city ='city is Required!'
   }
   if (register.password === '') {
    errors.password ='password is Required!'
   }
   else if(!password.test(register.password)){
    errors.password ='password did not match'
   }
  
   if (register.gender === '') {
    errors.gender ='Gender is Required!'
   }

   if (register.email === '') {
    errors.email ='email is Required!'
   }
   else if(!email.test(register.email)){
    errors.email ='email did not match'
   }
   return errors;

}