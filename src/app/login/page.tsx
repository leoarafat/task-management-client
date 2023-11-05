import LoginPage from "@/components/Authentication/LoginPage";
import Navbar from "@/components/Navbar/Navbar";
import Heading from "@/utils/Heading";

const Login = () => {
  return (
    <>
      <Heading
        title="Task Manager || Login"
        description="Task Manager is Task Management Website"
        keywords="Hotel, Property, Du Plex"
      />
      <Navbar />
      <LoginPage />
    </>
  );
};

export default Login;
