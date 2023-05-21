//Este archivo solo maneja 1 tarea
import {v4 as uudiv4} from 'uuid';


class Tarea{
    id= '';
    desc= ' ';
    completadoEn= null;

    constructor(desc){
        this.id= uudiv4(); // el identificador unico generara algo de manera aseincrona
        this.desc= desc;
        
    }

}

export {Tarea};