package dev.jonas.game.Entities.Creatures;

import java.awt.Graphics;

import dev.jonas.game.Game;
import dev.jonas.game.gfx.Assets;

public class Player extends Creature {

	public Player(Game game, float x, float y) {
		super(x, y, Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT, game);
	}

	public void update() {
		getInput();
		move();
	}

	private void getInput() {
		xMove = 0;
		yMove = 0;

		if (game.getKeyManeger().up)
			yMove = -speed;
		if (game.getKeyManeger().down)
			yMove = speed;
		if (game.getKeyManeger().left)
			xMove = -speed;
		if (game.getKeyManeger().right)
			xMove = speed;
	}

	public void render(Graphics g) {
		g.drawImage(Assets.player, (int) x, (int) y, width, height, null);
	}

}
