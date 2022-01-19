<?php
   $name = $_POST['name']; // получаем аякс-запрос
   
   if (isset($_POST['name']) && preg_match('#^[a-z\d\s*/+.()_-]+$#si', $_POST['name'])) { //Используем регулярное выражение для калькулятора
    echo $_POST['name'] . ' = ' . eval('return ' . $_POST['name'] . ';'); //eval-исполнит код находящийся в строке
} else echo ""; //выводим Errror!! при недопустимых значениях
   