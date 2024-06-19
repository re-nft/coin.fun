export const actions = {
  create: async ({ cookies, request }) => {
    const data = await request.formData();
    // db.createTodo(cookies.get('userid'), data.get('description'));
  }
};

