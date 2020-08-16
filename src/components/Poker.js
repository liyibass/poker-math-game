const suits = ["黑桃", "紅心", "方塊", "梅花"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const Poker = [];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    const card = {
      id: i * 13 + j + 1,
      suit: suits[i],
      number: numbers[j],
      value: j + 1,
      url: `${i * 13 + j + 1}`,
    };
    Poker.push(card);
  }
}

export default Poker;
