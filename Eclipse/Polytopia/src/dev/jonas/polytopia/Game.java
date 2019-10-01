package dev.jonas.polytopia;

import java.awt.Graphics;
import java.awt.image.BufferStrategy;

import dev.jonas.polytopia.display.Display;
import dev.jonas.polytopia.gfx.Assets;
import dev.jonas.polytopia.input.KeyManager;
import dev.jonas.polytopia.states.GameState;
import dev.jonas.polytopia.states.State;

public class Game implements Runnable {

	private Display display;
	public int width, height;
	public String title;
	
	private Thread thread;
	private boolean running = false;
	
	private BufferStrategy bs;
	private Graphics g;
	
	private State gameState;
	
	private KeyManager keyManager;
	
	public Game(String title, int width, int height) {
		this.width = width;
		this.height = height;
		this.title = title;
	}
	
	private void init() {
		keyManager = new KeyManager();
		
		display = new Display(title, width, height);
		display.getFrame().addKeyListener(keyManager);
		
		Assets.init();
		
		gameState = new GameState(this);
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
		
		//Cleaning the screen!
		g.clearRect(0, 0, width, height);
		
		//Draw Here!
		
		if (State.getState() != null)
			State.getState().render(g);
		
		//End drawing!
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
		int updates = 0;
		while (running) {
		    long now = System.nanoTime();
		    delta += (now - lastTime) / ns;
		    lastTime = now;
		    while (delta >= 1) {
		        update();
		        updates++;
		        delta--;
		    }
		    render();
		    frames++;

		    if (System.currentTimeMillis() - timer > 1000) {
		        timer += 1000;
		        System.out.println("Frames: " + frames + " and updates: " + updates);
		        frames = 0;
		        updates = 0;
		    }
		}
		
		stop();
	}
	
	public KeyManager getKeyManager() {
		return keyManager;
	}
	
	public synchronized void start() {
		if (!running) {
			thread = new Thread(this);
			thread.start();
			running = true;
		}
	}
	
	public synchronized void stop() {
		if(running) {
			try {
				thread.join();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			running = false;
		}
	}
}
