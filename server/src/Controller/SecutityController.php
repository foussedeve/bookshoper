<?php

namespace App\Controller;

use App\Entity\AuthToken;
use App\Entity\User;
use App\Repository\AuthTokenRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\Controller\Annotations as Rest;

/**
 * @Route("/api")
 */
class SecutityController extends AbstractController
{

    /**
     * @Rest\Post("/login",name="login")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"token"})
     */

    public function login(AuthTokenRepository $authTokenRepo)
    {

        /**
         * @var User
         */
        $user = $this->getUser();
        $authToken = $user->getAuthTokens()[0];
        //Remove older authToken
        if ($authToken) {
            $user->removeAuthToken($authToken);
            $authTokenRepo->remove($authToken,true);

        }
        //Create new token
        $authToken = new AuthToken();
        $authToken->setValue(base64_encode(random_bytes(50)))
            ->setCreatedAt(new \DateTime())
            ->setUser($user);
        $user->addAuthToken($authToken);
        $authTokenRepo->add($authToken, true);
        return $response = [
            "success" => true,
            "code" => Response::HTTP_OK,
            "message" => "vous avez été authenfifieé avec succès",
            "authToken" => $authToken,

        ];
       
    }


    /**
     * @Rest\Post("/logout", name="api_logout")
     * @Rest\View(statusCode=Response::HTTP_OK,serializerGroups={"user"})
     */
    public function logout()
    {
    }
}
