require('colors');

const mostrarmenu= () =>{

    return new Promise( resolve =>{
        console.clear();
        console.log('======================='.blue);
        console.log(' Seleccione una opcion '.blue);
        console.log('=======================\n'.blue);

        console.log(`${'1.'.blue} Crear tarea`);
        console.log(`${'2.'.blue} Listar tarea`);
        console.log(`${'3.'.blue} Listar tareas completadas`);
        console.log(`${'4.'.blue} Listar tareas pendientes`);
        console.log(`${'5.'.blue} Completar tarea`);
        console.log(`${'6.'.blue} Borrar tarea`);
        console.log(`${'7.'.blue} salir\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout

    });

    readline.question('selecciones una opcion:',(opt)=>{
    
        readline.close();
        resolve(opt);

    })

    });

}


const pausa = () => {
    return new Promise( resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
    
        });
        
        readline.question(`\nPresione ${'ENTER'.blue} para continuar\n`,(opt)=>{
            readline.close();
            resolve();
        
        })

    })
    
}

module.exports={
    mostrarmenu,
    pausa
}
