module.exports = function () {
  var data = {
    Chats: [
      {
        id:1,
        mensaje_estudiante: "buenas tardes profesora",
	mensaje_tutor: "buenas tardes alumno",
        fecha_envio: "2023-04-12T12:27:45Z",
        fecha_recepcion: "2023-04-12T12:27:46Z",
      },
      {
        id:2,
        mensaje_estudiante: "Buenas tardes",
	mensaje_tutor: "buenas tardes delegado",
        fecha_envio: "2023-04-12T12:28:40Z",
        fecha_recepcion: "2023-04-12T12:28:41Z",
      },
      {
        id:3,
        mensaje_estudiante: "le envie un correo ayer",
	mensaje_tutor: "si me llego tu correo",
        fecha_envio: "2023-04-12T12:30:23Z",
        fecha_recepcion: "2023-04-12T12:30:24Z",
      },
      {
        id:4,
        mensaje_estudiante: "estoy emocionado por los temas de hoy",
	mensaje_tutor: "Exacto hoy la clase sera muy dinamica",
        fecha_envio: "2023-04-12T12:32:12Z",
        fecha_recepcion: "2023-04-12T12:32:13Z",
	}
    ],
    books:[
      {
        id: 1,
        nameBook: "Las leyes",
	   nHojas: "145",
        publicationDateAuthor: "2022-09-09",
        author:
        {
          id:1,
          nameAuthor: "Luis Pérez Reyes",
          birthDateAuthor: "2000-09-10",
          emailAuthor:"lperez@gmail.com",
        }
      },
    ]
  }
  return data
}
