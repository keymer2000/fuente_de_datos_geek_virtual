/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");


module.exports = () => {
  const data = {
    "usuarios": [
        {
          "id": 1,
          "primer_nombre": "Keymer",
          "segundo_nombre": "Alexander",
          "primer_apellido": "Jimenez",
          "segundo_apellido": "Jerez",
          "tipo_usuario": "estudiante",
          "username": "keymerjj",
          "password": "12345",
          "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s_PgwUJ3gAE-mlLzbyaOl8tf8dd98AetUA&usqp=CAU"
        },
        {
          "id": 2,
          "primer_nombre": "Alejandro",
          "segundo_nombre": "",
          "primer_apellido": "Ortiz",
          "segundo_apellido": "Zapata",
          "tipo_usuario": "estudiante",
          "username": "oscarmesa",
          "password": "12345",
          "foto": "https://image.flaticon.com/icons/png/512/145/145843.png"
        },
        {
          "id": 3,
          "primer_nombre": "Alejandro",
          "segundo_nombre": "",
          "primer_apellido": "Osorio",
          "segundo_apellido": "Velasco",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://casasanjose.org/wp-content/uploads/2020/07/woman-avatar-profile-round-icon_24640-14048-1.jpg"
        },
        {
          "id": 4,
          "primer_nombre": "Elisa",
          "segundo_nombre": "",
          "primer_apellido": "Sierra",
          "segundo_apellido": "Paez",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUAaxOy8jnQYmYxXZOjcrq_iFW_Zjlbvv-A&usqp=CAU"
        },
        {
          "id": 5,
          "primer_nombre": "Guisell",
          "segundo_nombre": "",
          "primer_apellido": "Mazo",
          "segundo_apellido": "Rúa",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
        },
        {
          "id": 6,
          "primer_nombre": "David",
          "segundo_nombre": "",
          "primer_apellido": "Montoya",
          "segundo_apellido": "Ramírez",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://www.asesoriagales.com/wp-content/uploads/2020/04/perfil-avatar-hombre-icono-redondo_24640-14046.jpg"
        },
        {
          "id": 7,
          "primer_nombre": "Lina",
          "segundo_nombre": "Marcela",
          "primer_apellido": "López",
          "segundo_apellido": "",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
        },
        {
          "id": 8,
          "primer_nombre": "Mauricio",
          "segundo_nombre": "",
          "primer_apellido": "Calle",
          "segundo_apellido": "Calle",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14047.jpg"
        },
        {
          "id": 9,
          "primer_nombre": "Juan",
          "segundo_nombre": "Esteban",
          "primer_apellido": "Gil",
          "segundo_apellido": "Cano",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://www.asesoriagales.com/wp-content/uploads/2020/04/perfil-avatar-hombre-icono-redondo_24640-14046.jpg"
        },
        {
          "id": 10,
          "primer_nombre": "Nicolas",
          "segundo_nombre": "Arbeláez",
          "primer_apellido": "Ramirez",
          "segundo_apellido": "",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
        },
        {
          "id": 11,
          "primer_nombre": "Santiago",
          "segundo_nombre": "",
          "primer_apellido": "Betancur",
          "segundo_apellido": "Graciano",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14047.jpg"
        },
        {
          "id": 12,
          "primer_nombre": "Leidy",
          "segundo_nombre": "Johanna",
          "primer_apellido": "Granada",
          "segundo_apellido": "Cárdenas",
          "tipo_usuario": "estudiante",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14047.jpg"
        }
      ],
      "anuncios": [
        {
          "id": 1,
          "textAnuncio": "Hola 🙌Estamos más cerca de finalizar nuestro proceso formativo. Por eso te invitamos a nuestra última sesión de habilidades para el Siglo XXI de este 2020, mañana miércoles 16 de diciembre a las 3:00 p.m",
          "enlace": "Enlace: https://us02web.zoom.us/j/86090588902?pwd=RnRUR3hwZHIzM3ptZm9XWURncXVsdz09"
        },
        {
          "id": 2,
          "textAnuncio": "Hola 🙌Estamos más cerca de finalizar nuestro proceso formativo. Por eso te invitamos a nuestra última sesión de habilidades para el Siglo XXI de este 2020, mañana miércoles 16 de diciembre a las 3:00 p.m",
          "enlace": "Enlace: https://us02web.zoom.us/j/86090588902?pwd=RnRUR3hwZHIzM3ptZm9XWURncXVsdz09"
        }
      ],
      "instructores": [
        {
          "id": "1",
          "primer_nombre": "Derly",
          "segundo_nombre": "",
          "primer_apellido": "Viviana",
          "segundo_apellido": "",
          "tipo_usuario": "instructora",
          "descripcion": "Instructora Práctica",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14047.jpg"
        },
        {
          "id": "2",
          "primer_nombre": "Narayana",
          "segundo_nombre": "",
          "primer_apellido": "Salamanca",
          "segundo_apellido": "",
          "tipo_usuario": "instructor",
          "descripcion": "Instructora de Empleabilidad",
          "username": "",
          "password": "",
          "foto": "https://casasanjose.org/wp-content/uploads/2020/07/woman-avatar-profile-round-icon_24640-14048-1.jpg"
        },
        {
          "id": "3",
          "primer_nombre": "Dubenis",
          "segundo_nombre": "",
          "primer_apellido": "López",
          "segundo_apellido": "López",
          "tipo_usuario": "instructora",
          "descripcion": "Instructora Práctica",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg"
        },
        {
          "id": "4",
          "primer_nombre": "Oscar",
          "segundo_nombre": "",
          "primer_apellido": "Mesa",
          "segundo_apellido": "Mesa",
          "tipo_usuario": "instructora",
          "descripcion": "Instructor Teorico Práctico",
          "username": "oscarmesa",
          "password": "12345",
          "foto": "https://www.asesoriagales.com/wp-content/uploads/2020/04/perfil-avatar-hombre-icono-redondo_24640-14046.jpg"
        },
        {
          "id": "5",
          "primer_nombre": "Jhon",
          "segundo_nombre": "Faber",
          "primer_apellido": "",
          "segundo_apellido": "",
          "tipo_usuario": "instructor",
          "descripcion": "Coordinador Académico",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
        },
        {
          "id": "6",
          "primer_nombre": "Libardo",
          "segundo_nombre": "",
          "primer_apellido": "Castellanos",
          "segundo_apellido": "",
          "tipo_usuario": "instructora",
          "descripcion": "Instructor Desing Thinking",
          "username": "",
          "password": "",
          "foto": "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14049.jpg"
        }
      ],
      "foro": [
        {
          "id": 1,
          "tema": "No he podido integrar la libreria de bootstrap a mi pagina web de free code camp"
        },
        {
          "id": 2,
          "tema": "No he podido integrar la libreria de bootstrap a mi pagina web de free code camp"
        },
        {
          "id": 3,
          "tema": "No he podido integrar la libreria de bootstrap a mi pagina web de free code camp"
        }
      ] 
            
        }
   return data;
};
  
