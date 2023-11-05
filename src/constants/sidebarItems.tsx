import type { MenuProps } from "antd";
import { ProfileOutlined } from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  //!
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/board`}>Board</Link>,
      key: "board",
      icon: <ProfileOutlined />,
    },
  ];

  return defaultSidebarItems;
};
