package com.app.inventory.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.inventory.exception.ItemNotFoundException;
import com.app.inventory.model.Item;
import com.app.inventory.model.dto.ItemDto;
import com.app.inventory.service.ItemService;

@RestController
@RequestMapping("/items")
public class ItemController {

	private static ItemService itemService;

	@Autowired
	public ItemController(ItemService itemService) {
		this.itemService = itemService;
	}

	@GetMapping("/all")
	public ResponseEntity<List<ItemDto>> getItems() {
		try {
		List<Item> items = itemService.getItems();
		List<ItemDto> itemsDto = items.stream().map(ItemDto::from).collect(Collectors.toList());
		return new ResponseEntity<>(itemsDto, HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity(e.getMessage().toString().replace(",", ""), HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/add")
	public ResponseEntity<ItemDto> addItem(@RequestBody final ItemDto itd) {
		try {
		Item item = itemService.addItem(Item.from(itd));
		return new ResponseEntity<>(ItemDto.from(item), HttpStatus.OK);
		}catch (Exception e){
			return new ResponseEntity(e.getMessage().toString().replace(",", ""), HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping(value = "/get/{id}")
	public ResponseEntity<ItemDto> getItem(@PathVariable final long id) {
		try {
			Item item = itemService.getItem(id);
			return new ResponseEntity<>(ItemDto.from(item), HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity(e.getMessage().toString().replace(",", ""), HttpStatus.BAD_REQUEST);
		}
	}

	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<ItemDto> deleteItem(@PathVariable final long id) {
		try {
		Item item = itemService.deleteItem(id);
		return new ResponseEntity<>(ItemDto.from(item), HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity(e.getMessage().toString().replace(",", ""), HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping(value = "/addToItem")
	public ResponseEntity<ItemDto> addToItem(@RequestBody final ItemDto itd) {
		try {
		Item editItem = itemService.addToAmount(itd.getId(),itd.getAmount());
		return new ResponseEntity<>(ItemDto.from(editItem), HttpStatus.OK); 
		}catch(Exception e){
			return new ResponseEntity(e.getMessage().toString().replace(",", ""), HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping(value = "/removeFromItem")
	public ResponseEntity<ItemDto> RemoveFromItem(@RequestBody final ItemDto itd) {
		try {
		Item editItem = itemService.deleteAmount(itd.getId(),itd.getAmount());
		return new ResponseEntity<>(ItemDto.from(editItem), HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity(e.getMessage().toString().replace(",", ""), HttpStatus.BAD_REQUEST);
	}


	}
}
