package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Transient;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class User extends BaseEntity {
	@Column(length = 30)
	private String fName;
	@Column(length = 30)
	private String lName;
	@Column(length = 30, nullable = true, unique = true)
	private String email;
	@Enumerated(EnumType.STRING)
	private Role role;
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password")
	@Column(length = 20, nullable = false)
	@JsonIgnore
	private String password;
	@Transient
	private String confPassword;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "courseId", nullable = false)
	@JsonIgnoreProperties("user") 
	private Course courseName;
	@Column(length = 30)
	private String phoneNo;
	@Column(length = 30)
	private String gender;
	@OneToMany(mappedBy = "userId",fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Quiz> quiz = new ArrayList<>();

	public User() {

	}

	public User(String fName, String lName, String email, String phoneNo, String gender, Role role, String password,
			String confPassword) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.role = role;
		this.password = password;
		this.confPassword = confPassword;
		this.phoneNo = phoneNo;
		this.gender = gender;
	}

	public User(String fName, String lName, String email, String phoneNo, Course courseId, Role role, String gender,
			String password, String confPassword) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.role = role;
		this.password = password;
		this.confPassword = confPassword;
		this.courseName = courseId;
		this.phoneNo = phoneNo;
		this.gender = gender;
	}

	public User(String fName, String lName, String email, Role role, String password, String confPassword,
			Course courseName, String phoneNo, String gender) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.role = role;
		this.password = password;
		this.confPassword = confPassword;
		this.courseName = courseName;
		this.phoneNo = phoneNo;
		this.gender = gender;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfPassword() {
		return confPassword;
	}

	public void setConfPassword(String confPassword) {
		this.confPassword = confPassword;
	}

	public Course getCourseName() {
		return courseName;
	}

	public void setCourseName(Course courseName) {
		this.courseName = courseName;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "User [fName=" + fName + ", lName=" + lName + ", email=" + email + ", role=" + role + ", courseName="
				+ courseName.getCourseName() + ", phoneNo=" + phoneNo + ", gender=" + gender + "]";
	}

}
