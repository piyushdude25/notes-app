import React from "react";

const EditModel = ({ editId, notes, setNotes }) => {
  const updateHandler = () => {
    notes.map((elem) => {
      if (editId === elem.id) {
        [
          {
            ...elem,
            title: document.getElementById("edittitle").value,
            desc: document.getElementById("editdesc").value,
          }
        ];
      }
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Notes
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edittitle"
                    placeholder="enter your title"
                  />
                  {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                  <label for="exampleInputescription1" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="desc"
                    id="editdesc"
                    rows="3"
                    className="form-control"
                    placeholder="enter your Description"
                  ></textarea>
                </div>
                {/* <button type="submit" className="btn btn-primary">Add Notes</button> */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={updateHandler}
              >
                Edit Notes
              </button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModel;
