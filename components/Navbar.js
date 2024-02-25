import React from "react";
import Drawer from "./Drawer.js";
import { NotebookPen, PlusCircle, RefreshCcwDot, Truck } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center py-4 gap-x-3">
      <Drawer />
      <div className="flex items-center gap-2 py-2 px-6 rounded-lg bg-zinc-200">
        <NotebookPen className="size-6 stroke-indigo-400" />
        <p className="text-xl font-semibold text-indigo-400">Note</p>
      </div>
      <div className="flex items-center gap-2 py-2 px-6 rounded-lg bg-zinc-200">
        <Truck className="size-6 stroke-indigo-400" />
        <p className="text-xl font-semibold text-indigo-400">Shipping</p>
      </div>
      <div className="flex items-center gap-2 py-2 px-6 rounded-lg bg-zinc-200">
        <RefreshCcwDot className="size-6 stroke-indigo-400" />
        <p className="text-xl font-semibold text-indigo-400">Hold Orders</p>
      </div>
      <div className="flex items-center gap-2 py-2 px-6 rounded-lg bg-zinc-200">
        <PlusCircle  className="size-6 stroke-indigo-400" />
        <p className="text-xl font-semibold text-indigo-400">Add items</p>
      </div>
      
    </div>
  );
};

export default Navbar;
