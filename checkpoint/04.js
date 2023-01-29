// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
//
// 4️⃣ ***** EJERCICIO 4 ***** - construccionCasas() 4️⃣
// En este ejercicio debemos implementar la función construccionCasas() la cual nos va a determinar
// cuantas casas se pueden construir segun la cantidad de bolsas de cemento que dispongamos.
// La función recibira por parametro la cantidad de bolsas de cemento que dispongamos y dentro de la misma debe retornar otra funcion pasandole por parametros la cantidad de casas que querramos construir.
//
// INFO:
// 10 bolsas de cemento equivalen a 1 casa
// -Si la cantidad de casas que recibo es 0 o menor debe retornar "Por favor ingresar cuantas casas quieres construir"
// -Si la cantidad de bolsas de cemento no equivalen a 1 casa debe retornar "No se puede construir casas con esa cantidad de bolsas"
// -Si la cantidad de casas sobrepasa la cantidad de bolsas de cemento necesarias para construir esas casas... ej: bolsas de cemento = 10 y casas = 2 debe retornar `Solo puedes construir esta cantidad de casas: 1`
// -Si la cantidad de casas es igual a la cantidad de bolsas de cemento necesarias para construir esas casas debe retornar true
//
// EJEMPLOS:
// let casas = construccionCasas(100)
// casas(10) => 10 me devolveriae
//
// let casas = construccionCasas(0)
//casas(10) => 'No se puede construir casas con esa cantidad de bolsas'
//
// REQUISITOS:
//  🟢

function construccionCasas(bags) {
	var numbags=bags;
	let capacity= Math.floor(numbags/10);
	if(numbags<10) return 'No se puede construir casas con esa cantidad de bolsas';
	return construcciones();
	function construcciones(houses) {
	let capacity= Math.floor(numbags/10);
	if(houses<=0) return 'Por favor ingresar cuantas casas quieres construir';
		
	if (houses>capacity) return "Solo puedes construir esta cantidad de casas:"+capacity;
	if(houses===capacity) return true;

  // Tu código aquí:
	}

  // Tu código aquí:
	
}




var repsuesta=construccionCasas(-10);
console.log(repsuesta);
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  construccionCasas,

};
