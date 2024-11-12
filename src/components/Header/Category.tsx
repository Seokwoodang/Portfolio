interface HeaderCategoryProp {
  children: React.ReactNode;
}

const Category: React.FC<HeaderCategoryProp> = ({ children }) => {
  return (
    <div className="flex items-center p-[4px] cursor-pointer h3">
      {children}
    </div>
  );
};

export default Category;
