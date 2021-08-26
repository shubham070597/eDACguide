package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	@Query("select u from User u left outer join fetch u.courseName where u.email=:em and u.password=:pass")
	User loginStudent(@Param("em") String email, @Param("pass") String password);


}
