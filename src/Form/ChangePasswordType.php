<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Validator\Constraints\Length;

class ChangePasswordType extends AbstractType
{
    public function buildForm(
    FormBuilderInterface $builder,
        array $options
    ): void {
        $builder
            ->add('username', TextType::class, [
                'disabled' => true,
                'label' => "Votre pseudo"
            ])
            ->add('email', EmailType::class, [
                'disabled' => true,
                'label' => "Votre e-mail"
            ])
            ->add( 'old_password', PasswordType::class, [
                'label' => 'Mot de passe actuel',
                'mapped' => false,
                'attr' => [
                    'placeholder' => "123456789"
                ]
            ] )
            ->add('new_password', RepeatedType::class, [
                'type' => PasswordType::class,
                'mapped' => false,
                'invalid_message' => 'La confirmation doit être identique au mot de passe !',
                'required' => true,
                'constraints' => new Length([
                    'min' => 8,
                ]),
                'first_options' => [
                    'label' => 'Votre nouveau mot de passe',
                    'attr' => [
                        'placeholder' => '123456789',
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmez votre nouveau mot de passe',
                    'attr' => [
                        'placeholder' => '123456789',
                    ],
                ],
            ])
            ->add('submit', SubmitType::class, [
                'label' => "Modifier mon mot de passe"
            ]);
        }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
