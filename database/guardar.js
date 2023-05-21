import * as fs from 'node:fs';

const archivo= './database/data.json';

const guardarinfo = (data) =>{

    // guarda la info en un archivo txt

    // JSON.stringify convierte un objeto en una opcion valida de string
    fs.writeFileSync(archivo, JSON.stringify(data));


}

const leerinfo=() => {
    
    if(!fs.existsSync(archivo)){
        return null;
    }

    const info= fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data= JSON.parse(info);


    return data;
}

export {guardarinfo};
export {leerinfo};