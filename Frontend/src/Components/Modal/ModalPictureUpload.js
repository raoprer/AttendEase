import React from 'react'

const ModalPictureUpload = (props) => {
  let title = props.title
  return (
    <div
      class="modal fade"
      id="uploadModal"
      tabindex="-1"
      aria-labelledby="uploadModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="uploadModalLabel">
              {title}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="file"
                  id="newProfilePicture"
                ></input>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPictureUpload
