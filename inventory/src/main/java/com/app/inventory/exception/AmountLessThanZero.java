package com.app.inventory.exception;

import java.text.MessageFormat;

public class AmountLessThanZero extends RuntimeException{
	
	public AmountLessThanZero(String name) {
		super(MessageFormat.format("Amount of Item {0} after update will be less than zero, update suspend", name));
	}

}
