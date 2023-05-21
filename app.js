import colors from 'colors';
import { inquirermenu, mostarListadoChecklist } from './helpers/inquirer.js';
import { pausa } from './helpers/inquirer.js';
import { Tareas } from './models/Tareas.js';
import { leerInput, listadoborrar, confirmar } from './helpers/inquirer.js';
import { guardarinfo, leerinfo } from './database/guardar.js';

const main= async () => {


    let opt= '';
    const tareas = new Tareas();
    const tareasdb= leerinfo();

    if(tareasdb){
        //establecer tareas
        tareas.cargarTareasFromArray(tareasdb);
         
    }
   
   

   do{
    //imprime el menu

    opt = await inquirermenu();//imprime el menu y retorna una opcion


    switch (opt) { // es mejor usar un switch para opciones controladas
        case '1':
            // crear opcion

            const desc = await leerInput('Descripcion:');
            tareas.crearTarea(desc);// crea la tarea y la establece en el listado

            
        break;
            
        case '2':

            tareas.listadoCompleto();

        break;
        case '3': // listar tareas completadas

        tareas.listarPedientesCompletadas(true);

        break;
        case '4': // listar tareas pendientes

        tareas.listarPedientesCompletadas(false);

        break;
        case '5': // completado/pendiente

            const ids= await mostarListadoChecklist(tareas.listadoArr);
            tareas.togglecompletadas(ids);
        break;
        case '6': //borrar

        const id = await listadoborrar(tareas.listadoArr)
        const ok = await confirmar ('¿Estas seguro?');

        if(ok){
            tareas.borrarTarea(id);
            console.log('la tarea a sido borrada correctamente');
        }

        break;
            
        

        
    }

    guardarinfo(tareas.listadoArr);

    await pausa();


    } while(opt !== '7');



}


main();