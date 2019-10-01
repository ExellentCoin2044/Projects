package dev.jonas.polytopia.gfx;

import java.awt.image.BufferedImage;

public class Assets {

	public static BufferedImage player, tree;
	
	public static void init() {
		SpriteSheet sheet = new SpriteSheet(ImageLoader.loadImage("/textures/sheet.png"));
		
		player = sheet.crop(11, 11, 200, 180);
		tree = sheet.crop(215, 11, 326, 342);
	}
	
}
