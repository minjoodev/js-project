const quotes = [
  {
    quote: "The goal of life is living in agreement with nature.",
    author: "Zeno",
  },
  {
    quote:
      "인간사에는 안정된 것이 하나도 없음을 기억하라. 그러므로 성공에 들뜨거나 역경에 지나치게 의기소침하지 마라.",
    author: "소크라테스",
  },
  {
    quote: "우리가 노력 없이 얻는 거의 유일한 것은 노년이다.",
    author: "글로리아 피처",
  },
  {
    quote: "꺼지지 않을 불길로 타올라라.",
    author: "루이사 시게아",
  },
  {
    quote:
      "우리가 바로 이 시대의 유행이기 때문에 우리 자신으로부터 탈피할 수 없다.",
    author: "커트 코베인",
  },
  {
    quote: "아무런 위험없이 승리하는 것은 영광없는 승리에 다름 아니다.",
    author: "피에르 코르네유",
  },
  {
    quote:
      "나를 믿어라. 인생에서 최대의 성과와 기쁨을 수확하는 비결은 위험한 삶을 사는 데 있다.",
    author: "프레드리히 니체",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "책으로 한 나라의 상당 부분을 다닐 수 있다.",
    author: "앤드루 랭",
  },
  {
    quote:
      "인간의 감정은 누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.",
    author: "장 폴 리히터",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// round: 1.4까지 1이고 1.5부터 2
// ceil(천장): 1.0만 1이고 1.1부터는 2
// floor(마루): 1.99999여도 1

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
