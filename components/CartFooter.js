"use client"
import { useCart } from "@/lib/store/cartStore.js";
import { BadgePercent, Grab, HandCoins, XCircle } from "lucide-react";
import React from "react";

const CartFooter = () => {
  const cart=useCart()
  const totalAmount=cart?.reduce((acc,cartItem)=>{
    return acc + cartItem.totalPrice
  },0) 
  return (
    <div className="p-4">
      <div className="flex flex-col items-center md:items-end ">
        <div className=" w-64">
          <div className="flex items-center justify-between p-2 border-t border-b border-zinc-200">
            <span className="text-base font-semibold">Sub Total</span>
            <p className="text-xl font-bold">${parseFloat(totalAmount?.toFixed(2))}</p>
          </div>
          <div className="flex items-center justify-between p-2 border-t border-b border-zinc-200">
            <span className="text-base font-semibold">Tax</span>
            <p className="text-xl font-bold">$10</p>
          </div>
          <div className="flex items-center justify-between p-2 border-t border-b border-zinc-200">
            <span className="text-base font-semibold">Shipping</span>
            <p className="text-xl font-bold">$10</p>
          </div>
          <div className="flex items-center justify-between p-2 border-t border-b border-zinc-200">
            <span className="text-base font-semibold">Discount on cart</span>
            <p className="text-xl font-bold">$5</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-blue-200 px-2 py-4 rounded-lg">
        <p className="text-base font-semibold text-blue-500">
          Product count : {cart?.length}
        </p>
        <div className="flex items-center justify-between gap-x-10">
          <span className="text-3xl font-bold text-blue-500">Total</span>
          <p className="text-2xl font-bold text-blue-500">${parseFloat(totalAmount+10+10-5).toFixed(2)}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4 mt-4">
        <div className="text-red-500 bg-red-200 flex items-center justify-center gap-x-2 px-2 py-4 rounded-lg">
          <XCircle className="size-6 md:size-8" />
          <p className="text-xl sm:text-2xl  font-semibold">Cancel</p>
        </div>
        <div className="text-indigo-500 bg-indigo-200 flex items-center justify-center gap-x-2 px-2 py-4 rounded-lg">
          <Grab className="size-6 md:size-8" />
          <p className="text-xl sm:text-2xl  font-semibold">Hold</p>
        </div>
        <div className="text-indigo-500 bg-indigo-200 flex items-center justify-center gap-x-2 px-2 py-4 rounded-lg">
          <BadgePercent className="size-6 md:size-8" />
          <p className="text-xl sm:text-2xl  font-semibold">Discount</p>
        </div>
        <div className="text-blue-500 bg-blue-200 flex items-center justify-center gap-x-2 px-2 py-4 rounded-lg">
          <HandCoins className="size-6 md:size-8" />
      <p className="text-xl sm:text-2xl  font-semibold">Pay now</p>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
