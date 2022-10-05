
var arrayRow = document.querySelectorAll(".renglon");




// document.querySelector('.input-search').addEventListener("keyup", (e) => {
//     if(e.keyCode){
//         let array = [];
//         let input = document.querySelector('.input-search').value;
//         arrayRow.forEach((row) => {
//             array.push(row.children[0].innerHTML);
//         });
//         //Buscamos todos los elementos que vamos a filtrar
//         console.log(array);
//         //constuimos un nuevo array que contenga todos los nombres filtrados   
//         let nuevo = array.filter((r) => {
//             return r.toLowerCase().indexOf(input.toLowerCase()) > -1;           
//         });
//         //Ya que tengo todos los elementos que coinciden en la busqueda los comparo con la lista original 
//         //para construir el array que voy a imprimir
//         let index = 0;
//         let contenido = '';
//         arrayRow.forEach(row => {
//             if (nuevo[index] === row.children[0].innerHTML) {
//                 contenido += `<tr class="renglon">`;
//                 contenido += row.innerHTML;
//                 index++;
//             }
//         });
//         //Una vez que tengo mi contenido construido solo con los elementos filtrados los agrego al tbody y construyo una nueva tabla
//         console.log("Ultimo array");
//         console.log(contenido);
//         contenido = `
//         <tr class="head">
//             <th>Empresa</th>
//             <th>Marca y modelo</th>
//             <th>No. Serie</th>
//             <th>Fecha de ingreso</th>
//             <th>Observaciones</th>
//             <th>Asignar O.S.</th>
//         </tr>` + contenido;
//         document.querySelector('tbody').innerHTML = contenido;
//     }
// });

document.querySelector('.input-search').addEventListener("keyup", (e) => {
    
    if(e.keyCode){
        let array = [];
        let input = document.querySelector('.input-search').value;
        arrayRow.forEach((row) => {
           
            array.push(row.children[0].innerHTML);
        });
        //Buscamos todos los elementos que vamos a filtrar
        // console.log(array);
        //constuimos un nuevo array que contenga todos los nombres filtrados   
        let nuevo = array.filter((r) => {
            return r.toLowerCase().includes(input.toLowerCase());           
        });
        //Ya que tengo todos los elementos que coinciden en la busqueda los comparo con la lista original 
        //para construir el array que voy a imprimir
        let index = 0;
        let contenido = '';
        console.group('NUevo');
        console.log(nuevo);
        arrayRow.forEach(row => {
            if (nuevo[index] === row.children[0].innerHTML) {
                contenido += `<tr class="renglon">`;
                contenido += row.innerHTML;
                index++;
            }
        });
       
        //Una vez que tengo mi contenido construido solo con los elementos filtrados los agrego al tbody y construyo una nueva tabla
        // console.log("Ultimo array");
        // console.log(contenido);
        contenido = `
        <tr class="head">
            <th>Empresa</th>
            <th>Marca y modelo</th>
            <th>No. Serie</th>
            <th>Fecha de ingreso</th>
            <th>Observaciones</th>
            <th>Asignar O.S.</th>
        </tr>` + contenido;
        document.querySelector('tbody').innerHTML = contenido;
    }
});