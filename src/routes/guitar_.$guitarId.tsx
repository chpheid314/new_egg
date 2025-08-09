import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/guitar_/$guitarId")({
  component: List,
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
  panname,
}) => {
  return (
    <>
      <ChevronLeft
        color="#aa77b5"
        size={48}
        style={{
          position: "absolute",
          left: `calc(${side} - 4.5%)`,
          top: `calc(${top} - 5.6%)`,
        }}
        onClick={() => window.history.back()}
      />
      <div
        className="absolute text-[rgb(170,119,181)] font-bold text-base sm:text-sm md:text-md lg:text-17px xl:text-lg"
        style={{ left: `calc(${side} + 2.2%)`, top: `calc(${top} + -10.5%)` }}
      >
        {panname}
      </div>
      <div
        className="absolute z-20 text-[#5E0B70] font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        style={{ left: `calc(${side} + 2%)`, top: `calc(${top} - 5.6%)` }}
      >
        {title}
      </div>

      <div
        className="absolute text-[rgb(170,119,181)] font-bold text-base sm:text-sm md:text-md lg:text-17px xl:text-lg"
        style={{ left: `calc(${side} + 2.3%)`, top: `calc(${top} + 1%)` }}
      >
        {author}
      </div>

      <div
        className="absolute text-[rgb(170,119,181)] font-bold text-base sm:text-sm md:text-md lg:text-17px xl:text-lg"
        style={{ left: `calc(${side} + 2.3%)`, top: `calc(${top} + 4%)` }}
      >
        {date}
      </div>
      <div
        className="absolute text-[#5E0B70] font-bold text-base sm:text-14px md:text-15px lg:text-16px xl:text-17px"
        style={{
          left: `calc(${side} + 2%)`,
          top: `calc(${top} + 12%)`,
          width: "70%",
        }}
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
  const params = useParams({ from: "/guitar_/$guitarId" });
  const guitarId = params.guitarId;

  const guit: Record<
    string,
    { panname: string; title: string; passage: string }
  > = {
    "1": {
      panname: "기타게시판",
      title: "연애",
      passage:
        "연애는 첫 중간고사 전후가 가장 이루어지기 좋은 것 같아요. 새내기가 마음이 싱숭생숭할때는 아무래도 시험 전후의 시기가 아닐까 합니다. ㅎㅎ \n 또 미팅/소개팅, 클럽방문 등의 새내기 로망 최대한 챙기기. 마찬가지로 학년 올라갈수록 힘들어져요. 기회가 온다면 왠만하면 받아먹는게 좋아요! 미팅/소개팅 등은 2학년이 올라가면.... 거의 이루어지지 않는다는 사실!\n\n------------------------------------------------------\n\n어느 정도 친구들하고 친해지고 연애할 생각 하는것도 좋아보입니다. 너무 이르면 친구사귈 시간이 없을수도 있어보여요.",
    },
    "2": {
      panname: "기타게시판",
      title: "생활",
      passage:
        "돈벌이 활동을 짧게라도 해봤으면 좋겠어요. 과외가 아니더라도 공부와 관련없는 알바도 좋을 것 같아요. 대학에 와서 사회에서 직접 돈을 벌어보며 돈의 소중함과 부모님의 지원이 얼마나 을 깨우치고 경제관념을 다잡을 수 있어요. 학년이 올라갈수록 학업만으로 일과가 꽉 차서 하기 힘들어질 확률이 높아요. \n\n------------------------------------------------------\n\n친구는 많을수록 좋다? 주변인과의 교류는 학년이 올라갈수록 급격하게 줄어들 확률이 높아요! 놀고싶어도 친구가 없어서 못 노는 경우가 꽤 많더라고요. 사람도 적은 학교에 친구마저 없으면 그 외로움 꽤 큽니다.\n\n------------------------------------------------------\n\n언제 과목 열리고 안열리는지 확인해서 담학기에 안열리는건 미리 들어두기!\n\n------------------------------------------------------\n\n에어컨은 미리미리 뚫어놓자.",
    },
    "3": {
      panname: "기타게시판",
      title: "술",
      passage:
        "템포가 너무 빠르다 싶으면 잔을 45도 기울이세요.\n이게 뭐냐면 술덜 마시려는 노력이라고 함.\n\n------------------------------------------------------\n\n술 덜 먹고 싶으면 술 잘 먹는 사람 옆에 앉기.",
    },
    "4": {
      panname: "기타게시판",
      title: "기타",
      passage:
        "무한도전 및 친구들과의 연애\n그리고 자치회 들어가거나 어떤 집단에서 책임 맡기\n\n------------------------------------------------------\n\n친구는 많을수록 좋다? 주변인과의 교류는 학년이 올라갈수록 급격하게 줄어들 확률이 높아요! 놀고싶어도 친구가 없어서 못 노는 경우가 꽤 많더라고요. 사람도 적은 학교에 친구마저 없으면 그 외로움 꽤 큽니다.\n\n------------------------------------------------------\n\n더 놀아도 된다는 것\n토익 마감일자가 생각보다 빡세서 겨울에 종강하고 보기에는 시간이 부족하다는 것\n\n------------------------------------------------------\n\n제발 학교에 대한 모든 건 학사편람과 각종 부서에 문의해보세요. 몰랐던 많은 걸 알 수 있습니다.\n그리고 시간을 내서 학사편람을 꼭 정독해서 자신의 전공과 부전공 관련 수업을 어떻게 들을지 미리 계획하세요!",
    },
  };
  const guiter = guit[guitarId];
  return (
    <>
      <div
        className="bg-[#FCF1FF] p-2 w-screen h-screen overflow-auto relative"
        style={{ whiteSpace: "pre-line" }}
      >
        <Post
          panname={guiter.panname}
          side="12%"
          top="16%"
          title={guiter.title}
          author="작성자"
          date="작성일 : 2025.05.21 | 수정일 : 모월 모일"
          passage={guiter.passage}
        />
      </div>
    </>
  );
}
