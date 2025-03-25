import React from "react";

interface WraperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WraperProps) => {
  return (
    <aside className="fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35]">
      {children}
    </aside>
  );
};

export default Wrapper;
