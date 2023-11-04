import type { MenuProps } from "antd";
import { ProfileOutlined } from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  //!
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>Manage Profile</Link>,
          key: `/profile`,
        },
      ],
    },
    {
      label: <Link href={`/board`}>Board List</Link>,
      key: "board",
      icon: <ProfileOutlined />,
    },
  ];

  return defaultSidebarItems;
};
