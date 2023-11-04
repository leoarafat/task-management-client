"use client";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useLoadUserQuery } from "@/redux/slices/user/userApi";
import UserImage from "../../../public/asstes/user.png";
const { Header: AntHeader } = Layout;

const DashboardHeader = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  // const user = getUserInfo() as any;
  // console.log(user);
  const { role, userId } = getUserInfo() as any;
  const { data } = useLoadUserQuery(userId);

  // const role = "admin";
  return (
    <AntHeader className="z-40 bg-[#010313] w-full border-b  ">
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <p
          style={{
            margin: "0px 5px",
            color: "#fff",
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar
                size="large"
                src="https://res.cloudinary.com/arafatleo/image/upload/v1697953927/avatars/ws3kmyodb9yogw5gwu9e.png"
              />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default DashboardHeader;
