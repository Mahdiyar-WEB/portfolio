"use client";
import React, { useEffect, useRef } from "react";

const Modal = ({ title, body, isOpen, closeHandler }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      isOpen &&
      modalRef.current &&
      !modalRef.current.contains(event.target)
    ) {
      closeHandler();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed left-0 top-0 peer right-0 w-full h-[100dvh] modal-overlay ${
          isOpen ? "block opacity-75 transition-opacity" : "hidden"
        }`}
      ></div>
      {/* modal */}
      <div
       className={`fixed top-0 right-0 left-0 w-full h-[100dvh] grid place-items-center ${
          isOpen ? "opacity-100 transition-opacity modal" : "opacity-0 -z-10 "
        }`}
      >
        {/* content */}
        <div
          className="bg-white mx-1 modal-content flex flex-col"
          ref={modalRef}
        >
          {/* header */}
          <div className="font-bold text-xl">{title}</div>
          <hr className="mt-2" />
          {/* body */}
          <div className="modal-body pt-8 mb-10">{body}</div>
          {/* footer */}
          <div className="mt-auto ms-auto">
            <button
              className="px-4 py-2 bg-purple-500 modal-trigger text-sm font-semibold"
              onClick={() => closeHandler()}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
