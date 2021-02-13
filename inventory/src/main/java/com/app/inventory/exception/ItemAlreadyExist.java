package com.app.inventory.exception;

import java.text.MessageFormat;

public class ItemAlreadyExist extends RuntimeException{
	
	public ItemAlreadyExist(String name) {
		super(MessageFormat.format("Item {0} already exist in stock\nItem cannot be added again.", name));
	}

}
