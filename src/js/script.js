(function() {
  'use strict';

  const game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    start: function(){
      game.startTime = new Date().getTime();
      document.body.onkeypress = game.stop;
      console.log('START しました');
    },
    stop() {
      const currentTime = new Date().getTime();
      const seconds = (currentTime - game.startTime) / 1000;

      if(9.5 <= seconds && seconds <= 10.5) {
        game.displayArea.innerText = seconds + '秒でした。すごい！'
      } else {
        game.displayArea.innerText = seconds + '秒でした。残念…。'
      }
      console.log('STOP しました');
    }
  };

  if(confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
    game.start();
  }

})();