import React from "react";

export default function Notes ({element, notes, setNotes, setEditId}) {
    // console.log("Notes",element)

const removeHandler = (id) => {
// console.log(notes)
const newNotes = notes.filter((elem)=> {
    if(elem.id !== id){
        return elem
    }
})

setNotes(newNotes)
setEditId(id)
}

const editHandler = (id) => {
    // console.log(notes)
    const newNotes = notes.filter((elem)=> {
        if(elem.id === id){
           document.getElementById("edittitle").value = elem.title;
           document.getElementById("editdesc").value = elem.desc;

        }
    })
    
    setNotes(newNotes)
    }


  return (
    <>
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">
           {element.desc}
          </p>

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={()=> {
                editHandler(element.id)
              }}
          >
            Edit
          </button>
          <button className="btn btn-danger"onClick={()=> {
            removeHandler(element.id)
          }} >Remove</button>
        </div>
      </div>
    </>
  );
};


