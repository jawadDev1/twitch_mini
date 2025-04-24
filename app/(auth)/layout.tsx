import React from "react";
import Logo from "./_components/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col gap-3 items-center justify-center">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
