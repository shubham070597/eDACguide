package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CourseRepository;
import com.app.dao.UserRepository;
import com.app.dto.RegisterDto;
import com.app.pojos.Course;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserService implements IUserService {

	@Autowired
	private UserRepository repository;
	@Autowired
	private CourseRepository courseRepo;

	@Override
	public User findByEmailAndPassword(String email, String password) {
		System.out.println("Email:" + email + "password" + password);
		return repository.loginStudent(email, password);
	}

	@Override
	public String ragisterUser(RegisterDto user) {
		System.out.println("in service "+user);
		
		Course c =courseRepo.findById(user.getCourseId()).get();
		System.out.println("in service "+c);
		c.addStudents(new User(user.getfName(),user.getlName(),user.getEmail(),user.getPhoneNo(),user.getGender(),Role.STUDENT,user.getPassword(),user.getConfPassword()));
	
		return "Registor Successfully with name:"+user.getfName();
	}

}