package org.example.assign1;

import java.time.LocalDate;

public class Book {
  private LocalDate IssueDate;
  private LocalDate ExpectedReturnDate;
  private LocalDate ReturnDate;
  private final String title;

  private String author;
  private final int bookID; // ISBN identifier for books
  private int issuedTo;
  public Boolean isIssued;

  public  Book(String title, int bookId) {
    // constructor OOP
    this.title = title;
    this.bookID = bookId;
    this.isIssued = false;
    this.author = "author";
  }


  public String getTitle() {
    return title;
  }

  public int getBookID() {
    return bookID;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public void setIssuedTo(int issuedTo) {
    this.issuedTo = issuedTo;
  }

  public int getIssuedTo() {
    return issuedTo;
  }

  LocalDate getIssueDate() {
    return IssueDate;
  }

  public LocalDate getExpectedReturnDate() {
    return ExpectedReturnDate;
  }

  // future version update, using Member
//  void Issue(int id, Member member) {
//    member.setIssued(this.bookID);
//    member.canIssue = false;
//    this.setIssuedTo(id);
//    this.isIssued = true;
//    IssueDate = LocalDate.now();
//    ExpectedReturnDate = LocalDate.now().plusDays(7);
//  }
//
//  public void ReturnBook(Member member){
//    this.ReturnDate = LocalDate.now();
//    this.isIssued = false;
//    this.setIssuedTo(-1);
//    member.setIssued(-1);
//    member.canIssue = true;
//  }

  public void setReturnDate(LocalDate returnDate) {
    this.ReturnDate = returnDate;
  }

  LocalDate getReturnDate() {
    return ReturnDate;
  }
}