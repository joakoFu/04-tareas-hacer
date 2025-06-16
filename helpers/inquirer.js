const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');
const menuOpts = [{
    type:'list',
    name: 'opt',
    message:'Que deseas hacer?',
    choices:[
            {
                value:'1' ,
                name:'1.-Crear una tareaa'
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
const inquirerMenu =  async() =>{
    console.clear();
    console.log('====================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('====================='.green);
    const { opt } = await inquirer.prompt(menuOpts);
    return opt;
}
const pausa = async()  =>{
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

const leerInput = async(message) =>{
    const question= [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length ===0){
                    return `Por favor ingrese valor`;
                }
                return true;
            }
        }
    ];
    const {desc} = await  inquirer.prompt(question);
    return desc;
};

module.exports={
    inquirerMenu,
    pausa,
    leerInput
}