// import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

// export const Route = createFileRoute("/")({
//   component: Index,
// });

// type PostProps = {
//   side: string;
//   top: string;
//   title: string;
//   author: string;
//   date: string;
//   link: number;
//   passage: string;
// };

// const Post: React.FC<PostProps> = ({
//   side,
//   top,
//   title,
//   author,
//   date,
//   passage,
//   link,
// }) => {
//   return (
//     <>
//       <div>
//         <Link
//           to="/$Id"
//           params={{ Id: link.toString() }}
//           className="absolute z-index-2 text-[#5E0B70] font-bold text-base sm:text-md md:text-17px lg:text-lg xl:text-3xl"
//           style={{ left: side, top: `calc(${top} - 1%)` }}
//         >
//           {title}
//         </Link>
//       </div>

//       <div
//         className="absolute z-index-2 text-[rgb(170,119,181)] font-bold text-base sm:text-sm md:text-md lg:text-17px xl:text-lg"
//         style={{ left: side, top: `calc(${top} + 3.7%)` }}
//       >
//         {author} | {date}
//       </div>
//       <div
//         className="absolute z-index-2 text-[#5E0B70] font-bold text-base sm:text-14px md:text-15px lg:text-16px xl:text-17px"
//         style={{
//           left: `calc(${side})`,
//           top: `calc(${top} + 10%)`,
//           width: "31%",
//         }}
//       >
//         {passage}
//       </div>

//       <div
//         className="absolute z-index-2 bg-[#AA77B5]"
//         style={{
//           left: side,
//           top: `calc(${top} + 8%)`,
//           width: "31%",
//           height: "0.3%",
//         }}
//       ></div>
//     </>
//   );
// };

// type BoardProps = {
//   left: string;
//   top: string;
// };

// const Board: React.FC<BoardProps> = ({ left, top }) => {
//   return (
//     <>
//       {/* 게시판 영역 */}
//       <div
//         className="absolute z-index-1 w-[35%] h-[40%] bg-[#FCF1FF] rounded-lg border-[3px] border-[#5E0B70]"
//         style={{
//           left: left,
//           top: top,
//         }}
//       ></div>
//     </>
//   );
// };

// function Index() {
//   return (
//     <div className="bg-[#F8D9FF] p-2 w-screen h-screen overflow-auto relative">
//       <Board left="9.5%" top="12%" />
//       <Board left="55.5%" top="12%" />
//       <Board left="9.5%" top="55%" />
//       <Board left="55.5%" top="55%" />

//       <Post
//         link={1}
//         side="11.5%"
//         top="16%"
//         title="제목"
//         author="작성자"
//         date="2025.05.21"
//         passage="ehfdkrkskqhqtlek....."
//       />
//       <Post
//         link={2}
//         side="57.5%"
//         top="16%"
//         title="제목"
//         author="작성자"
//         date="2025.05.21"
//         passage="dkwlsWK"
//       />
//       <Post
//         link={3}
//         side="11.5%"
//         top="59%"
//         title="제목"
//         author="작성자"
//         date="2025.05.21"
//         passage="dkwlsWK"
//       />
//       <Post
//         link={4}
//         side="57.5%"
//         top="59%"
//         title="제목"
//         author="작성자"
//         date="2025.05.21"
//         passage="일인덱스하핳하ㅏ하하핳"
//       />
//       {/* <Link
//           to="/"
//           className="absolute left-[12.8%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
//              bg-[#F8D9FF] border-[#5E0B70] border-[1.7px] text-[#8A13A4] rounded-lg font-bold
//              hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer
//              transform -translate-x-1/2 -translate-y-1/2
//              flex items-center justify-center"
//         >
//           전체
//         </Link> */}
//       <Link
//         to="/class"
//         className="absolute left-[21.3%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
//              bg-[#F8D9FF] border-[1.7px] border-[#5E0B70] text-[#8A13A4] rounded-lg font-bold
//              hover:bg-[#8A13A4] hover:text-[#F6CDFF] hover:border-[#8A13A4] hover:border-[1.7px] cursor-pointer
//              transform -translate-x-1/2 -translate-y-1/2
//              flex items-center justify-center"
//       >
//         수업
//       </Link>
//       <Link
//         to="/delicious"
//         className="absolute left-[29.8%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
//              bg-[#F8D9FF] border-[1.7px] border-[#5E0B70] text-[#8A13A4] rounded-lg font-bold
//              hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer
//              transform -translate-x-1/2 -translate-y-1/2
//              flex items-center justify-center"
//       >
//         맛집
//       </Link>
//       <Link
//         to="/guitar"
//         className="absolute left-[38.3%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
//              bg-[#F8D9FF] border-[1.7px] border-[#5E0B70] text-[#8A13A4] rounded-lg font-bold
//              hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer
//              transform -translate-x-1/2 -translate-y-1/2
//              flex items-center justify-center"
//       >
//         기타
//       </Link>
//       <Outlet />
//     </div>
//   );
// }

import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Class,
});

type PostProps = {
  side: string;
  top: string;
  title: string;
  author: string;
  date: string;
  passage: string;
  classId: number;
};

const Post: React.FC<PostProps> = ({
  side,
  top,
  title,
  author,
  date,
  passage,
  classId,
}) => {
  return (
    <>
      <div>
        <Link
          to="/class/$classId"
          params={{ classId: classId.toString() }}
          className="absolute z-index-2 text-[#5E0B70] font-bold text-base sm:text-md md:text-17px lg:text-lg xl:text-3xl"
          style={{ left: side, top: `calc(${top} - 1%)` }}
        >
          {title}
        </Link>
      </div>

      <div
        className="absolute text-[rgb(170,119,181)] font-bold text-base sm:text-sm md:text-md lg:text-17px xl:text-lg"
        style={{ left: side, top: `calc(${top} + 3.7%)` }}
      >
        {author} | {date}
      </div>
      <div
        className="absolute text-[#5E0B70] font-bold text-base sm:text-14px md:text-15px lg:text-16px xl:text-17px"
        style={{
          left: `calc(${side})`,
          top: `calc(${top} + 10%)`,
          width: "31%",
        }}
      >
        {passage}
      </div>

      <div
        className="absolute bg-[#AA77B5]"
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

const Board: React.FC<BoardProps> = ({ left, top }) => {
  return (
    <>
      {/* 게시판 영역 */}
      <div
        className="absolute w-[35%] h-[40%] bg-[#FCF1FF] rounded-lg border-[3px] border-[#5E0B70]"
        style={{
          left: left,
          top: top,
        }}
      ></div>
    </>
  );
};

function Class() {
  return (
    <>
      <div className="bg-[#F8D9FF] p-2 w-screen h-screen overflow-auto relative">
        <p
          className="absolute left-[21.3%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#8A13A4] border-[1.7px] border-[#5E0B70] text-[#F6CDFF] rounded-lg font-bold 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          수업
        </p>

        {/* <Link
          to="/"
          className="absolute left-[12.8%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#F8D9FF] border-[#5E0B70] border-[1.7px] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          전체
        </Link> */}
        <Link
          to="/delicious"
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
        <Board left="9.5%" top="12%" />
        <Board left="55.5%" top="12%" />
        <Board left="9.5%" top="55%" />
        <Board left="55.5%" top="55%" />

        <Post
          classId={1}
          side="11.5%"
          top="16%"
          title="최서윤 교수님"
          author="작성자"
          date="2025.05.21"
          passage="최서윤 교수님"
        />
        <Post
          classId={2}
          side="57.5%"
          top="16%"
          title="김민기 교수님"
          author="작성자"
          date="2025.05.21"
          passage="저는 수학은 김민기 교수님 찬양합니다.... 어느 수학과목이든 상관없이요. 강의력, 시험출제스타일, 빠른 피드백, fm만을 강조하지 않는 융통성 등등 모두 빠질것 없이 훌륭하세요. 드라마 신병3의 가라중대장 느낌입니다. 수학에 흥미가 없어서 외우면 끝인 증명을 주로 내시는 교수님을 좋아한다면 별로일 수 있지만..."
        />
        <Post
          classId={3}
          side="11.5%"
          top="59%"
          title="하대청 교수님 sts"
          author="작성자"
          date="2025.05.21"
          passage="빡세다는 소문이 있는데 그렇게 안 빡셈. 필자는 1학년 때 들었고 웬만하면 에제이상 주심"
        />
        <Post
          classId={4}
          side="57.5%"
          top="59%"
          title="경영학원론"
          author="작성자"
          date="2025.05.21"
          passage="경영학원론 들으세요! 꿀교양이에요."
        />
      </div>
    </>
  );
}
