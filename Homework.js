/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
    // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
    // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
    // Además, agregar una propiedad con el nombre "meow".
    // La propiedad "meow" será una función que retorne el string: "Meow!".
    // Retornar el objeto.
    // Tu código:
   var objeto = {nombre: nombre, edad: edad, meow: function() {
      return "Meow!";
   }
   }
   return objeto;
 }
 
 function nuevoUsuario(nombre, email, password) {
    // Debes crear un nuevo objeto.
    // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
    // Retornar el objeto.
    // Tu código:
    var objeto = {nombre: nombre, email: email, password: password};
    return objeto;
 }
 
 function agregarPropiedad(objeto, propiedad) {
    // Recibirás un objeto por parámetro.
    // Debes agregarle una propiedad con el nombre recibido por parámetro.
    // Esta propiedad será igual al valor `null`.
    // Retornar el objeto.
    // Tu código:
    objeto[propiedad] = null;
    return objeto;
 }
 
 function invocarMetodo(objeto, metodo) {
    // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
    // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
    // [NOTA]: no necesitar retornar nada.
    // Tu código:
    objeto [metodo] ();
 }
 
 function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
    // Debes multiplicar este número por 5 y retornar el resultado.
    // Tu código:
    //objetoMisterioso = {numeroMisterioso : num * 5}
     res = objetoMisterioso.numeroMisterioso * 5
    return res;
 }
 
 function eliminarPropiedad(objeto, propiedad) {
    // El parámetro "propiedad" es una propiedad del objeto que recibes.
    // Debes eliminarla del objeto y retornarlo finalmente.
    // Tu código:
    delete objeto[propiedad];
    return objeto;
 }
 
 function tieneEmail(objetoUsuario) {
    // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
    var tieneProp = objetoUsuario.hasOwnProperty('email');
    if(objetoUsuario['email'] === null){
      return false;
    } else if(tieneProp === false){
      return false;
    } else return true;
 }
 
 function tienePropiedad(objeto, propiedad) {
    // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
    var tieneProp = objeto.hasOwnProperty(propiedad)
    return tieneProp;
 }
 
 function verificarPassword(objetoUsuario, password) {
    // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
    if(objetoUsuario.password === password){
      return true;
    } else return false;
 }
 
 function actualizarPassword(objetoUsuario, nuevaPassword) {
    // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
    // La nueva contraseña la recibes por parámetro.
    // Retornar el objeto.
    // Tu código:
    objetoUsuario.password = nuevaPassword;
    return objetoUsuario;
 }
 
 function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}
 
 function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios). Ejemplo : "objetoMuchosUsuarios = [{esPremium:true},{esPremium:true},{esPremium:true}]"
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como true.
    // Retornar el arreglo.
    // Tu código:
    for( let i = 0; i < objetoMuchosUsuarios.length; i++){
      objetoMuchosUsuarios[i].esPremium = true;
    }
    return objetoMuchosUsuarios;
 }
 
 function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo. Ej: "objetoUsuario = {posts : [post = {likes:1}, post = {likes:2}] }"
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
    //let res = 0;
    arreglo = [];
    for( let i = 0; i < objetoUsuario.posts.length; i++){
      arreglo.push(objetoUsuario.posts[i].likes)
    }
    res = 0;
    for( let i = 0; i < arreglo.length; i++){
      res = res + arreglo[i]
    }
    return res;
 }
 
 function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento". Ej: objetoProducto = {calcularPrecioDescuento: function(precio,porcentajeDeDescuento), precio: 20, porcentajeDeDescuento: 0,5}
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.                                   RTA = 10
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto['calcularPrecioDescuento'] = function(){
     return objetoProducto.precio - (objetoProducto.precio * objetoProducto.porcentajeDeDescuento)
   }
   return objetoProducto;
}
 
 /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
 module.exports = {
    crearGato,
    nuevoUsuario,
    agregarPropiedad,
    invocarMetodo,
    multiplicarNumeroDesconocidoPorCinco,
    eliminarPropiedad,
    tieneEmail,
    tienePropiedad,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    agregarMetodoCalculoDescuento,
 };
 
 console.log(crearGato('Snowball',1).nombre);
 console.log(crearGato('Snowball',1).edad);
 console.log(crearGato('Snowball',1).meow());
 console.log();
 console.log(nuevoUsuario('Santino', 'schielsantino@mamamia.ar', 'mermeladadedurazno2010'));
 console.log();
 console.log(agregarPropiedad({casa:"Casa",galpon:"Galpon"},'Patio'));
 console.log();
 console.log(invocarMetodo({hola: 'Hola', a: function a() {console.log('a')}},'a'));
 console.log();
 console.log(multiplicarNumeroDesconocidoPorCinco({numeroMisterioso:3}));
 console.log();
 console.log(eliminarPropiedad({a:1,b:2},'b'));
 console.log();
 console.log(tieneEmail({email:'null',nombre:'sosm'}));
 console.log();
 console.log(tienePropiedad({pr1:1,pr2:2},'pr'));
 console.log();
 console.log(verificarPassword({password:'hola'},'hola'));
 console.log();
 console.log(actualizarPassword({password:'hola'},'chau'));
 console.log();
 console.log(agregarAmigo({nombre:'albert', amigos:['pepe','juanito']},'pedrito'));
 console.log();
 console.log(pasarUsuarioAPremium([{},{},{}]));
 console.log();
 console.log(sumarLikesDeUsuario({posts : [{likes:1}, {likes:2}, {likes:3}] }));
 console.log();
 console.log(agregarMetodoCalculoDescuento({calcularPrecioDescuento(){},precio: 10, porcentajeDeDescuento : 0.2}));