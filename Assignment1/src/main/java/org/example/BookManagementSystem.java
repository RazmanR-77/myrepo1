package org.example;

import java.util.Scanner;

import org.example.assign1.Book;

/**
 * //    Assign1day35 Assignment1
 * by RazmanR
 * date 17/3/2024
 */
public class BookManagementSystem {

    private static final int MAX_BOOKS = 10; //Maximum number of books in the system, can be customised here.

    private static Book[] books = new Book[MAX_BOOKS]; //new Book[100] is default

    private int bookCount; // Current count of books in the system
    private static int i = 0;   // index no of book  in array
    private static final int j = 0;

    // Constructor
    public BookManagementSystem() {
        books = new Book[MAX_BOOKS];
        bookCount = 0;
    }

    public static void main(String[] args) {
        //       bookBMS Library
        BookManagementSystem library = new BookManagementSystem();
        System.out.println();
        System.out.println(
                "WELCOME TO (BMS) BOOK MANAGEMENT SYSTEM. BY RazmanR 3/24");
        System.out.println("Starting up...Initialising...");

        // Adding books to the system
        library.addBook(new Book("The Great Gatsby",
                Long.parseLong("1000451524922"),
                "F. Scott Fitzgerald"));

        library.addBook(new Book("1984",
                Long.parseLong("1000451524935"), "George Orwell"));

        //  add book by Title text, and increase id by 1
        library.addBook("Agile Web Development");
        library.addBook("Web Development");
        library.addBook("Flask Web Development");

        // add book by custom title from user input
        Scanner sc = new Scanner(System.in);
        //        add book
        library.addBook(sc);
        library.listBooks();

        library.   findBookByTitle(sc);

        //PAUSE Enter any key to end
        System.out.println("BOOKMS: Enter any key");
        sc.next();


    }

    private static void findBookByTitle(Scanner sc) {
        System.out.println();

        ///find by title
        //
        System.out.println("FIND: Enter Title of book? press enter : ");
        String input = sc.nextLine();

        boolean found = false;
        try {
            for (Book thisBook : books) {
//         -try find substring   "abc"  of title ,
                if (thisBook.getTitle().toLowerCase().indexOf(input.toLowerCase()) >= 0) {
                    System.out.println("FIND: found the book!");
                    System.out.println(thisBook.getTitle());
                    System.out.println("Author: " + thisBook.getAuthor());
                    System.out.println("ISBN: " + thisBook.getBookID());
                    found = true;
                    break;
                }

            }
            if (!found) {
                System.out.println("FIND: title not found. Please try again");

            }
        } catch (Exception e) {
            // to handle any nulls
//            throw new RuntimeException(e);

        } finally {
            //PAUSE press any key
            if (!found) {
                System.out.println("FIND: title not found. Please try again");

            }

            System.out.println();
            System.out.println("Enter any key");
            sc.next();
        }
    }

    private static void listBooks() {
        System.out.println();
        System.out.println("LIST: Books are : ");
        int numberOfBooks = i;
        for (int j = 0; j < numberOfBooks; j++) {
            System.out.println(books[j].getTitle());
        }
    }

    private static void addBook(Scanner sc) {
        System.out.println();
        System.out.println("ADD: Enter name of book");
        String title = sc.nextLine();
        Book book = new Book(title, i + 1);
        books[i] = book;
        i++;
        System.out.println("Book added ISBN : " + books[i - 1].getBookID());
    }

    private static void addBook(String title) {
//        overloading overriding
        System.out.println("ADD: Enter name of book");
        Book book = new Book(title, i + 1);
        books[i] = book;
        i++;
        System.out.println("Book added ISBN : " + books[i - 1].getBookID());
    }

    private static void addBook(Book book) {
        System.out.println("ADD:  ");

        books[i] = book;
        i++;
        System.out.println("Book added ISBN : " + books[i - 1].getBookID());
    }

    public int getBookCount() {
        return bookCount;
    }

    public void setBookCount(int bookCount) {
        this.bookCount = bookCount;
    }


    private static void handleResponse(int answer, Scanner sc) {
        // for next update.
        //input screen for user
        switch (answer) {
            case 1:   // AddBook(sc);
                break;
            case 2: //AddMember(sc);
                break;
            case 3:// IssueBook(sc);
                break;
            case 4: //findbook(sc);
                break;
            case 5: //DisplayMembers();
                break;
            case 6: //listbook();
                break;
            case 7:// ReturnBook(sc);
                break;
        }
    }


}
