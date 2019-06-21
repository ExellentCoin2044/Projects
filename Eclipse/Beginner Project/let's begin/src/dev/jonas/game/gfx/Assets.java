package dev.jonas.game.gfx;

import java.awt.image.BufferedImage;

public class Assets {

	public static BufferedImage tree, dirt, grass, stone, player;
	private static int width = 32, height = 32;

	public static void init() {
		SpriteSheet sheet = new SpriteSheet(ImageLoader.loadImage("/textures/sheet.png"));

		tree = sheet.crop(0, 0, width, height * 2);
		dirt = sheet.crop(width, 0, width, height);
		grass = sheet.crop(width * 2, 0, width, height);
		stone = sheet.crop(width * 3, 0, width, height);
		player = sheet.crop(width * 4, 0, width, height);
	}
}
