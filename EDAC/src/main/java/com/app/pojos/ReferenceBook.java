package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "reference_book")
public class ReferenceBook extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="subjectRef",nullable = false)
	private Subjects subjectId;
    @Column(length = 30)
	private String bookName;
    @Column(length = 30)
	private String author;
    @Column(length = 30)
	private String link; 
	public ReferenceBook() {
		// TODO Auto-generated constructor stub
	}
	
	public ReferenceBook(Subjects subjectId, String bookName, String author, String link) {
		super();
		this.subjectId = subjectId;
		this.bookName = bookName;
		this.author = author;
		this.link = link;
	}

	public Subjects getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(Subjects subjectId) {
		this.subjectId = subjectId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}

	@Override
	public String toString() {
		return "ReferenceBook [subjectId=" + subjectId + ", bookName=" + bookName + ", author=" + author + ", link="
				+ link + "]";
	}
	
}
