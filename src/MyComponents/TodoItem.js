import React from 'react'
// import PropTypes from 'prop-types'
const TodoItem = (props) => {
  // var todo={todo}
  var todo = props.todos
  if (!todo) {
    return <div>Loading...</div>; // or null
  }
  // var todo = props.todos
  console.log(props)
  // console.log(todo.title)
  return (
    <div>
      <h5>{todo['sno']}.{todo['title']}</h5>
      <p>{todo['desc']}</p>
      <button onClick={()=>{props.onDelete(todo)}} className="btn btn-danger btn-sm">Delete</button>
      {/* <hr /> */}
    </div>
  )
}

export default TodoItem


