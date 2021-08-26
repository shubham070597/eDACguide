package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginDto;
import com.app.dto.RegisterDto;
import com.app.pojos.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	private IUserService service;
	public UserController() {
		System.out.println("In C tor "+getClass().getName());
	}

	@PostMapping("/login")
	public User LoginUser(@RequestBody LoginDto request) {
		System.out.println("is working :"+request);
		User user =service.findByEmailAndPassword(request.getEmail(), request.getPassword());
		System.out.println("working :"+request);
		return user;
		
	}
	@PostMapping("/register")
	public String registerUser( @RequestBody RegisterDto request) {
		System.out.println("is working in reg :"+request);
		service.ragisterUser(request);
		System.out.println("working  in reg :"+request);
		return service.ragisterUser(request);
	}
	
}
