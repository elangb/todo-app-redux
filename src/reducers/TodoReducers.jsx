// untuk mengubah status todo yang ada di dalam array todos yang ada di state reducers TodoReducers
export const TodoReducers = (state = { todos: [] }, action) => {
  switch (action.type) {
    // jika type adalah ADD_TODO maka akan menambahkan todo baru ke dalam array todos yang ada di state reducers TodoReducers
    case "ADD_TODO":
      return { todos: action.payload };

    // jika type adalah DELETE_TODO maka akan menghapus todo yang ada di dalam array todos yang ada di state reducers TodoReducers
    case "DELETE_TODO":
      return { todos: action.payload };

    case "EDIT_TODO":
      return { todos: action.payload };

    default:
      return state;
  }
};
