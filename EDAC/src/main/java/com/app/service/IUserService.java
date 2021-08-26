package com.app.service;



import com.app.dto.RegisterDto;
import com.app.pojos.User;

public interface IUserService {
	User findByEmailAndPassword(String email,String password);
	String ragisterUser( RegisterDto user);
	
}
