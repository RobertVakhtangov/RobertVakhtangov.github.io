<?php
class DbConnect
{
    //mysql://bebca0089e24fb:3f5e593c@eu-cdbr-west-03.cleardb.net/heroku_657348e4a7a9156?reconnect=true
    private $server = 'localhost';
    private $dbname = 'scandiweb';
    private $user = 'root';
    private $pass = '';

    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' . $this->server . ';dbname=' . $this->dbname, $this->user, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}
