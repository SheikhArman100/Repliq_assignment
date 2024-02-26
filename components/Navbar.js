
import { NotebookPen, PlusCircle, RefreshCcwDot, Truck } from "lucide-react";
import Drawer from "./Drawer.js";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-center xl:justify-between 2xl:flex-nowrap flex-wrap py-4 gap-3 xl:gap-1">
     

      <Drawer />
      
      <div className="flex items-center  gap-2 py-2 px-6 rounded-lg bg-zinc-200">
        <NotebookPen className="size-6 stroke-indigo-400" />
        <p className="text-lg md:text-xl font-semibold text-indigo-400">Note</p>
      </div>
      <div className="flex items-center gap-2 py-2 px-6 rounded-lg bg-zinc-200">
        <Truck className="size-6 stroke-indigo-400" />
        <p className="text-lg md:text-xl font-semibold text-indigo-400">Shipping</p>
      </div>
      <div className="flex items-center gap-2 py-2 px-6 rounded-lg bg-zinc-200">
        <RefreshCcwDot className="size-6 stroke-indigo-400" />
        <p className="text-lg md:text-xl font-semibold text-indigo-400">Hold Orders</p>
      </div>
      <div className="flex items-center gap-2 py-2 px-6 rounded-lg bg-zinc-200">
        <PlusCircle  className="size-6 stroke-indigo-400" />
        <p className="text-lg md:text-xl font-semibold text-indigo-400">Add items</p>
      </div>
      
    </div>
  );
};

export default Navbar;
