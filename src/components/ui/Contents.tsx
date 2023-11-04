"use client";
import { Layout } from "antd";
import Header from "./DashboardHeader";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />

      <div className="bg-[#010313] text-white   p-[10px] h-screen">
        {children}
      </div>
    </Content>
  );
};

export default Contents;
