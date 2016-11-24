<?php

// Libreria mPDF para sacar los tickets en PDF. La plantilla se hace con html pasandole valores GET con php (nombre, etc)

require_once __DIR__ . '/vendor/mpdf/mpdf.php';

ob_start();
?>

    <!doctype html>
    <html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ticket ###</title>

        <style>

        </style>

    </head>

    <body>

    </body>

    </html>

<?php
    $html = ob_get_contents();
    ob_end_clean();
    $mpdf = new mPDF();
    $mpdf->WriteHTML($html);
    $mpdf->Output("Ticket.pdf", 'D'); // Forzar descarga
    exit;
?>