import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/guitar")({
  component: Guitar,
});

type PostProps = {
  side: string;
  top: string;
  title: string;
  author: string;
  date: string;
  passage: string;
  guitarId: number;
};

const Post: React.FC<PostProps> = ({
  side,
  top,
  title,
  author,
  date,
  passage,
  guitarId,
}) => {
  return (
    <>
      <div>
        <Link
          to="/guitar/$guitarId"
          params={{ guitarId: guitarId.toString() }}
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

function Guitar() {
  return (
    <>
      <div className="bg-[#F8D9FF] p-2 w-screen h-screen overflow-auto relative">
        <p
          className="absolute left-[38.3%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#8A13A4] border-[1.7px] border-[#5E0B70] text-[#F6CDFF] rounded-lg font-bold 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          기타
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
          to="/class"
          className="absolute left-[21.3%] top-[7.5%] w-[7.5%] h-[4.4%] text-base sm:text-sm md:text-md lg:text-17px xl:text-lg
             bg-[#F8D9FF] border-[1.7px] border-[#5E0B70] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] hover:border-[#8A13A4] hover:border-[1.7px] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          수업
        </Link>

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

        <Board left="9.5%" top="12%" />
        <Board left="55.5%" top="12%" />
        <Board left="9.5%" top="55%" />
        <Board left="55.5%" top="55%" />
        <Post
          guitarId={1}
          side="11.5%"
          top="16%"
          title="연애"
          author="작성자"
          date="2025.05.21"
          passage="연애는 첫 중간고사 전후가 가장 이루어지기 좋은 것 같아요. 새내기가 마음이 싱숭생숭할때는 아무래도 시험 전후의 시기가 아닐까 합니다. ㅎㅎ \n 또 미팅/소개팅, 클럽방문 등의 새내기 로망 최대한 챙기기. 마찬가지로 학년 올라갈수록 힘들어져요. 기회가 온다면 왠만하면 받아먹는게 좋아요! 미팅/소개팅 등은..."
        />
        <Post
          guitarId={2}
          side="57.5%"
          top="16%"
          title="생활"
          author="작성자"
          date="2025.05.21"
          passage="돈벌이 활동을 짧게라도 해봤으면 좋겠어요. 과외가 아니더라도 공부와 관련없는 알바도 좋을 것 같아요. 대학에 와서 사회에서 직접 돈을 벌어보며 돈의 소중함과 부모님의 지원이 얼마나 을 깨우치고 경제관념을 다잡을 수 있어요. 학년이 올라갈수록 학업만으로 일과가 꽉 차서 하기 힘들어질 확률이..."
        />
        <Post
          guitarId={3}
          side="11.5%"
          top="59%"
          title="술"
          author="작성자"
          date="2025.05.21"
          passage="템포가 너무 빠르다 싶으면 잔을 45도 기울이세요.\n이게 뭐냐면 술덜 마시려는 노력이라고 함. 술 덜 먹고 싶으면 술 잘 먹는 사람 옆에 앉기."
        />
        <Post
          guitarId={4}
          side="57.5%"
          top="59%"
          title="기타"
          author="작성자"
          date="2025.05.21"
          passage="무한도전 및 친구들과의 연애\n그리고 자치회 들어가거나 어떤 집단에서 책임 맡기  친구는 많을수록 좋다? 주변인과의 교류는 학년이 올라갈수록 급격하게 줄어들 확률이 높아요! 놀고싶어도 친구가 없어서 못 노는 경우가 꽤 많더라고요. 사람도 적은 학교에 친구마저 없으면 그 외로움 꽤 큽니다..."
        />
      </div>
    </>
  );
}
