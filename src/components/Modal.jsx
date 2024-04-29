import React, { useRef } from "react";

const Modal = ({ onClose, initialTitle, setTitle, initialContent, setContent }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex-col gap-5">
        <button onClick={onClose} className=" place-self-end cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="bg-indigo-400 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-2">
          <input
            className="w-15"
            type="text"
            placeholder="Edit title"
            value={initialTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="22"
            rows="10"
            value={initialContent}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter you description for you task here!"
          >
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default Modal;
