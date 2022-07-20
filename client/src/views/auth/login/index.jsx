import React from "react";
import session from "../../../session";
import {Link}from "react-router-dom"
import "./index.css";
import fakeApi from "../../../services/fakeApi";
import LoginFormValidationSchema from "../../../utility/form/LoginformValidationSchema";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

const Login = () => {
 const {register,handleSubmit, formState:{errors,isValid,isSubmitting},setError}=useForm({
      mode:"onBlur",
      resolver:yupResolver(LoginFormValidationSchema)
 })

 const onSubmit=(data)=>{
   console.log(data)
 }

  return (
    <>
      <h3 className=" text-left mb-3">Se connecter</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label>Adresse email</label>
                    <input 
                    type="text"
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
                    type="text"
                     className="form-control p_input"
                     {...register("password")}
                     />
                       {
                      errors.password && <small className="mt-2 text-danger d-block" >{errors.password.message}</small>
                     }
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <div className="form-check  pt-1">
                      <label className="">
                        <input 
                        type="checkbox" 
                        className="form-check-input mt-0"
                       {...register("remember")}
                         />
                          Se souveni de moi </label>
                    </div>
                    <Link to="#" className="forgot-pass">Mote de passe oublié ?</Link>
                  </div>
                  <div className="text-center">
                    <button 
                    type="submit"
                     className="btn btn-primary btn-block enter-btn"
                      disabled={!isValid || isSubmitting}
                     >Connexion</button>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-facebook mr-2 col">
                      <i className="mdi mdi-facebook"></i> Facebook </button>
                    <button className="btn btn-google col">
                      <i className="mdi mdi-google-plus"></i> Google plus </button>
                  </div>
                  <p className="sign-up">Vous n'avez pas de compte ?<Link to="/register"> Inscrivez-vous</Link></p>
                </form>
    </>

  )
}

export default Login;