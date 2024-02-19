import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex align-center justify-between">
        <h1 className="font-sans text-5xl m-10 text-gray-200">Ashwin Ram</h1>
      </div>
      <div>
        <Header />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
