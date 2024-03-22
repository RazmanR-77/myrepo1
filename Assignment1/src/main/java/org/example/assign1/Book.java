package org.example.assign1;

import java.time.LocalDate;


/**
 * //    Assign1day35 Assignment1
 * by RazmanR
 * date 17/3/2024
 */
public class Book {
  private LocalDate IssueDate;
  private LocalDate ExpectedReturnDate;
  private LocalDate ReturnDate;
  private final String title;

  private String author;
  private final long bookID; // ISBN identifier for books, 13 digit
  private int issuedTo;
  public Boolean isIssued;

  public  Book(String title, long bookId) {
    // constructor OOP of Book instance
    this.title = title;
    this.bookID = bookId;
    this.isIssued = false;
    this.author = "author"; // set default author
  }

  public  Book(String title, long bookId, String author)
  {
    // constructor OOP. set custom author
    this.title = title;
    this.bookID = bookId;
    this.isIssued = false;
    this.author = author;
  }

  public String getTitle() {
    return title;
  }

  public long getBookID() {
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