import { createFileRoute } from "@tanstack/react-router";
import SearchImg from "./img/Search.png";
import RadioButtonCheckedImg from "./img/radio_button_checked.png";
import RadioButtonUncheckedImg from "./img/radio_button_unchecked.png";
import TrailingElementSelectedImg from "./img/Trailing element-selected.png";
import ThumbsUpImg from "./img/Thumbs up.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Dashboard({}) {
  return (
    <div>
      <p>aaa</p>
      <p>bbb</p>
    </div>
  );
}

type PostProps = {
  left: number;
  top: number;
  title: string;
  author: string;
  date: string;
  likes: number;
};

const Post: React.FC<PostProps> = ({
  left,
  top,
  title,
  author,
  date,
  likes,
}) => {
  return (
    <>
      <div
        className="absolute text-[#5E0B70] font-bold text-xl"
        style={{ left: `${left}px`, top: `${top}px` }}
      >
        {title}
      </div>

      <div
        className="absolute text-[#AA77B5] font-bold text-sm"
        style={{ left: `${left}px`, top: `${top + 30}px` }}
      >
        {author} | {date}
      </div>

      <img
        src={ThumbsUpImg}
        alt="Thumbs Up Icon"
        className="absolute w-[18px] h-[18px]"
        style={{ left: `${left + 400}px`, top: `${top + 30}px` }}
      />

      <div
        className="absolute text-[#AA77B5] font-bold text-base"
        style={{ left: `${left + 425}px`, top: `${top + 27}px` }}
      >
        {likes}
      </div>

      <div
        className="absolute bg-[#AA77B5]"
        style={{
          left: `${left}px`,
          top: `${top + 60}px`,
          width: "470px",
          height: "2px",
        }}
      ></div>
    </>
  );
};

type BoardProps = {
  left: number;
  top: number;
  height: number;
  title: string;
};

const Board: React.FC<BoardProps> = ({ left, top, height, title }) => {
  return (
    <>
      {/* 게시판 이름 */}
      <div
        className="absolute text-[#5E0B70] font-bold text-2xl"
        style={{ left: `${left}px`, top: `${top}px` }}
      >
        {title}
      </div>

      {/* 더보기 */}
      <div
        className="absolute text-[#AA77B5] font-bold text-base"
        style={{ left: `${left + 456}px`, top: `${top + 10}px` }}
      >
        더보기
      </div>

      {/* 게시판 영역 */}
      <div
        className="absolute w-[532px] bg-[#FCF1FF] rounded-lg border-[3px] border-[#5E0B70]"
        style={{
          left: `${left}px`,
          top: `${top + 40}px`,
          height: `${height}px`,
        }}
      ></div>
    </>
  );
};

function Index() {
  return (
    <div className="bg-[#F8D9FF] p-2 w-full h-screen">
      <div
        className="absolute left-[780px] top-[120px] w-[220px] h-[35px]
       bg-[#FCF1FF] text-[#AA77B5] font-bold text-lg
       -translate-x-1/2 -translate-y-1/2
       flex items-center pl-[10px]"
      >
        게시판 선택
      </div>
      <img
        src={TrailingElementSelectedImg}
        alt="Trailing Element Selected Icon"
        className="absolute left-[870px] top-[120px] w-[50px] h-[50px]
        -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="absolute left-[1020px] top-[120px] w-[220px] h-[35px]
       bg-[#FCF1FF] text-[#AA77B5] font-bold text-lg
       -translate-x-1/2 -translate-y-1/2
       flex items-center pl-[10px]"
      >
        검색어 입력
      </div>
      <img
        src={SearchImg}
        alt="Search Icon"
        className="absolute left-[1160px] top-[120px] w-[35px] h-[35px]
        -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src={RadioButtonCheckedImg}
        alt="Search Icon"
        className="absolute left-[930px] top-[163px] w-[20px] h-[20px]
        -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="absolute left-[975px] top-[163px]
        text-[#AA77B5] font-bold text-base
        -translate-x-1/2 -translate-y-1/2"
      >
        최신순
      </div>
      <img
        src={RadioButtonUncheckedImg}
        alt="Search Icon"
        className="absolute left-[1040px] top-[163px] w-[20px] h-[20px]
        -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="absolute left-[1085px] top-[163px]
        text-[#AA77B5] font-bold text-base
        -translate-x-1/2 -translate-y-1/2"
      >
        인기순
      </div>
      <Board left={74} top={200} height={320} title="자유게시판" />
      <Board left={650} top={200} height={320} title="꿀팁게시판" />

      <Post
        left={100}
        top={260}
        title="제목"
        author="작성자"
        date="2025.05.21"
        likes={12}
      />
      <Post
        left={100}
        top={330}
        title="제목"
        author="작성자"
        date="2025.05.21"
        likes={24}
      />
      <Post
        left={100}
        top={400}
        title="제목"
        author="작성자"
        date="2025.05.21"
        likes={36}
      />
      <Post
        left={100}
        top={470}
        title="제목"
        author="작성자"
        date="2025.05.21"
        likes={48}
      />
      <Post
        left={676}
        top={260}
        title="제목"
        author="작성자"
        date="2025.05.21"
        likes={12}
      />
      <Post
        left={676}
        top={330}
        title="제목"
        author="작성자"
        date="2025.05.21"
        likes={24}
      />
      <Post
        left={676}
        top={400}
        title="제목"
        author="작성자"
        date="2025.05.21"
        likes={36}
      />
      <Post
        left={676}
        top={470}
        title="제목"
        author="작성자"
        date="2025.05.21"
        likes={48}
      />

      {/* <h3>
        여기에 객체 네 개 정도 박아서 리스트 쫘라락 하는 거 상자 네 개로 순위
        같은 거 만들어 놓고, 거기 코드 누르면 성립하게 여기에다 게시판
        만들어야지!
      </h3> */}
    </div>
  );
}
