<?php

namespace App\Controller;

use App\Entity\Book;
use App\Form\BookRegisterType;
use App\Form\BookUpdateType;
use App\Helpers\FileUploader;
use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route("/api")
 */
class BookController extends AbstractController
{
    private $bookRepo;

    public function __construct(BookRepository $bookRepo)
    {
        $this->bookRepo = $bookRepo;
    }

    /**
     * @Rest\Post("/books", name="book_post")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"book_register"})
     */
    public function postBook(Request $request, FileUploader $fileUploader)
    {

        //dd($request);
        $book = new Book();
        $form = $this->createForm(BookRegisterType::class, $book);
        $form->submit($request->request->all());
        if ($form->isSubmitted() && $form->isValid()) {

            // uploade cover
            $file = $request->files->get("cover");
            $cover = $fileUploader->uploadImage($file, $this->getParameter("image_directory"));
            if ($cover) {
                $book->setCover($cover);
                $bookshop = $book->getBookshop();
                $bookshop->addBook($book);
                $this->bookRepo->add($book, true);
                return $response = [
                    "success" => true,
                    "code" => Response::HTTP_CREATED,
                    "message" => "Le livre a été enregistré avec succès.",
                    "data" => $book
                ];
            }
            $response = [
                "success" => false,
                "code" => Response::HTTP_BAD_REQUEST,
                "message" => "Enregisterment du livre à échoué, image invalide.",
                "data" => null
            ];
        } else {
            $response = [
                "success" => false,
                "code" => Response::HTTP_BAD_REQUEST,
                "message" => "Données invalides",
                "data" => null
            ];
        }
        return $this->json($response, $response["code"]);
    }


    /**
     * @Rest\Put("/books/{id}", name="book_put")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"book_register"})
     */
    public function putBook(Request $request,$id){
       
        $book=$this->bookRepo->find($id);
        if(!$book){

            $response=[
         "success" =>false,
         "code" => Response::HTTP_NOT_FOUND,
         "message" =>"Identifiant invalide",
         "data" =>null
            ];
        }
        if($book){
            $form=$this->createForm(BookUpdateType::class,$book);
            $form->submit($request->request->all(),false);
            if($form->isSubmitted() && $form->isValid()){

              $this->bookRepo->add($book,true);
                return $response=[
                    "success" =>true,
                    "code" => Response::HTTP_OK,
                    "message" =>"Les données ont été mise à jour.",
                    "data" =>$book
                ];

            }else{
                $response=[
                    "success" =>false,
                    "code" => Response::HTTP_BAD_REQUEST,
                    "message" =>"Données invalides",
                    "data" =>null
                       ];  
            }
        }

        dd($form->getErrors());
    return ( $this->json($response,$response["code"]));
    }

    /**
     * @Rest\Get("/books", name="books_liste")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"book_register"})
     */
    public function getBooks(){
        
        $books=$this->bookRepo->findAll();
        
        return $response=[
            "success" =>true,
            "code" => Response::HTTP_OK,
            "message" =>"ok",
            "data" =>$books
        ];
    }

    /**
     * @Rest\Get("/books/{id}", name="book_get")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"book_register"})
     */
    public function getBook($id){
        $book=$this->bookRepo->find($id);
        if($book){
            return $response=[
                "success" =>true,
                "code" => Response::HTTP_OK,
                "message" =>"ok",
                "data" =>$book
            ];
        }

        $response=[
            "success" =>false,
            "code" => Response::HTTP_NOT_FOUND,
            "message" =>"Identifiant invalide",
            "data" =>null
               ];
        
               return $this->json($response,$response["code"]);

    }

     /**
     * @Rest\Delete("/books/{id}", name="books_delete")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"book_register"})
     */
    public function deleteBook($id){
        $book=$this->bookRepo->find($id);
        if($book){
            $this->bookRepo->remove($book,true);
            return $response=[
                "success" =>true,
                "code" => Response::HTTP_OK,
                "message" =>"Le livre a bien été supprimé .",
                "data" =>null
            ];
        }

        $response=[
            "success" =>false,
            "code" => Response::HTTP_NOT_FOUND,
            "message" =>"Identifiant invalide",
            "data" =>null
               ];
        
               return $this->json($response,$response["code"]);

    }
}
