<?
if((isset($_POST['name'])&&$_POST['name']!="") &&
   (isset($_POST['email'])&&$_POST['email']!="") &&
   (isset($_POST['text'])&&$_POST['text']!="")){ 
        $to = 'barziniwork@gmail.ru';
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
        $headers .= "From: Отправитель <barziniwork@gmail.ru>\r\n"; 
        mail($to, $subject, $message, $headers);
}
?>