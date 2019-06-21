package dev.jonas.game.State;

import java.awt.Graphics;

import dev.jonas.game.Game;
import dev.jonas.game.Entities.Creatures.Creature;
import dev.jonas.game.Entities.Creatures.Player;
import dev.jonas.game.worlds.World;

public class GameState extends State {

	private World world;
	private Player player;

	public GameState(Game game) {
		super(game);

		world = new World(game, "res/worlds/world1.lvl");
		player = new Player(game, game.width / 2 - Creature.DEFAULT_CREATURE_WIDTH / 2,
				game.height / 2 - Creature.DEFAULT_CREATURE_HEIGHT / 2);
	}

	public void update() {
		world.update();
		player.update();
	}

	public void render(Graphics g) {
		world.render(g);

		player.render(g);
	}

}
