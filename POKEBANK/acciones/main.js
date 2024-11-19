var historial = [];
var usuario = JSON.parse(localStorage.getItem("usuario")) || {
    nombre: "Ash Ketchum",
    cuenta: "0987654321",
    saldo: 500.0,
  };
document.getElementById("username").innerText = `${usuario.nombre}`;
document.getElementById("account-number").innerText = `${usuario.cuenta}`;

function deposito() {
    swal("Monto a depositar:", {
        content: "input",
    }).then((value)=>{
        var number = parseInt(value);
        if((typeof Number(value) === 'number') && !isNaN(number)){
            usuario.saldo = parseInt(usuario.saldo) + number;
            localStorage.setItem("usuario", JSON.stringify(usuario));
            var today = new Date();
            const transaction = {
                date: today,
                description: "Depósito",
                category: "Depósito",
                amount: number,
                balance: saldo + number
            }
            historial.push(transaction);
            localStorage.setItem("historial", JSON.stringify(usuario));
            swal(`Depositaste $ ${value}`)
        } else {
            swal(`El valor ingresado no es un número. Intente nuevamente.`)
        }
        
    })
}
function retiro() {
    swal("Monto a retirar:", {
        content: "input",
    }).then((value)=>{
        var number = parseInt(value);
        if((typeof Number(value) === 'number') && !isNaN(value) && number<=usuario.saldo){
            usuario.saldo = parseInt(usuario.saldo) - number;
            localStorage.setItem("usuario", JSON.stringify(usuario));
            swal(`Se han retirado $ ${number}`)
        } else if(number>parseInt(usuario.saldo)) {
            swal(`El monto a retirar excede su saldo actual.`)
        } else {
            swal(`El valor ingresado no es un número. Intente nuevamente.`)
        }
        
    })
}
function consulta() {
    swal(`Su saldo actual es de $${usuario.saldo}`);
}
function pago() {
    swal("Ingrese el NPE del servicio a pagar:", {
        content: "input",
    }).then((value)=>{
        var number = parseInt(value);
        if((typeof Number(value) === 'number') && !isNaN(value)){
            swal(`Ingrese el monto a abonar al servicio:`, {
                content: "input"
            }).then((payment)=>{
                if((typeof Number(value) === 'number') && !isNaN(number) && number<=parseInt(usuario.saldo)) {
                    usuario.saldo = parseInt(usuario.saldo) - number;
                    localStorage.setItem("usuario", JSON.stringify(usuario));
                    swal(`Se han abonado $ ${payment}`)
                } else if (number>parseInt(usuario.saldo)){
                    swal(`El monto a abonar excede su saldo actual.`)
                } else {
                    swal(`El valor ingresado no es un número. Intente nuevamente.`)
                }
                
            })
        } else {
            swal(`El valor ingresado no es un número. Intente nuevamente.`)
        }
        
    })
}
function logOut() {
    swal("Se ha cerrado la sesión.")
}
