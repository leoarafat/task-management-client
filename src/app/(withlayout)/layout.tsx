"use client";

import Content from "@/components/ui/Content";
import SideBar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
// import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return (
      //   <Row
      //     justify="center"
      //     align="middle"
      //     style={{
      //       height: "100vh",
      //     }}
      //   >
      //     <Space>
      //       <Spin tip="Loading" size="large"></Spin>
      //     </Space>
      //   </Row>
      <h1>Loading..</h1>
    );
  }

  return (
    // <Layout >
    <div>
      {" "}
      <SideBar />
      <Content>{children}</Content>
    </div>
    // </Layout>
  );
};

export default DashboardLayout;
