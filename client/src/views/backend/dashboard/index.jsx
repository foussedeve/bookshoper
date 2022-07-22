import React, { useState, useEffect } from "react";
import { get_service } from "../../../services/app.service";
import BookCard from "../../../components/book-card";
import Loading from "../../../components/loader/loading";



const Dashboard = () => {
    const [errorMessage, setErrorMessage] = useState()
    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([])
    useEffect(() => {
        setLoading(true);
        (
            async () => {
                setErrorMessage(null);

                try {
                    let response = await get_service({ url: "/books" })
                    const { status, data } = response;

                    if (status) {

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



        setLoading(false)
    }, [])

    if (loading) {
        return <Loading />
    }

    return (

        <>
            {
                errorMessage && <small className="mt-5 mb-3 text-center bg-light p-2 text-danger d-block">{errorMessage}</small>
            }
            <div className="row">
                {
                    books?.map((book, index) => <BookCard book={book} index={index} />)
                }


            </div>
            {
                (!books?.length && !errorMessage ) && <small className="mt-5 mb-3 text-center bg-light p-2 text-warning d-block">Désole, il n'y a pas de livres dans la base de données</small>
            }

        </>
    )
}

export default Dashboard;