import Category from "./Category";
import HeaderMob from "@/image/headerMob.svg";

interface HeaderProp {
  minHeight: number;
}

const Header: React.FC<HeaderProp> = ({ minHeight }) => {
  return (
    <div
      className={`flex justify-between items-center min-w-[${minHeight}px] max-w-[800px] w-[100%] h-[60px] px-[24px] py-[10px]`}
    >
      <Category>
        <img src={HeaderMob} alt="mobileHeader" className="w-[30px] h-[30px]" />
      </Category>
      <div className="hidden tab:flex items-center p-[4px] cursor-pointer h1">
        Seokwoo
      </div>
      <Category>자기소개</Category>
      <Category>스터디</Category>
      <Category>프로젝트</Category>
      <Category>블로그글</Category>
      <Category>ko/en</Category>
    </div>
  );
};

export default Header;
