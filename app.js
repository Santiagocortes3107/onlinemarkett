const data = {
  "productos": [
    {
      "nombre": "Detergente para ropa",
      "precio": 1500.0,
      "disponibilidad": "En stock"
    },
    {
      "nombre": "Limpiador multiusos",
      "precio": 800.0,
      "disponibilidad": "En stock"
    },
    {
      "nombre": "Limpiador de vidrios",
      "precio": 500.0,
      "disponibilidad": "En stock"
    },
    {
      "nombre": "Desengrasante para cocina",
      "precio": 500.0,
      "disponibilidad": "En stock"
    },
    {
      "nombre": "Jabón líquido para manos",
      "precio": 1000.0,
      "disponibilidad": "En stock"
    }
  ]
};

// Agregar elementos "lista-productos"
const listaProductos = document.getElementById("lista-productos");
data.productos.forEach(producto => {
  const btnAgregar = document.createElement("button");
  btnAgregar.textContent = `Agregar ${producto.nombre} - $${producto.precio}`;
  btnAgregar.addEventListener("click", () => {
    agregarAlCarrito(producto);
    actualizarProductosSeleccionados();
  });
  listaProductos.appendChild(btnAgregar);
});

// carrito
let carrito = {};

// variable para contar los productos seleccionados
let totalProductos = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Verificar si el producto ya está en el carrito
  if (carrito[producto.nombre]) {
    carrito[producto.nombre].cantidad += 1;
  } else {
    carrito[producto.nombre] = {
      cantidad: 1,
      precio: producto.precio
    };
  }
  // aumentar el contador de productos seleccionados
  totalProductos++;
}

// Función para actualizar la sección "productos-seleccionados"
function actualizarProductosSeleccionados() {
  const productosSeleccionados = document.getElementById("productos-seleccionados");
  productosSeleccionados.innerHTML = "";
  // Recorrer los productos en el carrito y agregarlos a la sección "productos-seleccionados"
  for (const [nombre, producto] of Object.entries(carrito)) {
    const itemProducto = document.createElement("div");
    itemProducto.textContent = `${nombre} x ${producto.cantidad} = $${producto.cantidad * producto.precio}`;
    productosSeleccionados.appendChild(itemProducto);
  }
  // Mostrar el total de productos seleccionados
  const totalProductosSeleccionados = document.getElementById("total-productos-seleccionados");
  totalProductosSeleccionados.textContent = `Total de productos seleccionados: ${totalProductos}`;
}