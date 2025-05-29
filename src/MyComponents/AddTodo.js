import React from "react";
import { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const sunmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    }else{
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }
    return (
<div className="container mt-5">
    <h2>Add Todo</h2>
    <form onSubmit={sunmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" placeholder="Enter Title" value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="desc" rows="4" placeholder="Enter Description" value={desc} onChange={(e)=>{
          setDesc(e.target.value);
        }}></textarea>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  </div>
    );
}