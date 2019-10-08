package dev.jonas.polytopia.entities;

import java.awt.Graphics;

import dev.jonas.polytopia.Game;
import dev.jonas.polytopia.gfx.Assets;

public class Player extends Creature{
	
	private Game game;

	public Player(Game game, float x, float y, int width, int height) {
		super(x, y, width, height);
		this.game = game;
	}
	
	public void update() {
		if (game.getKeyManager().up)
			y -= 1;
		
		if (game.getKeyManager().down)
			y += 1;
		
		if (game.getKeyManager().left)
			x -= 1;
		
		if (game.getKeyManager().right)
			x += 1;
	}
	
	public void render(Graphics g) {
		g.drawImage(Assets.player, (int) x, (int) y, null);
	}
	
}
