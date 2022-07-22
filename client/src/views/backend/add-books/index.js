import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import session from "../../../session";
import BookFormValidationSchema from "../../../utility/form/BookFormValidationSchema";
import { post_service } from "../../../services/app.service";
import "./index.css";
import Loading from "../../../components/loader/loading";

const AddBook = () => {
    const [errorMessage, setErrorMessage] = useState()
    const [succesMessage, setSuccesMessage] = useState()
    const { register, handleSubmit, formState: { errors, isSubmitting },reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(BookFormValidationSchema)
    })

    const onSubmit = async (data) => {
        setErrorMessage(null);
        setSuccesMessage(null)
        let bookshop=session.get("USER_SESSION")?.data?.id;
        let formData = {title: data?.title, author: data?.author, pages:data?.pages,summary:data?.summary, year: data?.year, cover: data?.cover[0],bookshop:bookshop }
    
        try {
            let response = await post_service({url:"/books", data:formData })
            const { status,data } = response;
            if (status) {
              setSuccesMessage(data?.message);
              reset();
            }
            // traimet for error
            else {
                const { data, code } = response
            
                switch (code) {
                    case 500:
                        setErrorMessage("Le server est indisponible,Veuillez contacter l'administrateur.")
                        break;
                    case 400:
                        setErrorMessage(data?.message)
                        break
                    case 404:
                        setErrorMessage("Le server est introuvable.")
                        break
                    default:
                        break;
                }
            }



        } catch (error) {

        }
    }
     if(isSubmitting){
        return <Loading/>
     }

    return (

        <div className="row">

            <div className="col-md-6 grid-margin stretch-card ">
                <div className="card category-card">
                    <div className="card-body card-h">
                        {
                            errorMessage && <small className="mt-1 mb-3 text-center bg-light p-2 text-danger d-block">{errorMessage}</small>
                        }
                        {
                            succesMessage && <small className="mt-1 mb-3 text-center bg-light p-2 text-success d-block">{succesMessage}</small>
                        }
                        <h4 className="fw-bold text-color mb-3">Nouveau livre</h4>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Titre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputUsername1"
                                    {...register("title")}
                                />
                                {
                                    errors.title && <small className="mt-2 text-danger d-block">{errors?.title?.message}</small>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputAuthor">Auteur</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputAuthor"
                                    {...register("author")}
                                />
                                {
                                    errors.author && <small className="mt-2 text-danger d-block">{errors?.author?.message}</small>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPages">Pages</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPages"
                                    {...register("pages")}
                                />
                                {
                                    errors.pages && <small className="mt-2 text-danger d-block">{errors?.pages?.message}</small>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputYear">Année</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputYear"
                                    {...register("year")}
                                />
                                {
                                    errors.year && <small className="mt-2 text-danger d-block">{errors?.year?.message}</small>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleTextarea1">Résumé</label>
                                <textarea
                                    className="form-control"
                                    id="exampleTextarea1"
                                    rows="4"
                                    {...register("summary")}
                                ></textarea>
                                {
                                    errors.summary && <small className="mt-2 text-danger d-block">{errors?.summary?.message}</small>
                                }
                            </div>

                            <div className="form-group">
                                <label>Illustration</label>

                                <div className="input-group col-xs-12">
                                    <input
                                        type="file"
                                        className="form-control file-upload-info "
                                        placeholder="Upload Image"
                                        {...register("cover", { "required": true })}
                                    />
                                    <span className="input-group-append">
                                        <button className="file-upload-browse btn btn-inverse-danger" type="button">Upload</button>
                                    </span>

                                </div>
                                {
                                    errors.cover && <small className="mt-2 text-danger d-block">{errors?.cover?.message}</small>
                                }
                            </div>
                            <button 
                            type="submit" 
                            className="btn btn-inverse-primary mr-2 mt-2 p-2"
                            disabled={isSubmitting}
                            >Enregistez</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className="col-md-2 grid-margin stretch-card "></div>
            <div className="col-md-4 grid-margin stretch-card ">
                <div className="card">
                    <div className="card-body">
                        <h4 className="fw-bold  mb-3">Récents livree enregistrées</h4>
                        <div className="table-responsive">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook;