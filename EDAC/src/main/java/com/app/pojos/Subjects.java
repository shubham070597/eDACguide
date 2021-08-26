package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "subject")
public class Subjects extends BaseEntity{
	@Column(length = 20)
	private String subjectName;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name ="CourseSubj",nullable = false)
	private Course courseId;
	
	@OneToMany(mappedBy = "subjectId",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<ReferenceBook> refBook= new ArrayList<>();
	
	@OneToMany(mappedBy = "subjectId",cascade = CascadeType.ALL,orphanRemoval =true )
	private List<Quiz> quiz =new ArrayList<>();
	
	public Subjects() {
		// TODO Auto-generated constructor stub
	}
	public Subjects(String subjectName, Course courseId) {
		super();
		this.subjectName = subjectName;
		this.courseId = courseId;
	}
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public Course getCourseId() {
		return courseId;
	}
	public void setCourseId(Course courseId) {
		this.courseId = courseId;
	}
	@Override
	public String toString() {
		return "Subjects [subjectName=" + subjectName + ", courseId=" + courseId + "]";
	}

	

}
