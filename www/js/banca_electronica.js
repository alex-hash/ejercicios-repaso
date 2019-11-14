class Banco {
  constructor(nombre, direccion) {
    this.nombre = nombre
    this.direccion = direccion
    this.clientes = []
  }
}
  
class CuentaBancaria {
  constructor(id) {
    this.balance = 0;
    this.id = id
  }
}
  
class Titular {
  constructor(nombre, genero, monedero) {
    this.nombre = nombre
    this.genero = genero
    this.monedero = monedero
    this.id = Math.floor(Math.random() * 999999999)
  }
  
  abrirCuentaBancaria(banco) {
    
    // 1. Generar un ID para la nueva cuenta bancaria.
    const id = Math.floor(Math.random() * 999999999);

    // 2. Acceder al array "clientes" del banco y almacenar el 
    //    nombre y el ID de la cuenta bancaria del nuevo cliente
    banco.clientes.push({
      nombre_cliente: this.nombre, 
      id_cuenta: id
    });

    // 3. Crear una nueva cuenta bancaria a la que debemos pasar
    //    el nuevo ID.
    return new CuentaBancaria(id);
  }
  
  ingresarDinero(cantidad, cuenta) {
    // 1. Comprobar si en el monedero tenemos la cantidad que
    //    deseamos ingresar. De no ser asÃ­, mostrar un mensaje
    //    que diga que no tenemos suficiente dinero en el 
    //    monedero.
    // 2. Si tenemos suficiente dinero en el monedero, solo
    //    queda restar en el monedero la cantidad que vamos
    //    a ingresar.
    // 3. Acceder a la propiedad "balance" de la cuenta bancaria
    //    y sumar la cantidad a ingresar. Mostrar un mensaje de
    //    que el ingreso ha sido realizado.
    if(cantidad > this.monedero){
      console.log("No tenemos suficiente dinero en el monedero");
    }else{
      this.monedero = this.monedero - cantidad;
      cuenta.balance += cantidad;
      console.log("El ingreso en la cuenta ha sido realizado");
    }
  }
  
  retirarDinero(cantidad, cuenta) {
    // 1. Comprobar si en la propiedad "balance" de nuestra
    //    cuenta tenemos la cantidad que deseamos retirar. 
    //    De no ser asÃ­, mostrar un mensaje que diga que
    //    no tenemos suficiente dinero en la cuenta.
    // 2. Si tenemos suficiente dinero en la cuenta, solo
    //    queda restar en el balance la cantidad que vamos
    //    a retirar.
    // 3. Acceder a la propiedad "monedero" del titular
    //    y sumar la cantidad retirada al monedero. Mostrar 
    //    un mensaje de que el ingreso ha sido realizado.
    if(cantidad > cuenta.balance){
      console.log("No tiene suficiente dinero en la cuenta");
    }else{
      cuenta.balance = cuenta.balance - cantidad;
      this.monedero += cantidad;
      console.log("Se ha retirado el dinero satisfactoriamente");
    }
  }
  
  mostrarSaldo(cuenta) {
    // 1. Acceder a la propiedad "balance" de la cuenta y
    //    mostrar un mensaje que nos indique nuestro saldo
    //    actual.
    console.log(`Actualmente tiene un saldo de ${cuenta.balance}`);
  }
  
}
  
const santander = new Banco("Santander", "Juan Florez 58");
const cliente1 = new Titular("Manuel", "hombre", 20000);
const cliente2 = new Titular("Marta", "mujer", 40000);
const cuentaM = cliente1.abrirCuentaBancaria(santander);
cliente1.ingresarDinero(40000, cuentaM);
cliente1.ingresarDinero(2000, cuentaM);
cliente1.mostrarSaldo(cuentaM);
console.log(cliente1.monedero);
cliente1.retirarDinero(1000,cuentaM);
cliente1.mostrarSaldo(cuentaM);
console.log(cliente1.monedero);
cliente1.retirarDinero(2000,cuentaM);