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

  const clas: Record<string, { panname: string; title: string }> = {
    "1": { panname: "dndhk", title: "dfdf" },
    "2": { panname: "dfss", title: "sfa" },
    "3": { panname: "examplePan", title: "Example delicious" },
    "4": { panname: "anotherPan", title: "Another delicious" },
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
          passage={
            "ehfdkrkskqhqtlek...ddddddddddddddddd\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nddddddd.."
          }
        />
      </div>
    </>
  );
}
