import React from 'react'

const ModalSuccess = (props) => {
  let text = props.text
  return (
    <div
      class="modal fade"
      id="statusSuccessModal"
      tabindex="-1"
      role="dialog"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body text-center p-lg-4">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <circle
                class="path circle"
                fill="none"
                stroke="#198754"
                stroke-width="6"
                stroke-miterlimit="10"
                cx="50"
                cy="50"
                r="40"
              />
              <polyline
                class="path check"
                fill="none"
                stroke="#198754"
                stroke-width="6"
                stroke-linecap="round"
                stroke-miterlimit="10"
                points="38,50 47,58 62,42 "
              />
            </svg>

            <h4 class="text-success mt-3">Oh Yeah!</h4>
            <h5 class="mt-3">{text}</h5>
            <button
              type="button"
              class="btn btn-lg mt-3 btn-success"
              data-bs-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalSuccess
