import * as yup from 'yup';
const LoginFormValidationSchema= yup
.object()
.shape({
  email:yup.string().required("Veuillez saissir votre adresse email")
         .email("Veuillez saissir une addresse email valide"),
  password: yup.string().required("Veuillez saissir votre mot de passe"),
  remember :yup.bool()
  .oneOf([true])
 
 
});
export default LoginFormValidationSchema;