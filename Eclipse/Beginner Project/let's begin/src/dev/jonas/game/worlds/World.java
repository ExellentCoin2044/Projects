package dev.jonas.game.worlds;

import java.awt.Graphics;

import dev.jonas.game.Game;
import dev.jonas.game.tiles.Tile;
import dev.jonas.game.utils.Utils;

public class World {

	
	private Game game;
	private int width, height;
	private int spawnX, spawnY;
	private int[][] tiles;

	public World(Game game, String path) {
		this.game = game;
		loadWorld(path);
	}

	public void update() {

	}

	public void render(Graphics g) {
		for (int j = 0; j < height; j++) {
			for (int i = 0; i < width; i++) {
				getTile(i, j).render(g, i * Tile.TILEWIDTH, j * Tile.TILEHEIGHT);
			}
		}
	}

	public Tile getTile(int i, int j) {
		Tile t = Tile.tiles[tiles[i][j]];
		if (t != null)
			return t;
		return Tile.dirtTile;
	}

	private void loadWorld(String path) {
		String file = Utils.loadFileAsString(path);
		String[] tokens = file.split("\\s+");
		width = Utils.parseInt(tokens[0]);
		height = Utils.parseInt(tokens[1]);
		spawnX = Utils.parseInt(tokens[2]);
		spawnY = Utils.parseInt(tokens[3]);

		tiles = new int[width][height];
		for (int j = 0; j < height; j++) {
			for (int i = 0; i < width; i++) {
				tiles[i][j] = Utils.parseInt(tokens[(i + j * width) + 4]);
			}
		}
	}
}
