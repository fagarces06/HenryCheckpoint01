const { LinkedList } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
// 7️⃣ ***** EJERCICIO 7 ***** - LINKEDLIST.mapHouses() 7️⃣ 
// 
// Agregar al prototype de LinkedList el método mapHouses().
// Vas a implementar un método parecido al map() de array, dónde tendrás que modificar todos los valores
// de la lista actual.
// Recibirás un parámetro que podrá recibir cualquier tipo de dato (pueden ser strings, arrays u objetos).
// EJEMPLOS:
//  Nos envían la siguiente Lista:
//   ("Casa Moderna") ---> ("Casa Moderna") ---> ("Casa Moderna") --->
//
// LinkedList.map("Cabaña Antigua")
//
// La lista de inmuebles pasaría a tener el siguiente valor:
//
// ("Cabaña Antigua") ---> ("Cabaña Antigua") ---> ("Cabaña Antigua") --->
//
// ⚠️ ATENCIÓN ⚠️
// Recordar que debe poder mapearse la lista por cualquier tipo de dato!
// No necesitas retornar una nueva lista, tenes que modificar la actual!
// 
// REQUISITOS:
//  🟢 Modificar los valores de la lista actual por lo que recibas por parámetros
//  🟢 Retornar false si la lista está vacía

LinkedList.prototype.mapHouses = function (value) {
  // Tu código aquí:
  let actualpos=this.head;
  if(!this.head){
  	return false;
  }
  while(actualpos.next){
  	actualpos.value=value;
  	actualpos=actualpos.next;

  	if(actualpos.next===null){
  		actualpos.value=value;
  	}
  }


}
  var list= new LinkedList;

  list.add('Casa Moderna');
  list.add('Casa loca');
  list.add('Casa troya');
  //console.log(list);
  list.mapHouses('casa de otoño')

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
};