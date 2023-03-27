<?php

// This API is available at https://cnb-api.westrem.sk/daily.php

header('Access-Control-Allow-Origin: *');
header('Content-Type: text/plain; charset=UTF-8');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');

$rates = file_get_contents('https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt?' . $_SERVER['QUERY_STRING']);
echo $rates;