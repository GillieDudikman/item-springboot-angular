package com.app.inventory.model.dto;

import com.app.inventory.model.Item;

import lombok.Data;

@Data
public class ItemDto {
	private long id;
	private String name;
	private int amount;
	private String code;
	private int withdraw;
	private int deposit;

	public static ItemDto from(Item item) {
		ItemDto itemDto = new ItemDto();
		itemDto.setId(item.getId());
		itemDto.setName(item.getName());
		itemDto.setAmount(item.getAmount());
		itemDto.setCode(item.getCode());
		itemDto.setDeposit(item.getDeposit());
		itemDto.setWithdraw(item.getWithdraw());
		return itemDto;
	}

	private void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public String getCode() {
		return code;
	}

	public void setAmount(int amount) {
		this.amount = amount;

	}

	public int getAmount() {
		return amount;
	}

	public void setName(String name) {
		this.name = name;

	}

	public long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getWithdraw() {
		return withdraw;
	}

	public void setWithdraw(int withdraw) {
		this.withdraw = withdraw;
	}

	public int getDeposit() {
		return deposit;
	}

	public void setDeposit(int deposit) {
		this.deposit = deposit;
	}

}
