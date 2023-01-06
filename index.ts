// Import stylesheets
import './style.css';
class Categories {
  chance() {console.log("h")}
  yahzee() {}
  ottffs() {}
  pair() {}
  twoPairs() {}
  twoOfaKind() {}
  threeOfaKind() {}
  smallStraight() {}
  largeStraight() {}
  fullHouse() {}
}
let categoriesResult = new Categories();
const getScores = (playerDiceResults: number[]) => {
  
  const searchScoreBycategorie = (lookUpScoreType:unknown, defaultScore:any = 0) => (category_expression) =>
    (lookUpScoreType[category_expression] || lookUpScoreType[defaultScore])();
};

const scores = {
  chance:categoriesResult.chance,
  yahzee:9,
  ottffs:6,
  pair:0,
  twoPairs:0,
  twoOfaKind:9,
  threeOfaKind:7,
  smallStraight:9,
  largeStraight:9,
  fullHouse:8,
}

console.log(scores['chance']())