package dev.jonas.game;

import java.awt.Graphics;
import java.awt.image.BufferStrategy;

import dev.jonas.game.Display.Display;
import dev.jonas.game.State.GameState;
import dev.jonas.game.State.MenuState;
import dev.jonas.game.State.SettingState;
import dev.jonas.game.State.State;
import dev.jonas.game.gfx.Assets;
import dev.jonas.game.input.KeyManager;

public class Game implements Runnable {

	private Display display;
	private String title;
	public int width, height;

	private Thread thread;
	private boolean running = false;

	private BufferStrategy bs;
	private Graphics g;

	private State gameState;
	private State menuState;
	private State settingState;

	private KeyManager keyManager;

	public Game(String title, int width, int height) {
		this.title = title;
		this.width = width;
		this.height = height;
	}

	private void init() {
		keyManager = new KeyManager();
		display = new Display(title, width, height);
		display.getFrame().addKeyListener(keyManager);
		Assets.init();

		gameState = new GameState(this);
		menuState = new MenuState(this);
		settingState = new SettingState(this);
		State.setState(gameState);
	}

	private void update() {
		keyManager.update();

		if (State.getState() != null)
			State.getState().update();
	}

	private void render() {
		bs = display.getCanvas().getBufferStrategy();
		if (bs == null) {
			display.getCanvas().createBufferStrategy(3);
			return;
		}

		g = bs.getDrawGraphics();

		// CLEAN THE SCREEN!!!
		g.clearRect(0, 0, width, height);
		// DRAW HERE!!!

		if (State.getState() != null)
			State.getState().render(g);

		// END DRAWING!!!

		bs.show();
		g.dispose();
	}

	public void run() {
		init();

		long lastTime = System.nanoTime();
		double amountOfTicks = 60.0;
		double ns = 1000000000 / amountOfTicks;
		double delta = 0;
		long timer = System.currentTimeMillis();
		int frames = 0;
		while (running) {
			long now = System.nanoTime();
			delta += (now - lastTime) / ns;
			lastTime = now;
			while (delta >= 1) {
				update();
				delta--;
			}
			render();
			frames++;

			if (System.currentTimeMillis() - timer > 1000) {
				timer += 1000;
				frames = 0;
			}
		}

		stop();
	}

	public KeyManager getKeyManeger() {
		return keyManager;
	}

	public synchronized void start() {
		if (!running) {
			thread = new Thread(this);
			thread.start();
			running = true;
		}

		stop();
	}

	public synchronized void stop() {
		if (running) {
			try {
				thread.join();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

}
