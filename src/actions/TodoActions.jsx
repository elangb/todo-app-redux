export const AddTodoActions = (todo) => (dispatch, getState) => {
  //   console.log(todo);
  //   console.log(getState());
  const { todos } = getState();
  //   console.log(todos, 'ini todos');

  // untuk menambahkan todo baru ke dalam array todos yang ada di state reducers TodoReducers
  if (todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: todos.concat(todo),
    });
  }
  // jika todo yang ditambahkan sudah ada di dalam array todos maka tidak akan ditambahkan ke dalam array todos
  // if (!hasTodo && todo !== "") {
  //   todos.push(todo);
  //   // console.log('test');
  //   dispatch({
  //     type: "ADD_TODO",
  //     payload: todos,
  //   });
  // }
};

// untuk menghapus todo yang ada di dalam array todos yang ada di state reducers TodoReducers
export const RemoveTodoActions = (index) => (dispatch, getState) => {
  const { todos } = getState();

  dispatch({
    type: "DELETE_TODO",
    payload: todos.filter((el, i)=> i !== index),
  });
};


export const EditTodoActions = (todo, index) => (dispatch, getState) => {
  const { todos } = getState();
  // console.log(todo, 'ini todo');
  // console.log(todos, "ini todos");
  
  dispatch({
    type: "EDIT_TODO",
    payload: todos.map((el, i) => (i === index ? todo : el)),
  });
// export const EditTodoActions = (todo, newTodo) => (dispatch, getState) => {
//   const { todos } = getState();

//   dispatch({
//     type: "EDIT_TODO",
//     payload: todos.map((i) => (i === todo ? newTodo : i)),
//   });
  // dispatch({
  //   type: "EDIT_TODO",
  //   payload: todos.map((i) => (todo === i ? newTodo : i)),
  // });
  // // if (hasTodo) {

  // // }
};
