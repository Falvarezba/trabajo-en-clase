import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS : Categoria[] = [

    {
        nombre: "Hamburguesas",
        id: 1,
        fotoUrl: "https://bairessecreta.com/wp-content/uploads/2023/05/big-pons-hamburguesas-buenos-aires-1024x817.jpg",
        productos: [{
            nombre: "Americana",
            precio: 2500,
            descripcion: "La combinacion por excelencia, carne, lechuga, tomate, cebolla y queso. NO FALLA!",
            imagen: " "
        },
        {
            nombre: "Cheese Burguer",
            precio: 2500,
            descripcion: "Hamburguesa clasica, hecha con 2 de nuestro mejor blend, acompañada de final fetas de cheddar",
            imagen: ""
        }]
      },
      {
        nombre: "Pizzas",
        id: 2,
        fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymd-Y3_D0DSS8MoVcKMNceBoaUPl2K8il1g&usqp=CAU",
        productos: [{
          nombre: "Fugazetta",
          precio: 4500,
          descripcion: "pizza de queso y cebolla, una combinacion bien porteña y para amantes de la cebolla!",
          imagen: ""
      },
      {
          nombre: "Napolitana",
          precio: 4000,
          descripcion: "salsa de tomate, queso muzzarella y fetas de tomate.",
          imagen: ""
      }]
      },
      {
        nombre: "Postres",
        id: 3,
        fotoUrl: "https://www.businessempresarial.com.pe/wp-content/uploads/2022/06/Tiramisu.jpeg",
        productos: [{
          nombre: "Helado",
          precio: 800,
          descripcion: "2 bochas de estos sabores: Dulce de leche, Crema americana, Chocolate y Frutilla",
          imagen: ""
      },
      {
          nombre: "Flan",
          precio: 900,
          descripcion: "Flan con dulce de leche y crema",
          imagen: ""
      }]
      },
      {
        nombre: "Bebidas",
        id: 4,
        fotoUrl: "https://www.rionegro.com.ar/wp-content/uploads/2022/12/cerveza-32424.png",
        productos: [{
          nombre: "Coca Cola",
          precio: 500,
          descripcion: "",
          imagen: ""
      },
      {
          nombre: "Sprite",
          precio: 500,
          descripcion: "",
          imagen: ""
      }]
      }
]