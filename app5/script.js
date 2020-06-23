 		//declarar variables
 		var nombre = "Eduardo ";
        var apellido = "Riera ";
        var subtot = 500;
        var descuento = 0;
        const iva = 0.12;
        var nombrescompletos = nombre+" . "+apellido;

        //presentar datos
        //document.write(nombre);
        //document.write(apellido);
        //document.write(nombrescompletos);

        var datos = document.getElementById("contenidos3");
 		var datos2 = document.getElementById("contenidos2");
 		var datos1 = document.getElementById("contenidos1");
        datos.innerHTML=`
        <h2>Nombre del cliente: ${nombre} ${apellido} </h2>
        `;

        if (subtot>= 200) {
        	datos.innerHTML += "Su monto es mayor a 200 dolares";
        	descuento = 0.10;
        }else{
        	datos.innerHTML += "Su monto es menor a 199 dolares";
        	descuento = 0.05;
        }

        for (let i = 0; i<10; i++) {
        	datos2.innerHTML += i+"<br>Debes Poner Atención</br>";
        }

        function calculoiva(subtot){
        	var caliva = subtot*iva;
        	return caliva;
        }

        function imprimir(){
        	var resIva = calculoiva(subtot);
        	var total = subtot+resIva;
        	datos.innerHTML= "<br>Su IVA a pagar es " +resIva;
        	datos.innerHTML= "<br>Su total a pagar es " +total;
        }

        imprimir();

        //recorrer con array
        var productos = ['arroz','azucar','atun','arina','sal'];
        datos1.innerHTML += "<h3>Detalle Productos</h3>";
        for (let i = 0; i < productos.length; i++) {
        	datos1.innerHTML += "<ul><li>"+productos[i]+"</li></ul>";
        }

        //otra forma de recorrer
        datos.innerHTML += "<h3>Detalle Productos 2</h3>";
        productos.forEach ((producto)=>{
        	document.write(producto+"<br>");
        });

        //alert("Bienvenido: "+nombrescompletos);
         console.log(nombrescompletos);