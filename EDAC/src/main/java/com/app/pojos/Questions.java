package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Questions extends BaseEntity {
	@ManyToOne
	@JoinColumn(name="quiz_que")
	private Quiz quizId;
	@Column(length = 30)
	private String que;
	@Column(length = 30)
	private String option1;
	@Column(length = 30)
	private String option2;
	@Column(length = 30)
	private String option3;
	@Column(length = 30)
	private String option4;
	@Column(length = 30)
	private String correctAns;

	public Questions() {
		// TODO Auto-generated constructor stub
	}

	public Questions(Quiz quizId, String quizQue, String option1, String option2, String option3, String option4,
			String correctAns) {
		super();
		this.quizId = quizId;
		this.que = quizQue;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.correctAns = correctAns;
	}

	public Quiz getQuizId() {
		return quizId;
	}

	public void setQuizId(Quiz quizId) {
		this.quizId = quizId;
	}

	public String getQuizQue() {
		return que;
	}

	public void setQuizQue(String quizQue) {
		this.que = quizQue;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public String getCorrectAns() {
		return correctAns;
	}

	public void setCorrectAns(String correctAns) {
		this.correctAns = correctAns;
	}

	@Override
	public String toString() {
		return "Questions [quizId=" + quizId + ", quizQue=" + que + ", option1=" + option1 + ", option2=" + option2
				+ ", option3=" + option3 + ", option4=" + option4 + ", correctAns=" + correctAns + "]";
	}

	

}
