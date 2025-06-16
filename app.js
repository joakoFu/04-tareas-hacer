require('colors');

//const {mostrarMenu, pausa} = require('./helpers/mensajes')
const { inquirerMenu,pausa,leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
console.clear();

const main = async()=>{
    let opt ='0';
    const tareas = new Tareas();
    do{
        opt = await inquirerMenu();
        console.log('la opcion dada es :_'+ opt);
        switch (opt){
            case '1':
                console.log('\n case1'+opt);
                const desc = await leerInput(`Descripcion: `)
                tareas.crearTarea(desc);
                console.log(`${desc}`);
            break;
            case '2':
                console.log('\n'+opt);
                console.log(tareas)
            break;

            case '3':
                console.log('\n'+opt);
            break;
            case '4':
                console.log('\n'+opt);
            break;
            case '5':
                console.log('\n'+opt);
            break;
            case '6':
                console.log('\n'+opt);
            break;
            case '0':
                console.log('\n'+opt);
            break;
        }
        //tareas._listado[tarea.id] = tarea;
        await pausa();
    }while(opt !== '0')
    console.log('sali del while');
}
main();