import React from "react";
// import { Navbar } from 'react-bootstrap'

export default function Form ({title, setTitle, desc, setDesc, notes, setNotes}) {

  const inputHandler = (e) => {
    if(e.target.id === "title"){
        setTitle(e.target.value);
    }
    
    if(e.target.id === "desc"){
        setDesc(e.target.value);
    }
    // console.log(title,desc)
  };

  const addNotesHandler =(e)=> {
    e.preventDefault()
  if(title !== "" && desc !== ""){
    setNotes((note)=> {
        return(
            [...note,{
                title:title,
                desc:desc,
                id:new Date().getTime()
            }]
        )
    })
  }

    setTitle("")
    setDesc("")
  }

  return (
    <>
      <div className="container my-3">
        <div className="row justify-contect-center">
          <div className="col-md-10">
            <form>
              <div className="mb-3">
                <label for="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="enter your title"
                  value={title}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputescription1" className="form-label">
                  Description
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  rows="3"
                  className="form-control"
                  placeholder="enter your Description"
                  value={desc}
                  onChange={inputHandler}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>
                Add Notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


