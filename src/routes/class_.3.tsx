import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute('/class_/3')({
  component: List
});



type PostProps = {
  side: string;
  top: string;
  title: string;
  author: string;
  date: string;
  passage: string;
  panname: string;
};
const Post: React.FC<PostProps> = ({
  side,
  top,
  title,
  author,
  date,
  passage,
  panname
}) => {
  
  return (
    <>
    <div
    className="absolute text-[rgb(170,119,181)] font-bold text-base sm:text-sm md:text-md lg:text-17px xl:text-lg"
        style={{ left:`calc(${side} + 2.2%)`, top: `calc(${top} + -10.5%)`}}>
      {panname}
    </div>
      <div
        className="absolute z-20 text-[#5E0B70] font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        style={{ left:`calc(${side} + 2%)`, top: `calc(${top} - 5.6%)` }}
      >
        {title}
      </div>

      
      <div
        className="absolute text-[rgb(170,119,181)] font-bold text-base sm:text-sm md:text-md lg:text-17px xl:text-lg"
        style={{ left:`calc(${side} + 2.3%)`, top: `calc(${top} + 1%)`}}
      >
        {author}
      </div>

      <div
        className="absolute text-[rgb(170,119,181)] font-bold text-base sm:text-sm md:text-md lg:text-17px xl:text-lg"
        style={{ left:`calc(${side} + 2.3%)`, top: `calc(${top} + 4%)`}}
      >
        {date}
      </div>
      <div
        className="absolute text-[#5E0B70] font-bold text-base sm:text-14px md:text-15px lg:text-16px xl:text-17px"
        style={{ left:`calc(${side} + 2%)`, top: `calc(${top} + 12%)`, width: "31%"}}
      >
        {passage}
      </div>

      <div
        className="absolute bg-[#AA77B5]"
        style={{
          left: side,
          top: `calc(${top} + 8%)`,
          width: "76%",
          height: "0.3%",
        }}
      ></div>
    </>
  );
};


function List() {
  return (
    <>
    <div className="bg-[#FCF1FF] p-2 w-screen h-screen overflow-auto relative" style={{ whiteSpace: 'pre-line' }}>
      <Link to="/guitar"
        className="absolute right-[10.8%] top-[19.5%] w-[6.5%] h-[3.8%] text-base sm:text-sm md:text-md lg:text-lg xl:text-lg
        bg-[#F8D9FF] border-[#5E0B70] border-[1.5px] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
          transform -translate-x-1/2 -translate-y-1/2
          flex items-center justify-center"
      >
        기타
      </Link>
      
<    Link
          to="/"
          className="absolute right-[33.3%] top-[19.5%] w-[6.5%] h-[3.8%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#F8D9FF] border-[#5E0B70] border-[1.5px] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          전체
        </Link>
        <Link
          to="/class"
          className="absolute right-[25.8%] top-[19.5%] w-[6.5%] h-[3.8%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#F8D9FF] border-[1.7px] border-[#5E0B70] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] hover:border-[#8A13A4] hover:border-[1.7px] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          수업
        </Link>

           <Link
          to="/delicious"
          className="absolute right-[18.3%] top-[19.5%] w-[6.5%] h-[3.8%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#F8D9FF] border-[1.7px] border-[#5E0B70] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          맛집
        </Link>

      <Post
        panname="기타게시판"
        side="12%"
        top="16%"
        title="제목"
        author="작성자"
        date="작성일 : 2025.05.21 | 수정일 : 모월 모일"
        passage={"ehfdkrkskqhqtlek...ddddddddddddddddd\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nddddddd.."}
      />
    </div>
    </>
  );
};