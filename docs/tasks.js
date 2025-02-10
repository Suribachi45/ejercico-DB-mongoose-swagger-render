module.exports = {
    paths: {
      "/create": {
        post: {
          summary: "Crear una nueva tarea",
          description: "Crea una nueva tarea en la base de datos",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/TaskInput" },
              },
            },
          },
          responses: {
            201: {
              description: "Tarea creada con éxito",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Task" },
                },
              },
            },
          },
        },
      },
      "/": {
        get: {
          summary: "Obtener todas las tareas",
          responses: {
            200: {
              description: "Lista de tareas",
              content: {
                "application/json": {
                  schema: { type: "array", items: { $ref: "#/components/schemas/Task" } },
                },
              },
            },
          },
        },
      },
      "/id/{_id}": {
        put: {
          summary: "Actualizar una tarea",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              description: "ID de la tarea a actualizar",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/TaskInput" },
              },
            },
          },
          responses: {
            200: {
              description: "Tarea actualizada con éxito",
            },
          },
        },
        delete: {
          summary: "Eliminar una tarea",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              description: "ID de la tarea a eliminar",
            },
          ],
          responses: {
            200: {
              description: "Tarea eliminada con éxito",
            },
          },
        },
      },
    },
  };
  