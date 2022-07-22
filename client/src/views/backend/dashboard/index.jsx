import React, { useState, useEffect } from "react";
import { get_service } from "../../../services/app.service";
import BookCard from "../../../components/book-card";



const Dashboard = () => {
    const [errorMessage, setErrorMessage] = useState()
    const [succesMessage, setSuccesMessage] = useState()
    const [books, setBooks] = useState([])
    useEffect(() => {
        
            (
                async () => {
                     setErrorMessage(null);
                     setSuccesMessage(null);
                    try {
                        let response = await get_service({ url: "/books" })
                        const { status, data } = response;
                        if (status) {
                            setSuccesMessage(data?.message);
                            setBooks(data.data);
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



                })()




    }, [])

    return (

        <>
            {
                errorMessage && <small className="mt-1 mb-3 text-center bg-light p-2 text-danger d-block">{errorMessage}</small>
            }
            <div className="row">
            {
                books&& books.map((book,index)=><BookCard book={book} index={index}/>)
            }


            </div>
           
        </>
    )
}

export default Dashboard;