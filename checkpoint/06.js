//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false




var numprimo=esprimo(8);
console.log("numero primo",numprimo);


		function esprimo(num){
		// Tu código aquí:
					if (num == 0 || num == 1 || num == 4) return false;
					for (let x = 2; x < num / 2; x++) {
						if (num % x == 0) return false;
					}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
					return true;

		}


function sortPrimeHouses(array) {


  // Tu código:
 let ninteractions=0;
  for(let i=0;i<array.length;i++){
  	let varprimo=esprimo(array[i]);
  	console.log('valor del primo:',varprimo);
  	if(varprimo===false) return false;
    if(i+1){
      if(array[i]>array[i+1]){
        let menor=array[i+1];
        array.splice(i+1,1);
        array.splice(i,0,menor);
        ninteractions++;
      } 
    }
  }
  if(ninteractions===0){
    return array;
  }else{
    return sortPrimeHouses(array);
  }
}

var var1=sortPrimeHouses([61, 7, 13, 11, 29, 3]);
console.log(var1);
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};