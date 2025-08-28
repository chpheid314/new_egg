import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import SearchImg from "./img/Search.png";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="h-screen min-w-[1024px]">
        <div className="bg-[#AF55C4] h-[70px] text-purple-200 relative min-w-[1024px]">
          <Link
            to="/"
            className="absolute left-[50px] top-[17px] text-[#FCF1FF] font-bold text-3xl"
          >
            새내기 알림장
          </Link>
          <div className="absolute right-[100px] top-1/2 bg-[#FCF1FF] h-[40px] w-[250px] -translate-y-1/2 rounded-lg"></div>
          <img
            src={SearchImg}
            className="absolute right-[50px] top-1/2 h-[36px] w-[36px] -translate-y-1/2"
          />
        </div>
        <Outlet />
      </div>
    </>
  ),
});

/* <Link
          to="/"
          className="absolute left-[120px] top-[50%] w-[142px] h-[37px] 
             bg-[#F6CDFF] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          새알(로고 넣기)
        </Link>*/
