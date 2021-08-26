package com.app.dto;

import com.app.pojos.Course;

public class RegisterDto {
	private String fName;
	private String lName;
	private String email;
	private String phoneNo;
	private String password;
	private String confPassword;
	private int courseId;
	private String gender;

	public RegisterDto() {
		
	}

	public RegisterDto(String fName, String lName, String email, String phoneNo, Course courseId,
			String gender, String password, String confPassword) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.phoneNo = phoneNo;
		this.password = password;
		this.confPassword = confPassword;
		
		this.gender = gender;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
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

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
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


	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return String.format(
				"RegisterDto [fName=%s, lName=%s, email=%s, phoneNo=%s, password=%s, confPassword=%s, courseId=%s, gender=%s]",
				fName, lName, email, phoneNo, password, confPassword, courseId, gender);
	}

	
}
