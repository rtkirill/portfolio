<?php
        $to = 'barziniwork@gmail.com';
        $subject = 'УВЕДОМЛЕНИЕ с Вашего сайта';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Message: '.$_POST['text'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <work@barzini.com>\r\n"; 
        mail($to, $subject, $message, $headers);
?>