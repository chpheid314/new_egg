import { createFileRoute, Link, Outlet } from "@tanstack/react-router";


export const Route = createFileRoute("/")({
  component: Index,
});


type PostProps = {
  side: string;
  top: string;
  title: string;
  author: string;
  date: string;
  link: string;
  passage: string;
};

const Post: React.FC<PostProps> = ({
  side,
  top,
  title,
  author,
  date,
  passage,
  link,
}) => {
  
  return (
    <>
      <div>
      <Link to={link}
        className="absolute z-index-2 text-[#5E0B70] font-bold text-base sm:text-md md:text-17px lg:text-lg xl:text-3xl"
        style={{ left:side, top: `calc(${top} - 1%)`}}
      >
        {title}
        </Link>
      </div>

      <div
        className="absolute z-index-2 text-[rgb(170,119,181)] font-bold text-base sm:text-sm md:text-md lg:text-17px xl:text-lg"
        style={{ left:side, top: `calc(${top} + 3.7%)`}}
      >
        {author} | {date}
      </div>
      <div
        className="absolute z-index-2 text-[#5E0B70] font-bold text-base sm:text-14px md:text-15px lg:text-16px xl:text-17px"
        style={{ left:`calc(${side})`, top: `calc(${top} + 10%)`, width: "31%"}}
      >
        {passage}
      </div>

      <div
        className="absolute z-index-2 bg-[#AA77B5]"
        style={{
          left: side,
          top: `calc(${top} + 8%)`,
          width: "31%",
          height: "0.3%",
        }}
      ></div>
    </>
  );
};

type BoardProps = {
  left: string;
  top: string;
};

const Board: React.FC<BoardProps> = ({ left, top, }) => {
  return (
    <>
      {/* 게시판 영역 */}
      <div
        className="absolute z-index-1 w-[35%] h-[40%] bg-[#FCF1FF] rounded-lg border-[3px] border-[#5E0B70]"
        style={{
          left: left,
          top: top,
        }}
      ></div>
    </>
  );
};


function Index() {
  
  return (
    <div className="bg-[#F8D9FF] p-2 w-screen h-screen overflow-auto relative">
      <Board left="9.5%" top="12%" />
      <Board left="55.5%" top="12%" />
      <Board left="9.5%" top= "55%"  />
      <Board left="55.5%" top="55%"  />

      <Post
        link="/1"
        side="11.5%"
        top="16%"
        title="제목"
        author="작성자"
        date="2025.05.21"
        passage="ehfdkrkskqhqtlek....."
      />
      <Post
        link="/2"
        side="57.5%"
        top="16%"
        title="제목"
        author="작성자"
        date="2025.05.21"
        passage="dkwlsWK"
      />
      <Post
        link="/3"
        side="11.5%"
        top="59%"
        title="제목"
        author="작성자"
        date="2025.05.21"
        passage="dkwlsWK"
      />
      <Post
        link="4"
        side="57.5%"
        top="59%"
        title="제목"
        author="작성자"
        date="2025.05.21"
        passage="일인덱스하핳하ㅏ하하핳"
      />
       <Link
          to="/"
          className="absolute left-[12.8%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#F8D9FF] border-[#5E0B70] border-[1.7px] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          전체
        </Link>
        <Link
          to="/class"
          className="absolute left-[21.3%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#F8D9FF] border-[1.7px] border-[#5E0B70] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] hover:border-[#8A13A4] hover:border-[1.7px] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          수업
        </Link>
       <Link to="/delicious"
          className="absolute left-[29.8%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#F8D9FF] border-[1.7px] border-[#5E0B70] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          맛집
        </Link>
           <Link
          to="/guitar"
          className="absolute left-[38.3%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#F8D9FF] border-[1.7px] border-[#5E0B70] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          기타
        </Link>
      <Outlet />
      </div>
  );
}
