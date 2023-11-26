const Modelo = {

    async crearJson() {
        const datos_insertar = {
            usuario: {"nombre": "Jean", "tipo": "Prueba2", "cantidad": "2", "descripcion": "Probando OTro json"}
        }

        const res = await axios({
            method: "POST",
            url: 'https://api.jsonstorage.net/v1/json?apiKey=4ea2dabb-59bd-4367-aa15-b5d2b2a9e77e',
            data: datos_insertar
        });
        return res;
    },

    async editarJson(json_actualizado) {
        const res = await axios({
            method: "PUT",
            url: 'https://api.jsonbin.io/v3/b/6562bb730574da7622cc12b2/',
            headers: {
                "Content-Type": "application/json",
                'X-Master-Key': '$2a$10$fnfuZwK5a0X014QinPL8JuKwfLT0ElYNliZVQU12A5sZPFa4HFeKm'
            },
            data: json_actualizado
        });
        return res;
    },

    async leerJson() {

            const res = await axios({
                method: "GET",
                url: 'https://api.jsonbin.io/v3/b/6562bb730574da7622cc12b2/',
                headers: {
                    'X-Master-Key': '$2a$10$fnfuZwK5a0X014QinPL8JuKwfLT0ElYNliZVQU12A5sZPFa4HFeKm'
                }
            });
            return res;
    }

}

const Controlador = {

    async crearJson(){
        const res = await Modelo.crearJson()
        console.log(res)
    },

    async editarJson() {
        const agregar_json = {
            "nombre": "MOMO", 
            "grupo": "kpop", 
        }
    
        const res1 = await Modelo.leerJson();
 
        res1.data['record'].push(agregar_json);

        const res2 = await Modelo.editarJson(res1.data['record'])

        console.log(res2)
    
    },

    async leerJson(){
        const res = await Modelo.leerJson()
        console.log(res.data['record'])
    }

}

//Controlador.crearJson()
//Controlador.leerJson()
Controlador.editarJson()
