import React from "react";
import {Link}from "react-router-dom"
import session from "../../../session";
import fakeApi from "../../../services/fakeApi";
import RegisterFormValidationSchema from "../../../utility/form/RegisterFormValidationSchema";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

const Register = () => {
  // react-hook-form
  const {register,handleSubmit, formState:{errors,isValid,isSubmitting},setError,reset}=useForm({
    mode:"onBlur",
    resolver:yupResolver(RegisterFormValidationSchema)
})

const onSubmit=async (data)=>{
  console.log(data)
  reset()
}


  return (
    <>
      <h3 className="text-left mb-3">Créer un compte</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nom</label>
          <input 
          type="text" 
          className="form-control p_input"
          {...register("lastname")}
           />
             {
              errors?.lastname && <small className="mt-2 text-danger d-block">{errors?.lastname?.message}</small>
              }
        </div>
        <div className="form-group">
          <label>Prenoms</label>
          <input
           type="text" 
           className="form-control p_input"
           {...register("firstname")}
           />
           {
            errors?.firstname&& <small className="mt-2 text-danger d-block">{errors?.firstname?.message}</small>
           }
        </div>
        <div className="form-group">
          <label>Adresse email</label>
          <input 
          type="email"
           className="form-control p_input"
           {...register("email")}
           />
           {
            errors?.email && <small className="mt-2 text-danger d-block">{errors?.email?.message}</small>
           }
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input 
          type="password" 
          className="form-control p_input"
          {...register("password")}
           />
           {
            errors?.password && <small className="mt-2 text-danger d-block">{errors?.password?.message}</small>
           }
        </div>
        <div className="form-group">
          <label>Confirmez votre mot de passe</label>
          <input 
          type="password"
           className="form-control p_input"
           {...register("passwordConfirm")}
           />
           {
            errors?.passwordConfirm && <small className="mt-2 text-danger d-block">{errors?.passwordConfirm?.message}</small>
           }
        </div>
      
        <div className="text-center">
          <button
           type="submit" 
           className="btn btn-primary btn-block enter-btn"
           disabled={!isValid || isSubmitting}
           >S'inscrire</button>
        </div>
        <div className="d-flex">
          <button className="btn btn-facebook col mr-2">
            <i className="mdi mdi-facebook"></i> Facebook </button>
          <button className="btn btn-google col">
            <i className="mdi mdi-google-plus"></i> Google plus </button>
        </div>
        <p className="sign-up text-center">Vous aves déjà un compte?<Link to="/"> Connecter-vous</Link></p>
        <p className="terms">En créant un compte vous acceptez <Link to="#"> Terme & Conditions</Link></p>
      </form>
    </>

  )
}

export default Register;