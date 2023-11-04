import SignUpPage from "@/components/Authentication/SignUpPage";
import Navbar from "@/components/Navbar/Navbar";

import Heading from "@/utils/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HotelHaven | SignUp",
};

const Login = () => {
  return (
    <>
      <Heading
        title="Task Manager || SignUp"
        description="Task Manager is a Task Management platform"
        keywords="Hotel, Property, Du Plex"
      />
      <Navbar />
      <SignUpPage />
    </>
  );
};

export default Login;
