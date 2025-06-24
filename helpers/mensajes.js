const { resolve } = require('path');

require('colors');
const mostrarMenu=() => {
    return new Promise(resolve =>{
        console.clear;
        console.log('====================='.green);
        console.log('Seleccione una opcion'.green);
        console.log('====================='.green);
        console.log(`1`.green`.-Crear tarea`);
        console.log(`2`.green`.-Listar tarea`);
        console.log(`3`.green`.-Listar tarea completadas`);
        console.log(`4`.green`.-Listar tarea pendientes`);
        console.log(`5`.green`.-Completar tarea(s)`);
        console.log(`6`.green`.-Borrar tarea`);
        console.log(`0`.green`.-Salir`);
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
            rl.question(`\n Presione ${'ENTER'.green} para continuar`,()=>{
                rl.close;
                resolve();
            });
        });
    
}
module.exports = {
    mostrarMenu,
    pausa
}