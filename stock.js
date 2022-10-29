let comentarios = []

fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
  method: 'GET'
})
  .then(response => response.json())
  .then(json =>
    comentarios.push(json.body))
  .then(res => {
    const productos = [
      {
        id: 1,
        nombre: "Quantum",
        precio: 320,
        img: '../img proyecto/7463_front.jpg',
        comentario: comentarios[0]
      },
      {
        id: 2,
        nombre: "Legacy",
        precio: 219,
        img: '../img proyecto/C440_C440Q_LEGACY_beauty.jpg',
        comentario: comentarios[0]
      },
      {
        id: 3,
        nombre: "Featherweight",
        precio: 740,
        img: '../img proyecto/9980_beauty.jpg',
        comentario: comentarios[0]
      },
      {
        id: 4,
        nombre: "Confidence",
        precio: 2110,
        img: '../img proyecto/C5205Arancio.jpg',
        comentario: comentarios[0]
      },
      {
        id: 5,
        nombre: "Stylist",
        precio: 149,
        img: '../img proyecto/7640-Box_Front-6005-white-bg-FLAT_low-res.jpg',
        comentario: comentarios[0]
      },
      {
        id: 6,
        nombre: "Starlet",
        precio: 170,
        img: '../img proyecto/6660_STARLET_beauty.jpg',
        comentario: comentarios[0]
      },
      {
        id: 7,
        nombre: "Elite",
        precio: 132,
        img: '../img proyecto/C7225-300x300.jpg',
        comentario: comentarios[0]
      },
      {
        id: 8,
        nombre: "Heavy Duty",
        precio: 3200,
        img: '../img proyecto/9100_PROF_Beauty.jpg',
        comentario: comentarios[0]
      },
      {
        id: 9,
        nombre: "Patchword",
        precio: 3500,
        img: '../img proyecto/7285Q_Patchwork_beauty-1.jpg',
        comentario: comentarios[0]
      },

    ]

    console.log(comentarios[0])

    const contenedor = document.getElementById('contenedor');

    const verCarrito = document.getElementById('verCarrito');



    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    //agregando la card 
    productos.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add('contenedor')
      div.innerHTML = `
        <div class="card text-dark " style="width: 18rem;">
      <img class="card-img-top" src="${producto.img}">
      <div class="card-body">
        <h5 class=card-title">${producto.nombre}"</h5>
        <p>${producto.precio}</p>
        <h3>${producto.comentario}</h3>
    
        <button class="btn btn-dark" id= ${producto.id}>Agregar</button>
      </div>
    </div>
        `

      contenedor.appendChild(div);




      div.querySelector('button').addEventListener('click', () => {


        const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id)

        if (repeat) {
          carrito.map((producto) => {
            if (producto.id === producto.id) {
              producto.cantidad++;
            }
          });
        } else {
          carrito.push({
            ...producto,
            cantidad: 1
          });
          localStorage.clear()
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
        console.log(carrito);
      }
      );



    });



    verCarrito.addEventListener('click', () => {
      carritoLleno =document.getElementById('carrito')
      carrito.innerHTML = "";
      carrito.forEach((producto) => {
        carritoLleno.innerHTML += `
            <div class="card text-dark " id=${producto.nombre} style="width:18rem; height:rem  ; ">
          <div class="card-body">
            <h5 class=card-title">${producto.nombre}"</h5>
            <p>${producto.precio}</p>
            <p>${producto.cantidad}</p>
            <p>${producto.cantidad * producto.precio}</p>
            <button class="btn btn-dark" id= ${producto.id}>Eliminar</button>
           
           
          </div>
        </div>
            `;

           




        //boton eliminar, para eliminar algun producto del carrito
        let eliminar = document.createElement("button");
        eliminar.innerText = "🗑";
        eliminar.className = "eliminar-producto";
        carritoLleno.append(eliminar)

        eliminar.addEventListener("click", () => {
          carrito.splice(producto.id, 1);
          localStorage.clear()
          localStorage.setItem("carrito", JSON.stringify(carrito))
          document.getElementById(producto.nombre).remove();

          // imprimirCarrito()
        });

      });

      //total de la compra
      const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
      const totalPagar = document.createElement("div");
      totalPagar.className = "total-carrito";
      totalPagar.innerHTML = `total a pagar: ${total} $`;

      verCarrito.append(totalPagar);
    });


    const eliminarProducto = () => {
      const foundId = carrito.find((elemento) => elemento.id);

      carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
      });
    }





  })


console.log(comentarios)

