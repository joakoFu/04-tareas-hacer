const inquirer = require('inquirer');
require('colors');
const menuOpts = [{
    type:'list',
    name: 'opcion',
    message:'Que deseas hacer?',
    choices:[
            {
                value:'1',
                name:'1.-Crear una tarea'
            },
            {
                value:'2',
                name:'2.-Listar tarea'
            },
            {
                value:'3',
                name:'3.-Listar tarea completadas'
            },
            {
                value:'4',
                name:'4.-Listar tarea pendientes'
            },
            {
                value:'5',
                name:'5.-Completar tarea(s)'
            },
            {
                value:'6',
                name:'6.-Borrar tarea'
            },
            {
                value:'0',
                name:'0.-Salir'
            },
        ]
}];
const inquirerMenu =  async()=>{
    console.clear();
    console.log('====================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('====================='.green);
    const opt = await inquirer.prompt(menuOpts);
    return opt;
}
const pausa=async()  =>{
    console.log('PAUSA')
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];
    await inquirer.prompt(question);
    
}

module.exports={
    inquirerMenu,
    pausa
}