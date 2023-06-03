const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base=5, listar = false, limite=10) => {
    try {
        
        let salida, consola = '';
        
        for (let i = 1; i <= limite; i++) {
            salida += (`${base} x ${i} = ${base *i}\n`);
            consola += (`${base} ${'x'.blue} ${i} ${'='.blue} ${base *i}\n`);
        }
        
        if (listar) {
            console.log('==============='.blue)
            console.log(' Tabla del'.cyan, colors.cyan(base) )
            console.log('==============='.blue)

            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return`tabla-${base}.txt creado`

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}