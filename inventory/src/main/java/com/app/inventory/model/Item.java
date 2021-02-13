package com.app.inventory.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.app.inventory.model.dto.ItemDto;

import lombok.Data;

@Data
@Entity
public class Item {

	@Id
	private long id;
	private String name;
	private int amount;
	private String code;
	private int withdraw;
	private int deposit;

	public static Item from(ItemDto itemDto) {
		Item item = new Item();
		item.setName(itemDto.getName());
		item.setAmount(itemDto.getAmount());
		item.setCode(itemDto.getCode());
		item.setDeposit(itemDto.getDeposit());
		item.setWithdraw(itemDto.getWithdraw());
		return item;
	}
	public void setId(long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public int getWithdraw() {
		return withdraw;
	}

	public int getDeposit() {
		return deposit;
	}
	
	public void setWithdraw(int withdraw) {
		this.withdraw = withdraw;
	}
	public void setDeposit(int deposit) {
		this.deposit = deposit;
	}



	@Override
	public String toString() {
		return "Item [id=" + id + ", name=" + name + ", amount=" + amount + ", code=" + code + ", withdraw=" + withdraw
				+ ", deposit=" + deposit + "]";
	}

}
