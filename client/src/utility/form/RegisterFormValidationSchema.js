import * as yup from 'yup';
const RegisterFormValidationSchema= yup
.object()
.shape({
  lastname: yup.string().required("Veuilez saisir votre nom")
         .min(3,"Le nom doit comporter au moins 3 caratères")
         .max(50,"Le nom doit comporter au plus 50 caratères"),
  firstname: yup.string().required("Veuillez saissir votre prémons"),
  email:yup.string().required("Veuillez saissir votre adresse email")
         .email("Veuillez saissir une addresse email valide"),
  password: yup.string().required("Veuillez saissir votre mot de passe"),
  passwordConfirm:yup.string().required("Veuillez confimer votre mot de passe")
             .oneOf([yup.ref("password")],"Les mot de passe ne sont pas indentiques"),

 
});
export default RegisterFormValidationSchema;