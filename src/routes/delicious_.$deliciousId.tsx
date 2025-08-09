import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/delicious_/$deliciousId")({
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
  const params = useParams({ from: "/delicious_/$deliciousId" }) as {
    deliciousId: string;
  };
  const deliciousId = params.deliciousId;

  const clas: Record<
    string,
    { panname: string; title: string; passage: string }
  > = {
    "1": {
      panname: "맛집게시판",
      title: "맛집",
      passage: "시그널 / 월맥 / 역할맥",
    },
    "2": {
      panname: "맛집게시판",
      title: "회식",
      passage:
        "영도씨: 그냥 맛있음.\n\n------------------------------------------------------\n\n정우림국밥: 생긴지 얼마 안됐으나 가본다면 국밥의 프리미엄은 어떤 모습을 갖춰야 하는지 알 수 있습니다.. 가까워서 방문도 쉬워요. 전 소고기국밥만 먹어봤는데, 기존 소고기국밥이라면 생소할 수 있는 한방 재료들이 아낌없이 들어가 있어요. 국물을 먹어보면 몸보신되는 느낌이 제대로 들어요. 고기의 질도 미쳤고 양도 미쳐서 밥에 비벼먹고 따로 빼서 초장/들깨가루 등에 찍어먹기 충분합니다.\n\n------------------------------------------------------\n\n정동동가스: 직접 화덕에 구워먹는 규카츠의 품질이 신선하고 같이 (무료로) 먹는 디저트가 굉장히 맛있음\n\n------------------------------------------------------\n\n장가계: 가격대는 있지만 양도 꽤 많고 맛있어요 밥약때 꼭 신청하세요!\n\n",
    },
    "3": {
      panname: "맛집게시판",
      title: "개인(배달 위주)",
      passage: "육바연 / 화궁방마라탕",
    },
    "4": { panname: "맛집게시판", title: "간식", passage: "도카" },
  };
  const deliciouser = clas[deliciousId];
  return (
    <>
      <div
        className="bg-[#FCF1FF] p-2 w-screen h-screen overflow-auto relative"
        style={{ whiteSpace: "pre-line" }}
      >
        <Post
          panname={deliciouser.panname}
          side="12%"
          top="16%"
          title={deliciouser.title}
          author="작성자"
          date="작성일 : 2025.05.21 | 수정일 : 모월 모일"
          passage={deliciouser.passage}
        />
      </div>
    </>
  );
}
