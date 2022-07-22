import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"
import "./index.css";
import session from "../../../session";
import useAuth from "../../../utility/hook/useAuth";
import LoginFormValidationSchema from "../../../utility/form/LoginformValidationSchema";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const Login = () => {
  const [errorMessage, setErrorMessage] = useState();

  const { user, signin } = useAuth()
  const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(LoginFormValidationSchema)
  })

  const onSubmit = async (data) => {
    let credential = { username: data?.email, password: data?.password }
    try {
      let response = await signin(credential, (data) => {
        if (!data.status) {
        // error traitement
        let code = data?.code;
        switch (code) {
          case 401:
            setErrorMessage("Mot de passe ou email invalide.");
            break;
          case 500:
            setErrorMessage("Le server est indisponible,Veuillez contacter l'administrateur.")
          case 404:
            setErrorMessage("Le server introuvable")
          default:
            break;
        }
        } 
        


      })

    }
    catch (error) {

    }


  }
  console.log(session.get("USER_SESSION"));
  if (session.get("USER_SESSION").data) {
    //session.remove("USER_SESSION")
    return <Navigate to="/dashboard"  />;
  }
  return (
    <>
      {
        errorMessage && <small className="mt-1 mb-3 text-center bg-light p-2 text-danger d-block">{errorMessage}</small>
      }
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