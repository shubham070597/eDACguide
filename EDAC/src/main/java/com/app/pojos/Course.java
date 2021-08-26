package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name = "course")
public class Course extends BaseEntity {
	@Column(name = "courseName",length = 20)
	private String courseName;
	private  LocalDate startDate;
	private LocalDate endDate;
	private int duration;
	@OneToMany(mappedBy = "courseName",fetch = FetchType.EAGER,cascade = CascadeType.ALL,orphanRemoval = true)
	@JsonIgnoreProperties("course") 
	private List<User> students = new ArrayList<>();
	@OneToMany(mappedBy = "courseId",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Subjects>subjects = new ArrayList<>();
	public Course() {
		
	}

	public Course(String courseName, LocalDate startDate, LocalDate endDate, int duration) {
		super();
		this.courseName = courseName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.duration = duration;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	@Override
	public String toString() {
		return "Course [courseName=" + courseName + ", startDate=" + startDate + ", endDate=" + endDate + ", duration="
				+ duration + "]";
	}
	
	public void addStudents(User user){
		students.add(user);
		user.setCourseName(this);
	}
	

}
