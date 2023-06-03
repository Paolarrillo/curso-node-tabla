const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();
console.log('base: yargs', argv.b)

/* // console.log(process.argv)
const [,,arg3='base=5'] = process.argv; //Correr el comentado para ver porque esta en el 3 lugar
const [,base=5] = arg3.split('='); //Divide el base=5 */

// const base =3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err=> console.log(err));