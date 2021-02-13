package com.app.inventory.exception;

import java.text.MessageFormat;

public class ItemNotFoundException extends RuntimeException{
	
	public ItemNotFoundException(long id) {
		super(MessageFormat.format("Could not find item with id: {0} in system", id));
	}

}
