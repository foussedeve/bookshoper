<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220720122552 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE book (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, cover VARCHAR(255) NOT NULL, pages VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE bookshop (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, name VARCHAR(255) DEFAULT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_107C2CCEA76ED395 ON bookshop (user_id)');
        $this->addSql('DROP INDEX IDX_9315F04EA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__auth_token AS SELECT id, user_id, value, created_at FROM auth_token');
        $this->addSql('DROP TABLE auth_token');
        $this->addSql('CREATE TABLE auth_token (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, value VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, CONSTRAINT FK_9315F04EA76ED395 FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO auth_token (id, user_id, value, created_at) SELECT id, user_id, value, created_at FROM __temp__auth_token');
        $this->addSql('DROP TABLE __temp__auth_token');
        $this->addSql('CREATE INDEX IDX_9315F04EA76ED395 ON auth_token (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE book');
        $this->addSql('DROP TABLE bookshop');
        $this->addSql('DROP INDEX IDX_9315F04EA76ED395');
        $this->addSql('CREATE TEMPORARY TABLE __temp__auth_token AS SELECT id, user_id, value, created_at FROM auth_token');
        $this->addSql('DROP TABLE auth_token');
        $this->addSql('CREATE TABLE auth_token (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, value VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL)');
        $this->addSql('INSERT INTO auth_token (id, user_id, value, created_at) SELECT id, user_id, value, created_at FROM __temp__auth_token');
        $this->addSql('DROP TABLE __temp__auth_token');
        $this->addSql('CREATE INDEX IDX_9315F04EA76ED395 ON auth_token (user_id)');
    }
}
