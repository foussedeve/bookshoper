<?php

namespace App\Entity;

use App\Repository\BookRepository;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Entity(repositoryClass=BookRepository::class)
 */
class Book
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @JMS\Groups({"book_register"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @JMS\Groups({"book_register"})
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     * @JMS\Groups({"book_register"})
     */
    private $author;

    /**
     * @ORM\Column(type="string", length=255)
     * @JMS\Groups({"book_register"})
     */
    private $cover;

    /**
     * @ORM\Column(type="string", length=255)
     * @JMS\Groups({"book_register"})
     */
    private $pages;

    /**
     * @ORM\ManyToOne(targetEntity=Bookshop::class, inversedBy="books", cascade={"persist"})
     */
    private $bookshop;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @JMS\Groups({"book_register"})
     */
    private $summary;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @JMS\Groups({"book_register"})
     */
    private $year;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getCover(): ?string
    {
        return $this->cover;
    }

    public function setCover(string $cover): self
    {
        $this->cover = $cover;

        return $this;
    }

    public function getPages(): ?string
    {
        return $this->pages;
    }

    public function setPages(string $pages): self
    {
        $this->pages = $pages;

        return $this;
    }

    public function getBookshop(): ?Bookshop
    {
        return $this->bookshop;
    }

    public function setBookshop(?Bookshop $bookshop): self
    {
        $this->bookshop = $bookshop;

        return $this;
    }

    public function getSummary(): ?string
    {
        return $this->summary;
    }

    public function setSummary(?string $summary): self
    {
        $this->summary = $summary;

        return $this;
    }

    public function getYear(): ?string
    {
        return $this->year;
    }

    public function setYear(?string $year): self
    {
        $this->year = $year;

        return $this;
    }
}
