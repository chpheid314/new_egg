import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/class_/$classId")({
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
  const params = useParams({ from: "/class_/$classId" }) as { classId: string };
  const classId = params.classId;

  const clas: Record<
    string,
    { panname: string; title: string; passage: string }
  > = {
    "1": {
      panname: "수업게시판",
      title: "최서윤 교수님",
      passage: "최서윤 교수님",
    },
    "2": {
      panname: "수업게시판",
      title: "김민기 교수님",
      passage:
        "저는 수학은 김민기 교수님 찬양합니다.... 어느 수학과목이든 상관없이요. 강의력, 시험출제스타일, 빠른 피드백, fm만을 강조하지 않는 융통성 등등 모두 빠질것 없이 훌륭하세요. 드라마 신병3의 가라중대장 느낌입니다. 수학에 흥미가 없어서 외우면 끝인 증명을 주로 내시는 교수님을 좋아한다면 별로일 수 있지만 수학문제를 해결하는 사고과정 자체에 조금이라도 흥미가 있다면 김민기교수님을 듣지 않을 이유가 없어요. 작년 미적수업 하실땐 암기가 꽤나 중요하게 작용하는 테일러 급수파트는 과제제출을 통해 학생들의 이해도를 충분히 평가하셨다면서 기말시험에 출제를 안하신다고 미리 공지하셨습니다!",
    },
    "3": {
      panname: "수업게시판",
      title: "하대청 교수님 sts",
      passage:
        "빡세다는 소문이 있는데 그렇게 안 빡셈. 필자는 1학년 때 들었고 웬만하면 에제이상 주심",
    },
    "4": {
      panname: "수업게시판",
      title: "Another delicious",
      passage: "경영학원론 들으세요! 꿀교양이에요.",
    },
  };
  const deliciouser = clas[classId];
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
