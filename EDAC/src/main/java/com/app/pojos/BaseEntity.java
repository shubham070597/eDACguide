package com.app.pojos;

import javax.persistence.MappedSuperclass;
import javax.persistence.*;
@MappedSuperclass
public class BaseEntity {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer Id;
public BaseEntity() {
	
}

public Integer getId() {
	return Id;
}

public void setId(Integer id) {
	Id = id;
}

}
