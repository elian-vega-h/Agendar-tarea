//Este archivo manejara varia tareas
import { Tarea } from "./tarea.js";


class Tareas{

    _listado = {}; // se maneja como objeto


    //transformamos el listado a un arreglo
    // get es como tener una propiedad a nuestra clase

    get listadoArr(){ //creamos el get para retornar un nuevo arreglo
        
        const listado = [];

        // extraemos las llaves de un objecto

        Object.keys(this._listado).forEach(key =>{ // con la key vemos las tareas que tenemos insertadas
            const tarea = this._listado[key]; // Aqui extraemos las tareas que esten instanciadas
            listado.push(tarea); // se añaden al listados

        }); // va a regresar un arreglo de todas las llaves
        
        return listado; // retornamos el arreglo
    }

    constructor(){
        this._listado = {}; //iniciar el listado
    
    
    }

    borrarTarea(id=''){

        if (this._listado[id]){
            delete this._listado[id];
        }

    }

    cargarTareasFromArray(tareas=[]) {

        tareas.forEach(tarea => {

            this._listado[tarea.id] = tarea;

        });
        

    }


    crearTarea( desc= ''){

        const tarea= new Tarea(desc);

        this._listado[tarea.id] = tarea;


    }

    listadoCompleto(){

        this.listadoArr.forEach((tarea, i)=>{

            const idx= `${i + 1}`.blue;
            const {desc, completadoEn}= tarea;
            const estado = (completadoEn)
                                ? 'completada' .blue
                                : 'pendiente'.red;
            console.log(`${idx} ${desc} :: ${estado}`);


             
        });

    }
    listarPedientesCompletadas(completadas = true){

        let contador= 0;
        this.listadoArr.forEach(tarea => {
            const {desc, completadoEn}= tarea;
            const estado = (completadoEn)
                                ? 'completada' .blue
                                : 'pendiente'.red;
            if(completadas){
                if (completadoEn){
                    contador += 1;
                    console.log(`${(contador+'.').blue} ${desc} :: ${completadoEn.blue}`);
                }
            } else{
                if (!completadoEn){
                    contador += 1;
                    console.log(`${contador.toString().blue} ${desc} :: ${estado}`);
                }
            }
            
        });
    }

    togglecompletadas(ids=[]){ // marcas tareas como completadas
        ids.forEach(id=>{
            const tarea= this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn= new Date().toISOString()
            }

        });
        this.listadoArr.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
               this._listado[tarea.id].completadoEn= null;
            }
        })
    }
}

export {Tareas};