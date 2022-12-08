let gameRuleset = {
    diceNumber: 1,
    maxAttempts: 1
  };
  
  let firstCat = {
    name: 'Кекс',
    points: 0
  };
  
  let secondCat = {
    name: 'Рудольф',
    points: 0
  };
  
  let thirdCat = {
    name: 'Рокки',
    points: 0
  };
  
  let cats = [firstCat, secondCat, thirdCat];
  
  let runGame = function (ruleset, players) {
    for (let currentAttempt = 1; currentAttempt <= ruleset.maxAttempts; currentAttempt++) {
      for (let i = 0; i < players.length; i++) {
        let throwResult = keks.throwDice(ruleset.diceNumber, ruleset.diceNumber * 6);    // функция кекс была только в тренажере
        players[i].points += throwResult;
        console.log(players[i].name + ' выбросил ' + players[i].points);
      }
    }
    return players;
  };
  
  let getWinners = function (players) {
    let winners = [];
    let max = players[0];
  
    for (let i = 0; i < players.length; i++) {
      let currentPlayer = players[i];
      if (currentPlayer.points > max.points) {
        max = currentPlayer;
        winners = [max];
      } else {
        if (currentPlayer.points === max.points) {
          winners.push(currentPlayer);
        }
      }
    }
  
    return winners;
  };
  
  
  let printWinners = function (players, winners) {
    if (players.length === winners.length) {
      console.log('Все коты как на подбор!');
      return;
    }
  
    let message = 'Победил ';
    if (winners.length > 1) {
      message = 'Победили ';
    }
  
    for (let i = 0; i < winners.length; i++) {
      if (i >= 1) {
        message += ", ";
      }
      message += winners[i].name;
    }
  
    message += ' с количеством очков: ' + winners[0].points;
  
    console.log(message);
  };
  
  cats = runGame(gameRuleset, cats);
  let tops = getWinners(cats);
  printWinners(cats, tops);
  