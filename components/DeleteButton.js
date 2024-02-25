"use client";
import { removeFromCart } from "@/lib/store/cartStore.js";
import { Trash2, X } from "lucide-react";
import React, { useRef } from "react";

const DeleteButton = ({ cartTitle }) => {
  const deleteModal = useRef();
  return (
    <>
      <button className="" onClick={() => deleteModal?.current.showModal()}>
        <Trash2 className="size-6 stroke-red-500" />
      </button>
      <dialog ref={deleteModal} className="modal">
        <div className="modal-box bg-customGray border border-gray-600 w-[20rem] flex flex-col items-center gap-y-6">
          <section className="flex flex-col items-center">
            <div className="p-2 rounded-full border border-red-600">
              <X size={40} className="stroke-red-500" />
            </div>
            <h4 className="text-base font-semibold mt-2">Are you sure?</h4>
            <p className="text-sm text-gray-600 text-center">
              Do you really want to remove the cart item?
            </p>
          </section>
          <section className="flex gap-x-3">
            <button
              className="py-2 px-8 rounded-lg bg-zinc-500 text-white"
              onClick={() => deleteModal?.current.close()}
            >
              Close
            </button>
            <button
              onClick={() => {
                removeFromCart(cartTitle);
                deleteModal?.current.close();
              }}
              className="py-2 px-8 rounded-lg bg-violet-400 text-white font-semibold"
            >
              Confirm
            </button>
          </section>
        </div>
      </dialog>
    </>
  );
};

export default DeleteButton;
