import Header from "./components/Header/Header";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  const minHeight = 400;
  return (
    <>
      <Header minHeight={minHeight} />
      <div className="grid justify-center">
        <div className={`min-w-[${minHeight}px]`}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
