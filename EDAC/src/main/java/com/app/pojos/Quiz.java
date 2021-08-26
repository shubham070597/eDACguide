package com.app.pojos;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
@Entity
public class Quiz extends BaseEntity {
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name ="SubjctQuiz",nullable = false)
	private Subjects subjectId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name ="SubStud",nullable = false)
	private User userId;
	
	@OneToMany(mappedBy ="quizId",fetch = FetchType.LAZY)
	private List<Questions> QueList =new ArrayList<>();
	
	
	private LocalDateTime quizTime;
	
	public Quiz() {
		// TODO Auto-generated constructor stub
	}

	public Quiz(Subjects subjectId, User userId, List<Questions> queList, LocalDateTime quizTime) {
		super();
		this.subjectId = subjectId;
		this.userId = userId;
		QueList = queList;
		this.quizTime = quizTime;
	}

	public Subjects getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(Subjects subjectId) {
		this.subjectId = subjectId;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public List<Questions> getQueList() {
		return QueList;
	}

	public void setQueList(List<Questions> queList) {
		QueList = queList;
	}

	public LocalDateTime getQuizTime() {
		return quizTime;
	}

	public void setQuizTime(LocalDateTime quizTime) {
		this.quizTime = quizTime;
	}

	

}
