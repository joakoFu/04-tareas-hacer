const fs = require('fs');
const archivo = './database/data.json';

const guardarDB=(data) =>{
    fs.writeFileSync(archivo,JSON.stringify(data));
}

const leerDB=() =>{
    if(!fs.existsSync(archivo)){
        console.log('No Existe archivo');
        return null;
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    console.log("Contenido del archivo:");
    console.log(info);
    const data = JSON.parse(info);
    console.log(data);
    return data;
}

module.exports ={
    guardarDB,
    leerDB
}