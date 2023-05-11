interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <div className="ml-[18rem] h-screen">{children}</div>
    </>
  );
};

export default Layout;
