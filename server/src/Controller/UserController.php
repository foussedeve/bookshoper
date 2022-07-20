<?php

namespace App\Controller;

use App\Entity\Bookshop;
use App\Entity\User;
use App\Form\UserRegisterType;
use App\Form\UserUpdateType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api")
 */
class UserController extends AbstractController
{
    /**
     * @Rest\Post("/users", name="user_post")
     * @Rest\View(statusCode=Response::HTTP_CREATED,serializerGroups={"user_register"})
     */
    public function postUsers(Request $request, UserRepository $userRepo, UserPasswordHasherInterface $passworddHasher)
    {
        $user = new User();

        $form = $this->createForm(UserRegisterType::class, $user);
        $form->submit($request->request->all());
        if ($form->isSubmitted() && $form->isValid()) {
            $bookshop = new Bookshop();
            $user->setPassword($passworddHasher->hashPassword($user, $user->getPassword()));
            $user->setRoles(["ROLE_ADMIN"]);
            $user->setBookshop($bookshop);
            $userRepo->add($user, true);
            return $response = [
                "success" => true,
                "code" =>Response::HTTP_CREATED,
                "message" => "Incription réussie",
                "data" => $user,
            ];
          
        } else {
            
            $response = [
                "success" => false,
                "code" => Response::HTTP_BAD_REQUEST,
                "message" => "Données invalides ou email déjà utilisé par un autre.",
                "data" => null,
            ];
        }
        return $this->json($response,$response["code"]);
    }


    /**
     * @Rest\Put("/users/{id}", name="user_put")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"user_register"})
     */
    public function putUsers(Request $request, UserRepository $userRepo,$id )
    {
        $user = $userRepo->find($id);
        if(!$user){
            $response = [
                "success" => false,
                "code" => Response::HTTP_NOT_FOUND,
                "message" => "Identifiant utilisateur invalide",
                "data" => null,
            ];         
        }

        if($user){
            $form = $this->createForm(UserUpdateType::class, $user);
            $form->submit($request->request->all(),false);
            if ($form->isSubmitted() && $form->isValid()) {
                       
                $userRepo->add($user, true);
                return $response = [
                    "success" => true,
                    "code" => Response::HTTP_OK,
                    "message" => "Les données ont été mise à jour.",
                    "data" => $user,
                ];
           
            } else {
                $response = [
                    "success" => false,
                    "code" => Response::HTTP_BAD_REQUEST,
                    "message" => "Données invalides",
                    "data" => null,
                ];
            }


        }
       
      
        return $this->json($response, $response["code"]);
    }


    /**
     * @Rest\Get("/users",name="users_list")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"user_get"})
     */
    public function getUsers(UserRepository $userRepo)
    {
        $users = $userRepo->findAll();
     
        return $response= [
            "success" => true,
            "code" => Response::HTTP_OK,
            "message" => "ok",
            "data" => $users
        ];
       
    }
    /**
     * @Rest\Get("/users/{id}", name="user_one")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"user_get"})
     */
    public function getOneUser($id, UserRepository $userRepo)
    {
        $user = $userRepo->find($id);
        if ($user) {
           return $response=[
                "success" => true,
                "code" => Response::HTTP_OK,
                "message" => "ok",
                "data" => $user
            ];
        }
        $response = [
            "success" => false,
            "code" => Response::HTTP_NOT_FOUND,
            "message" => "ok",
            "data" => null
        ];
        return $this->json($response,$response["code"] );
    }

        /**
     * @Rest\Delete("/users/{id}", name="user_delete")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"user"})
     */
    public function deleteUser($id, UserRepository $userRepo)
    {
        $user = $userRepo->find($id);
    
        if ($user) {
            //$userRepo->remove($user,true);
            return $response=[
                "success" => true,
                "code" => Response::HTTP_OK,
                "message" => "Suppression réussie",
                "data" => null
            ];
        }
            $response = [
                "success" => false,
                'code' => Response::HTTP_NOT_FOUND,
                "message" => "Identifiant invalide",
                "data" => null
            ];
        
        
        return $this->json($response,$response["code"]);
    }

}
