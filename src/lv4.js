//level 4 of the game
aotb_game.lv4 = function(){

  var pgame = this;
  var levelbase;

  this.preload = function(){
    levelbase = new aotb_game.levelbase(pgame);
  };

  this.create = function(){

    levelbase.create(true);

    levelbase.displayText("Fourth Night", 1, function(){
        pgame.add.tween(notificationText).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        notificationText.destroy();
    });
  };

  this.update = function(){
    levelbase.defaultUpdate();
    levelbase.bulletUpdate();
  };

  this.shutdown = function(){
    levelbase.shutdown();
  }
};