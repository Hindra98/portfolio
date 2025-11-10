import * as React from "react";
import { ComponentItem } from "../../types";

interface ComponentProps {
  component: ComponentItem;
  idx?: number;
}

export const ComponentCard: React.FC<ComponentProps> = ({ component }) => {
  return (
    <div className="relative flex flex-col gap-0 w-[430px] h-80 justify-between my-auto rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 ease-in-out group hover:bg-gray-200 hover:dark:bg-gray-800 dark:shadow-white/10">
      <div className="flex justify-center items-center w-full h-full overflow-hidden shadow dark:shadow-white/10">
        {component.children}
      </div>
      <div className="flex justify-center items-center w-full py-8">
        <h3 className="text-lg px-4 font-bold">{component.name}</h3>
      </div>
    </div>
  );
};
