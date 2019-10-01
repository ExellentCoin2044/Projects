package dev.jonas.polytopia.entities;

public abstract class Creature extends Entity {

	protected int health;
	
	public Creature(float x, float y, int health) {
		super(x, y);
		this.health = health;
	}
	
}
