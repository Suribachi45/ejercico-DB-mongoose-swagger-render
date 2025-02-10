module.exports = {
    components: {
      schemas: {
        Task: {
          type: "object",
          properties: {
            _id: { type: "string", description: "ID de la tarea" },
            title: { type: "string", description: "Título de la tarea" },
            completed: { type: "boolean", description: "Estado de la tarea" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        TaskInput: {
          type: "object",
          properties: {
            title: { type: "string", description: "Título de la tarea" },
          },
          required: ["title"],
        },
      },
    },
  };
  