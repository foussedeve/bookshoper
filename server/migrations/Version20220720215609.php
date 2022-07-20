<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220720215609 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_9315F04EA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__auth_token AS SELECT id, user_id, value, created_at FROM auth_token');
        $this->addSql('DROP TABLE auth_token');
        $this->addSql('CREATE TABLE auth_token (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, value VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, CONSTRAINT FK_9315F04EA76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO auth_token (id, user_id, value, created_at) SELECT id, user_id, value, created_at FROM __temp__auth_token');
        $this->addSql('DROP TABLE __temp__auth_token');
        $this->addSql('CREATE INDEX IDX_9315F04EA76ED395 ON auth_token (user_id)');
        $this->addSql('DROP INDEX IDX_CBE5A3319DF228D3');
        $this->addSql('CREATE TEMPORARY TABLE __temp__book AS SELECT id, bookshop_id, title, author, cover, pages FROM book');
        $this->addSql('DROP TABLE book');
        $this->addSql('CREATE TABLE book (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, bookshop_id INTEGER DEFAULT NULL, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, cover VARCHAR(255) NOT NULL, pages VARCHAR(255) NOT NULL, summary CLOB DEFAULT NULL, year VARCHAR(255) DEFAULT NULL, CONSTRAINT FK_CBE5A3319DF228D3 FOREIGN KEY (bookshop_id) REFERENCES bookshop (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO book (id, bookshop_id, title, author, cover, pages) SELECT id, bookshop_id, title, author, cover, pages FROM __temp__book');
        $this->addSql('DROP TABLE __temp__book');
        $this->addSql('CREATE INDEX IDX_CBE5A3319DF228D3 ON book (bookshop_id)');
        $this->addSql('DROP INDEX UNIQ_107C2CCEA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__bookshop AS SELECT id, user_id, name FROM bookshop');
        $this->addSql('DROP TABLE bookshop');
        $this->addSql('CREATE TABLE bookshop (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, name VARCHAR(255) DEFAULT NULL, CONSTRAINT FK_107C2CCEA76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO bookshop (id, user_id, name) SELECT id, user_id, name FROM __temp__bookshop');
        $this->addSql('DROP TABLE __temp__bookshop');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_107C2CCEA76ED395 ON bookshop (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_9315F04EA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__auth_token AS SELECT id, user_id, value, created_at FROM auth_token');
        $this->addSql('DROP TABLE auth_token');
        $this->addSql('CREATE TABLE auth_token (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, value VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL)');
        $this->addSql('INSERT INTO auth_token (id, user_id, value, created_at) SELECT id, user_id, value, created_at FROM __temp__auth_token');
        $this->addSql('DROP TABLE __temp__auth_token');
        $this->addSql('CREATE INDEX IDX_9315F04EA76ED395 ON auth_token (user_id)');
        $this->addSql('DROP INDEX IDX_CBE5A3319DF228D3');
        $this->addSql('CREATE TEMPORARY TABLE __temp__book AS SELECT id, bookshop_id, title, author, cover, pages FROM book');
        $this->addSql('DROP TABLE book');
        $this->addSql('CREATE TABLE book (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, bookshop_id INTEGER DEFAULT NULL, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, cover VARCHAR(255) NOT NULL, pages VARCHAR(255) NOT NULL)');
        $this->addSql('INSERT INTO book (id, bookshop_id, title, author, cover, pages) SELECT id, bookshop_id, title, author, cover, pages FROM __temp__book');
        $this->addSql('DROP TABLE __temp__book');
        $this->addSql('CREATE INDEX IDX_CBE5A3319DF228D3 ON book (bookshop_id)');
        $this->addSql('DROP INDEX UNIQ_107C2CCEA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__bookshop AS SELECT id, user_id, name FROM bookshop');
        $this->addSql('DROP TABLE bookshop');
        $this->addSql('CREATE TABLE bookshop (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, name VARCHAR(255) DEFAULT NULL)');
        $this->addSql('INSERT INTO bookshop (id, user_id, name) SELECT id, user_id, name FROM __temp__bookshop');
        $this->addSql('DROP TABLE __temp__bookshop');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_107C2CCEA76ED395 ON bookshop (user_id)');
    }
}
