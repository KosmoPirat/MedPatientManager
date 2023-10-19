<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Клинические исследования</title>
    </head>
    <body class="antialiased">
        <div id="root" class="is-flex is-flex-direction-column is-justify-content-space-between"></div>
    </body>
    <script src={{ asset('js/app.js') }}></script>
</html>
