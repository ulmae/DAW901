const username = "Ulma";
const accountNumber = "0156620";
const saldo = 200;
document.getElementById("username").innerText = `${username}`;
document.getElementById("account-number").innerText = `${accountNumber}`;

function deposito() {
    //TODO: Validacion de montos maximos/minimos
    swal("Monto a depositar:", {
        content: "input",
    }).then((value)=>{
        if((typeof Number(value) === 'number') && !isNaN(value)){
            swal(`Depositaste $ ${value}`)
        } else {
            swal(`El valor ingresado no es un número. Intente nuevamente.`)
        }
        
    })
}
function retiro() {
    //TODO: Validacion de montos maximos/minimos
    swal("Monto a retirar:", {
        content: "input",
    }).then((value)=>{
        if((typeof Number(value) === 'number') && !isNaN(value)){
            swal(`Se han retirado $ ${value}`)
        } else {
            swal(`El valor ingresado no es un número. Intente nuevamente.`)
        }
        
    })
}
function consulta() {
    swal(`Su saldo actual es de $${saldo}`);
}
function pago() {
    swal("Ingrese el NPE del servicio a pagar:", {
        content: "input",
    }).then((value)=>{
        if((typeof Number(value) === 'number') && !isNaN(value)){
            swal(`Ingrese el monto a abonar al servicio:`, {
                content: "input"
            }).then((payment)=>{
                if((typeof Number(value) === 'number') && !isNaN(value)) {
                    swal(`Se han abonado $ ${payment}`)
                } else {
                    swal(`El valor ingresado no es un número. Intente nuevamente.`)
                }
                
            })
        } else {
            swal(`El valor ingresado no es un número. Intente nuevamente.`)
        }
        
    })
}
