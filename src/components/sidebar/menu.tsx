import React, { FC, MouseEvent } from "react"

interface TabProps {
  children: React.ReactNode;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const Menu: FC<TabProps> = ({ children, Icon, onClick }) => {
  return (
    <div className="flex px-2 py-1 mx-4 my-2 text-sm bg-gray-700 rounded items-center">
      <Icon className="m-2" /> {children}
    </div>
  );
};
