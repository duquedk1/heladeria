let opcion=0
let vHelados=[]
do{
    option = showMenu()
    switch (option){
        case 1:
            crearHelado()
            console.log(vHelados)
            break
        case 2:
            modificarHelado()
            break
        case 3:
            eliminarHelado()
            break
        case 4:
            mostrarInventario()
            break
        case 5:
            realizarVenta()
            break
        case 6:
        let respuesta=window.confirm(`Esta seguro que desea cerrar sesion`)
        if(respuesta){
            option=6
        }else{
            showMenu()
        }
        break
    }

}while(option!==6)



function showMenu(){
    const mensaje = 
    `Por favor seleccione el numero de accion que desea realizar:
    1. Agregar nuevo sabor de helado.
    2. Modificar un helado.
    3. Eliminar un helado.
    4. Mostrar inventario.
    5. Realizar venta.
    6. Salir del sistema `
    return Number(prompt(mensaje))
}

function crearHelado(){
    const nombre=prompt(`Ingresa el nombre del nuevo helado`)
    const sabor=prompt(`Ingresa el sabor del nuevo helado`)
    const cantidad=Number(prompt(`Ingresa la cantidad de helado`))
    const precio=Number(prompt(`Ìngresa el valor unitario del helado`))
    nuevoHelado= new helado(nombre,sabor,cantidad,precio)
    add()
    console.log(vHelados)
}

function helado(nombre,sabor,cantidad,precio){
    this.nombre=nombre
    this.sabor=sabor
    this.cantidad=cantidad
    this.precio=precio
}
function add(){
    vHelados.push(nuevoHelado)
}

function modificarHelado(){
    let mensaje= "Digite el numero del helado de desea modificar: \n\n"
    for(let i=0; i<vHelados.length;i++){
        mensaje +=`${i}: ${vHelados[i].nombre} \n`
    }
    const index=prompt(mensaje)
    const helado=vHelados[index]
    const nombre=prompt(`nombre: ${helado.nombre}`, helado.nombre)
    const sabor=prompt(`sabor: ${helado.sabor}`, helado.sabor)
    const cantidad=Number(prompt(`cantidad: ${helado.cantidad}`,helado.cantidad))
    const precio=Number(prompt(`precio: ${helado.precio}`,helado.precio))
    vHelados[index]={
        nombre,
        sabor,
        cantidad,
        precio
    }
}

function eliminarHelado(){
    let mensaje= "Digite el numero del helado de desea eliminar: \n\n"
    for(let i=0; i<vHelados.length;i++){
        mensaje +=`${i}: ${vHelados[i].nombre} \n`
    }
    const index=prompt(mensaje)
    vHelados.splice(index,1)
}

function mostrarInventario(){
    let mensaje= "Inventario de helados: \n\n"
    for(let i=0; i<vHelados.length;i++){
        mensaje +=`${i}: Sabor: ${vHelados[i].sabor}, Cantidad: ${vHelados[i].cantidad}, Valor: ${vHelados[i].precio} \n`
    }
    alert(mensaje)
}
function realizarVenta(){
    let mensaje= "Seleccione el helado que desea vender: \n\n"
    for(let i=0; i<vHelados.length;i++){
        mensaje +=`${i}: Sabor: ${vHelados[i].sabor}, Cantidad: ${vHelados[i].cantidad}, Valor: ${vHelados[i].precio} \n`

    }
    const index=prompt(mensaje)
    const venta=Number(prompt(`Ingrese la cantidad de helado que desea comprar, tiene ${vHelados[index].cantidad} en inventario`))
    if(venta>vHelados[index].cantidad){
        alert(`Solo tienes ${vHelados[index].cantidad} de helado de ${vHelados[index].sabor}`)
    }else{
    let costo=venta*vHelados[index].precio
    let respuesta=window.confirm(`El costo de su venta es de ${costo}`)
        if(respuesta){
            vHelados[index].cantidad=vHelados[index].cantidad-venta
            alert(`Venta confirmada`)
        }else{
            showMenu()
        }
    }
}


    

