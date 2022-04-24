<?php


class Pessoa
{

    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }
}

class Usuario extends Pessoa
{
    public $login;
    public function __construct($nome, $idade, $login)
    {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->$login = $login;
    }
}
