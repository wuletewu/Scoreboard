 const scores = { home: 12, guest: 5 };

    function addScore(team, pts) {
      scores[team] += pts;
      document.getElementById(team + '-score').textContent = scores[team];
    }