import { createRootRoute, Outlet,} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";


export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-[#AF55C4] h-[10vh] text-purple-200 relative w-screen overflow-x-auto">
        </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>)});

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