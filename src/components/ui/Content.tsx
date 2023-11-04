"use client";
import React from "react";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="px-6 pt-6 2xl:container">
          <div className="flex items-center justify-center rounded-xl ml-10 lg:ml-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
