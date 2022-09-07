<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Jeux;

class GameController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/nos-jeux', name: 'games')]

    public function index(): Response
    {
        $games = $this->entityManager->getRepository(Jeux::class)->findAll();

        return $this->render('game/index.html.twig', [
            'games' => $games,
        ]);
    }

    #[Route('/nos-jeux/{slug}', name: 'game')]
    public function show($slug): Response
    {
        $game = $this->entityManager
            ->getRepository(Jeux::class)
            ->findOneBySlug($slug);

        if (!$game) {
            return $this->redirectToRoute('games');
        }

        return $this->render('game/show.html.twig', [
            'game' => $game,
        ]);
    }
}

?>
