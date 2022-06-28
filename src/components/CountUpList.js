import { useCountAnimation } from "./useCountAnimation";
export default function CountUpList() {
  const countItem = {
    0: useCountAnimation(350),
    1: useCountAnimation(21),
    2: useCountAnimation(650),
  };

  const countUp_texts = [
    {
      boldText: "만 명",
      normalText: "의 사용자",
    },
    {
      boldText: "만 개",
      normalText: "의 리뷰",
    },
    {
      boldText: "만 개",
      normalText: "의 저장",
    },
  ];
  return (
    <div className="countup">
      {countUp_texts.map((item, index) => (
        <div key={item.boldText}>
          <strong {...countItem[index]}>0</strong>
          <strong>{item.boldText}</strong>
          <span>{item.normalText}</span>
        </div>
      ))}
    </div>
  );
}
