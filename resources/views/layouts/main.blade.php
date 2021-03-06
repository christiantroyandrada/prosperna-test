<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script
    src="https://www.paypal.com/sdk/js?client-id=ASqr1LAJQXq7DI7T3JMQvyYaK3EM4mMSM6PZZd7-dQw0VYlOF2Bbg9UJCNA7tnU-1tSlBtLpCQUm0LNN" defer> // Required. Replace YOUR_CLIENT_ID with your sandbox client ID.
    </script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="wrapper">
        <main-app></main-app>
    </div>
</body>
</html>
