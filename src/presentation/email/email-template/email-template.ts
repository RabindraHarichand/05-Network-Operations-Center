export const htmlBody: string = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Bonito</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            margin: 20px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
        }
        .header {
            background-color: #009688;
            color: #ffffff;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            padding: 20px;
            color: #333333;
        }
        .footer {
            text-align: center;
            padding: 10px;
            color: #777777;
        }
        a {
            color: #009688;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Bienvenido a nuestra Comunidad</h1>
        </div>
        <div class="content">
            <p>¡Hola!</p>
            <p>Gracias por unirte a nosotros. Estamos muy emocionados de tenerte como parte de nuestra comunidad.</p>
            <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en <a href="mailto:soporte@nuestra-comunidad.com">contactarnos</a>.</p>
            <p>¡Esperamos verte pronto!</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Nuestra Comunidad. Todos los derechos reservados.</p>
        </div>
    </div>
</body>
</html>
`;
