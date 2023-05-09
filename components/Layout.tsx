import Navbar from "./navbar/Navbar";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <div className="ml-[15rem] relative bg-center bg-cover h-screen">
        {children}
      </div>
    </>
  );
};

export default Layout;
