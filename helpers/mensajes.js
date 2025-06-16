const { resolve } = require('path');

require('colors');
const mostrarMenu=() => {
    return new Promise(resolve =>{
        console.clear;
        console.log('====================='.green);
        console.log('Seleccione una opcion'.green);
        console.log('====================='.green);
        console.log(`1.-Crear tarea`);
        console.log(`2.-Listar tarea`);
        console.log(`3.-Listar tarea completadas`);
        console.log(`4.-Listar tarea pendientes`);
        console.log(`5.-Completar tarea(s)`);
        console.log(`6.-Borrar tarea`);
        console.log(`0.-Salir`);
        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(`Seleccione una opcion:  `,(opt)=>{
            rl.close;
            resolve(opt);
        });

        });
    
}
const pausa=()  =>{
    console.log('PAUSA')
        return new Promise(resolve =>{
            const rl = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question(`\nPresione ${'ENTER'.green} para continuar`,()=>{
                rl.close;
                resolve();
            });
        });
    
}
module.exports = {
    mostrarMenu,
    pausa
}