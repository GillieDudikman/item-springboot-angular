package com.app.inventory.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.inventory.exception.AmountLessThanZero;
import com.app.inventory.exception.ItemAlreadyExist;
import com.app.inventory.exception.ItemNotFoundException;
import com.app.inventory.model.Item;
import com.app.inventory.repository.ItemRepository;

@Service
public class ItemService {

	private final ItemRepository itemRepository;

	@Autowired
	public ItemService(ItemRepository itemRepository) {
		this.itemRepository = itemRepository;
	}

	public List<Item> getItems() {
		return StreamSupport.stream(itemRepository.findAll().spliterator(), false).collect(Collectors.toList());
	}

	@Transactional
	public Item addItem(Item item) {
		if (getItems().size() == 0) {
			item.setId(1);
			item.setDeposit(1);
			itemRepository.save(item);
			return item;
		} else {
			for (int i = 0; i < getItems().size(); i++) {
				Item m = getItems().get(i);
				if (m.getCode().equals(item.getCode()) && m.getName().equals(item.getName())) {
					throw new ItemAlreadyExist(m.getName());
				} else if (i + 1 >= getItems().size()) {
					item.setId(m.getId() + 1);
					item.setDeposit(1);
					return itemRepository.save(item);
				}
			}
			return item;

		}

	}

	public Item getItem(long id) {
		return itemRepository.findById(id).orElseThrow(() -> new ItemNotFoundException(id));
	}

	@Transactional
	public Item deleteItem(long id) {
		Item item = getItem(id);
		itemRepository.delete(item);
		return item;
	}

	@Transactional
	public Item addToAmount(long id, int amount) {
		Item itemToUpdate = getItem(id);
		itemToUpdate.setAmount(itemToUpdate.getAmount() + amount);
		itemToUpdate.setDeposit(itemToUpdate.getDeposit()+1);
		return itemToUpdate;
	}

	@Transactional
	public Item deleteAmount(long id, int amount) {
		Item itemToUpdate = getItem(id);
		if(itemToUpdate.getAmount() - amount < 0) 
			throw new AmountLessThanZero(itemToUpdate.getName());
		else {
		itemToUpdate.setAmount(itemToUpdate.getAmount()-amount);
		itemToUpdate.setWithdraw(itemToUpdate.getWithdraw()+1);
		return itemToUpdate;
		}


	}
}
