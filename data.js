module.exports = function () {
  var data = {
    Chats: [
      {
        id: 1,
        mensaje_estudiante: "buenas tardes profesora",
        mensaje_tutor: "buenas tardes alumno",
        fecha_envio: "2023-04-12T17:30:45.000Z",
        fecha_recepcion: "2023-04-12T17:30:46.000Z",
      },
      {
        id: 2,
        mensaje_estudiante: "Buenas tardes",
        mensaje_tutor: "buenas tardes delegado",
        fecha_envio: "2023-04-12T17:28:40.000Z",
        fecha_recepcion: "2023-04-12T17:28:41.000Z",
      },
      {
        id: 3,
        mensaje_estudiante: "le envie un correo ayer",
        mensaje_tutor: "si me llego tu correo",
        fecha_envio: "2023-04-12T17:30:23.000Z",
        fecha_recepcion: "2023-04-12T17:30:24.000Z",
      },
      {
        id: 4,
        mensaje_estudiante: "estoy emocionado por los temas de hoy",
        mensaje_tutor: "Exacto hoy la clase sera muy dinamica",
        fecha_envio: "2023-04-12T17:32:12.000Z",
        fecha_recepcion: "2023-04-12T17:32:13.000Z",
      },
    ],
    students: [
      {
        id: 1,
        colegio: "Bertolt Brecht",
        edad: "17",
        users_user_id: " ",
        membresia_id: " ",
        sala_id: " ",
      },
      {
        id: 2,
        colegio: "Bertolt Brecht",
        edad: "17",
        users_user_id: " ",
        membresia_id: " ",
        sala_id: " ",
      },
      {
        id: 3,
        colegio: "Bertolt Brecht",
        edad: "17",
        users_user_id: " ",
        membresia_id: " ",
        sala_id: " ",
      },
      {
        id: 4,
        colegio: "Bertolt Brecht",
        edad: "17",
        users_user_id: " ",
        membresia_id: " ",
        sala_id: " ",
      },
    ],
    simulations: [
      {
        id: 1,
        nameCurso: "Matematica Básica",
        planCurso:
          "El curso consta de 2 exámenes que deberán ser aprobatorios con 100%",
        metodologiaCurso:
          "Al ser un curso de la facultad de Ingeniería, empezaremos por ver los primeros 4 videos dentro de esta canal: https://www.youtube.com/@MatematicaBasicaBlended/featured ",
        duracionHoras: "6",
      },
      {
        id: 2,
        nameCurso: "Estadistica Aplicada",
        planCurso:
          "El curso consta de 4 exámenes que deberán ser aprobatorios con 80%",
        metodologiaCurso:
          "Al ser un curso de la facultad de Ingeniería, empezaremos por ver estos videos dentro de este canal: https://www.youtube.com/@estadisticaupc7353 ",
        duracionHoras: "8",
      },
      {
        id: 3,
        nameCurso: "Fisica I",
        planCurso:
          "El curso consta de 3 exámenes que deberán ser aprobatorios mayor a 80%",
        metodologiaCurso:
          "Al ser un curso de la facultad de Ingeniería, empezaremos por ver estos videos: https://www.youtube.com/@OpenFINGdirectos  ",
        duracionHoras: "9",
      },
      {
        id: 4,
        nameCurso: "Contabilidad y Presupuesto",
        planCurso:
          "El curso consta de 2 exámenes que deberán ser aprobatorios con 100%",
        metodologiaCurso:
          "Al ser un curso de la facultad de Ingeniería, empezaremos por ver los 2 primeros videos: https://www.youtube.com/watch?v=1CbtTuWF070&list=PLWeOo6B44EG7bZmwjAPEpcoqGw_8OKDxf",
        duracionHoras: "6",
      },
    ],
    Memberships: [
      {
        id: 1,
        monto_pago: 50,
        beneficios: "descuento",
        metodo_de_pago: "tarjeta",
      },
      {
        id: 2,
        monto_pago: 100,
        beneficios: "descuento",
        metodo_de_pago: "efectivo",
      },
      {
        id: 3,
        monto_pago: 80,
        beneficios: "descuento",
        metodo_de_pago: "tarjeta",
      },
      {
        id: 4,
        monto_pago: 85,
        beneficios: "descuento",
        metodo_de_pago: "efectivo",
      },
    ],
    Users: [
      {
        id: 1,
        rol: "Tutor",
        nombre_completo: "Luis Miguel Fernando Morote",
        correo_electronico: "FernandoM@gmail.com",
        Contrasena: "2ekfwfj",
      },
      {
        id: 2,
        rol: "Tutor",
        nombre_completo: "Maria Montenegro Rosal",
        correo_electronico: "MontenegroR@gmail.com",
        Contrasena: "adffw223j",
      },
      {
        id: 3,
        rol: "Estudiante",
        nombre_completo: "Manuel Robreto Rodriguez",
        correo_electronico: "RobertoR@gmail.com",
        Contrasena: "ldkfsl",
      },
      {
        id: 4,
        rol: "Estudiante",
        nombre_completo: "Allison Jimenez Zorrilla",
        correo_electronico: "Jimenez@gmail.com",
        Contrasena: "34xerw",
      },

    ],
  };
  return data;
};
