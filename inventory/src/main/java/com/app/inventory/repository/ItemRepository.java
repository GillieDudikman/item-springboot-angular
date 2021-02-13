package com.app.inventory.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.inventory.model.Item;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {

}
