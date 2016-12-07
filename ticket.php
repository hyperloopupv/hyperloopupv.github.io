<?php

// Libreria mPDF para sacar los tickets en PDF. La plantilla se hace con html pasandole valores GET con php (nombre, etc)
require_once __DIR__ . '/vendor/mpdf/mpdf.php';

ob_start();


if(isset($_POST['email']) && isset($_POST['field2'])) {
  $data = $_POST['email'] . '-' . $_POST['field2'] . "\n";
  $ret = file_put_contents('/tmp/emails.txt', $data, FILE_APPEND | LOCK_EX);
else {
   //NOTHING
}
?>

<!doctype html>
<html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ticket Hyperloop</title>

        <style>
            body {
                background: linear-gradient(rgb(0,149,149), rgb(0,73,73));
                font-family: sans-serif;

            }

            .inline {
                display: inline-block;

            }

            .b {
                font-size: 40px;
                line-height: 1;
            }

            .s {
                font-size: 15px;
                line-height: 1;
            }

            .content {
                width: 100%;
                color: #fff;
                margin-bottom: 30px;
            }

            .left {
                float: left;
                text-align: left;
            }

            .right {
                float: right;
                text-align: right;
            }

            .center {
                float: left;
                text-align: center;
            }


            .dos {
                width: 50%;
            }

            .tres {
                width: 33.2%;
            }

            .regular {
                width: 66.6%;
                padding-top: 50px;
            }

            .block {
                display: block;
                background-color: #fff;
                color: rgb(0,149,149);
                width: 100%;
                height: 500px;
                margin-top: 100px;
            }

            .block .inline {
                margin-bottom: 20px;
            }

        </style>

    </head>

    <body>
        <img src="img/logo_blanco.png" height="150px">
        <div class="content inline" style="margin-top: 30px;">
            <div class="b"><?php echo $_POST['name'];?></div><div class="s">Passenger name</div>
        </div>

        <div class="content">
            <div class="inline dos left"><div class="b">HL<?php echo rand(1000, 9999)?></div><div class="s">Reference no.</div></div>
            <div class="inline dos right"><div class="b"><?php echo $_POST['date'];?></div><div class="s">Date</div></div>
        </div>

        <div class="content">
            <div class="inline tres left"><div class="b"><?php echo $_POST['go'];?></div></div>
            <div class="tres center"><img src="img/s.png"></div>
            <div class="inline tres right"><div class="b"><?php echo $_POST['back'];?></div></div></div>
        </div>

        <div class="block">
            <div class="center regular">
                <img src="img/qr.png" height="400px">
            </div>

            <div class="right tres" style="padding-top: 70px;">
                <div class="inline left"><div class="b"><?php echo $_POST['travelTime'];?></div><div>Duration</div></div>
                <div class="inline left"><div class="b"><?php echo $_POST['km'];?></div><div>Distance</div></div>
                <div class="inline left"><div class="b">BUSINESS</div><div>Class</div></div>
            </div>

        </div>

    </body>

</html>

<?php
    $html = ob_get_contents();
    ob_end_clean();
    $mpdf = new mPDF();
    $mpdf->WriteHTML($html);
    $mpdf->Output(); // Forzar descarga
    exit;
?>
