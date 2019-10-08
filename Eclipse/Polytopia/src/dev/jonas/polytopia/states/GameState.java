package dev.jonas.polytopia.states;

import java.awt.Graphics;

import dev.jonas.polytopia.Game;
import dev.jonas.polytopia.entities.Player;

public class GameState extends State {
	
	private Player player;

	public GameState(Game game) {
		super(game);
		player = new Player(game, 50, 50, 0, 0);
	}
	
	public void update() {
		player.update();
	}

	public void render(Graphics g) {
		player.render(g);
	}

	
	
}
