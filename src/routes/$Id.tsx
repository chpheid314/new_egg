import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

// // Usage
// const App = () => {
//   return <Camera color="red" size={48} />;
// };

// export default App;

type Section = {
  id: string;
  content: string;
};

type DocumentDetailData = {
  id: string;
  title: string;
  toc: string[];
  sections: Section[];
};

const documentExample: DocumentDetailData = {
  id: "1",
  title: "제목",
  toc: ["목차1", "목차2", "목차3"],
  sections: [
    { id: "sec1", content: "내용1" },
    { id: "sec2", content: "내용2" },
    { id: "sec3", content: "내용3" },
  ],
};

const DocumentPage: React.FC = () => {
  const params = useParams({ from: "/$Id" }) as { Id: string };
  const docId = params.Id;

  // 이쪽에 백엔드 연결
  const documentData = documentExample;

  return (
    <div className="bg-[#FCF1FF] w-full h-full">
      <div className="max-w-[1024px] mx-auto">
        {/* 제목 */}
        <div className="absolute top-[110px] text-4xl font-bold mb-6">
          {documentData.title}
        </div>

        {/* 목차 */}
        <div className="absolute top-[180px] w-[512px] bg-white border border-black p-[12px] flex flex-col gap-[10px] text-lg">
          {documentData.toc.map((item, i) => (
            <div
              key={i}
              className="rounded-lg flex items-center px-[16px] py-[3px]"
            >
              {i + 1}. {item}
            </div>
          ))}
        </div>

        {/* 본문 */}
        <div className="absolute top-[400px] left-1/2 -translate-x-1/2 w-[1024px] flex flex-col gap-6">
          {documentData.sections.map((sec, i) => (
            <div key={sec.id} id={sec.id} className="flex flex-col gap-2">
              <div className="font-bold text-2xl">
                {i + 1}. {documentData.toc[i] || `섹션 ${i + 1}`}
              </div>
              <div className="border-b border-gray-400 w-full" />
              <div className="pt-2 text-lg">{sec.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/$Id")({
  component: DocumentPage,
});
