// Create our 'main' state that will contain the game
var mainState = {
    preload: function() {
      game.load.image('bird', 'assets/bird.png');
    },

    create: function() {
      game.stage.backgroundColor = '#BFC7FF';

      //this sets the gravity for the bird
      game.physics.startSystem(Phaser.Physics.ARCADE);

      //This displays the bird in a certain position
      this.bird = game.add.sprite(100,245, 'bird');

      //adds physics to the bird and is needed for movement
      game.physics.arcade.enable(this.bird);

      //gravity to make the bird fall
      this.bird.body.gravity.y = 1000;

      var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);


    },

    update: function() {
      // If the bird is out of the screen (too high or too low)
      // Call the 'restartGame' function
      if (this.bird.y < 0 || this.bird.y > 490)
            this.restartGame();
    },
      // Make the bird jump
  jump: function() {
      // Add a vertical velocity to the bird
      this.bird.body.velocity.y = -350;
  },

  // Restart the game
  restartGame: function() {
      // Start the 'main' state, which restarts the game
      game.state.start('main');
  },
};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');
