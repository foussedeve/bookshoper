<?php

namespace App\Form;

use App\Entity\Book;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class BookUpdateType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title',TextType::class,[
                "constraints" =>[
                    new NotBlank()
                ]
            ])
            ->add('author',TextType::class,[
                "constraints" =>[
                    new NotBlank()
                ]
            ])    
            ->add('pages',TextType::class,[
                "constraints" =>[
                    new NotBlank()
                ]
            ])
            ->add('summary')
            ->add('year')
       
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Book::class,
            "csrf_protection" =>false
        ]);
    }
}
