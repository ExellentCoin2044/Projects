package dev.jonas.game.Entities.Creatures;

import dev.jonas.game.Game;
import dev.jonas.game.Entities.Entity;

public abstract class Creature extends Entity {

	public static final int DEFAULT_HEALTH = 10;
	public static final float DEFAULT_SPEED = 3.0f;
	public static final int DEFAULT_CREATURE_WIDTH = 64, DEFAULT_CREATURE_HEIGHT = 64;

	protected int health;
	protected float speed;
	protected float xMove, yMove;

	public Creature(float x, float y, int width, int height, Game game) {
		super(x, y, width, height, game);
		health = DEFAULT_HEALTH;
		speed = DEFAULT_SPEED;

		xMove = 0;
		yMove = 0;
	}

	public void move() {
		x += xMove;
		y += yMove;
	}

}
