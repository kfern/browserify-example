#Browserify-Example

Código de ejemplo para probar Browserify y el uso de módulos Node.js en el Frontend de una aplicación web

##Si no se ha usado antes gulp instalarlo de forma global:
npm install -g gulp

##Clonar el repositorio y generar el archivo bundle.js:
git clone https://github.com/kfern/browserify-example.git
cd ./browserify-example
npm install
gulp

##Ver el resultado: 
Abrir en un navegador la url http://localhost:3000

##Notas:
- Si se realiza algún cambio en los fuentes gulp genera de forma automática el archivo bundle.js. Para ver los cambios hay que actualizar el navegador manualmente.