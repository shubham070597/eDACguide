           
 
import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class CollapsePage extends Component {
state = {
  collapseID: ""
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

render() {
  return (
      <div >
      
    <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse")}
      style={{ marginBottom: "1rem" }}
    >
      +Concepts of Programming
    </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p>
             
          Object Oriented Concepts, Operators, Conditional and Looping 
            Statements, Arrays
         
          </p>
        </MDBCollapse>
<div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse1")}
      style={{ marginBottom: "1rem" }}
    >
      +Operating System
    </MDBBtn>
        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID}>
          <p>
          Introduction to OS, Introduction to Linux, Shell Programming, Process,  Process scheduling 
            algorithms with examples, Threads, Concurrency Control
          </p>
        </MDBCollapse>
        <div></div>
    <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse2")}
      style={{ marginBottom: "1rem" }}
    >
      +Software Engineering
    </MDBBtn>
        <MDBCollapse id="basicCollapse2" isOpen={this.state.collapseID}>
          <p>
          Developing an application in a team, Issues developers
             face when working in a team, Introduction to code versioning system,
              Software Development Life Cycles, Requirements Engineering, Introduction 
              to Agile
             development model, Agile development components, Benefits of Agile model
          </p>
        </MDBCollapse>
<div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse3")}
      style={{ marginBottom: "1rem" }}
    >
      + Object Oriented Programming with Java
    </MDBBtn>
        <MDBCollapse id="basicCollapse3" isOpen={this.state.collapseID}>
          <p>
          Introduction to java, Features of java, JVM Architecture, JDK and its usage, Structure of java class, Operators, Control statements, 
            Static variables and methods, Accessing static variables and methods of different class

             Introduction to reference data types, Reference variables and methods, Constructors, initializing reference variables using constructors,
                  Heap memory and stack memory.

            Introduction to OOP concepts, Encapsulation, Inheritance: single & multilevel,
            Inheritance: Hierarchical, Polymorphism: Compile time and runtime polymorphism, Rules of overriding and overloading of methods, super and this keywords, Abstract class and abstract methods, Interface, Final variables, final methods and final class, Functional interface, New interface features, Arrays, Enumerations, Access modifiers, Packages and import statements, Static imports, Garbage collection in java.

            Requesting JVM to run garbage collection, Wrapper Classes and String Class,
            Exception Handling, Introduction to collections: Collection hierarchy, 
            List, Queue, Set and Map Collections, Set Collection, Map Collection, MultiThreading, 
            Synchronization.
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse4")}
      style={{ marginBottom: "1rem" }}
    >
      + Algorithms and Data Structures
    </MDBBtn>
        <MDBCollapse id="basicCollapse4" isOpen={this.state.collapseID}>
          <p>
          Developing an application in a team, Issues developers
             face when working in a team, Introduction to code versioning system,
              Software Development Life Cycles, Requirements Engineering, Introduction 
              to Agile
             development model, Agile development components, Benefits of Agile model
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse5")}
      style={{ marginBottom: "1rem" }}
    >
     + Database Technologies
    </MDBBtn>
        <MDBCollapse id="basicCollapse5" isOpen={this.state.collapseID}>
          <p>
             
Introduction to DBMS, Basic Database Terminology, Database Storage Architecture, 
Concept of Database Instance and Schema, Distributed Databases, 

Types of DBMS: Relational, Object Relational and NoSQL Databases, Data Models, Codd’s 
12 rules for RDBMS, Database Design, Entity-Relationship Diagram (ERD)

Introduction to SQL, Categories of SQL Commands: DDL, DML, DCL, DTL/TCL

Introduction to MySQL, MySQL Clients. SQL/MySQL Data Types, Database Constraints, 
Normalization, Need for Normalization Data Redundancy, Data Anomalies, Functional Dependency,
 Normal Forms with examples, Introduction to 4th and 5th NF, Need of Denormalization,
 LIKE Operator, DISTINCT, Sorting (Order by clause), IN/NOT IN, Relational Algebra Operations, 
 Aggregate Functions, Grouping Things Together, Joins, SQL Standard Syntax for Joins, Copying 
 table structure/data, Sequences, Subquery, Correlated Subquery, EXISTS/NOT EXISTS, 
 TCL Commands, DCL Commands, Views, Types of Views, Simple and Complex Views Indexes, Benefit 
 of Indexes, Type of Indexes, Temporary Tables, MySQL Storage Engines, ACID Properties, 
 Concurrency and Locks.

Introduction to MySQL Programming, Use of MySQL Programs, Introduction to Stored Procedures,
 Benefits of Stored Procedures, Procedure Parameters, Flow Control Statements, Using above statements 
 in Stored Procedures/ Functions, Conditional Statements, Example of each type of statement, Loop constructs,
  Functions with and without parameters, MySQL Built-in functions
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse6")}
      style={{ marginBottom: "1rem" }}
    >
     + Web Programming Technologies
    </MDBBtn>
        <MDBCollapse id="basicCollapse6" isOpen={this.state.collapseID}>
          <p>
          
  
  Architecture of Web, HTML, Cascading Style Sheets (CSS), Responsive Web Design, 
  JavaScript, jQuery, JavaScript Object Notation (JSON), Ajax,  Introduction to Node.js,
   Node.js Asynchronous Programming, Node.js Modules – fs and http, React, 
    Introduction to React-Redux 
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse7")}
      style={{ marginBottom: "1rem" }}
    >
     + Web-based Java Programming
    </MDBBtn>
        <MDBCollapse id="basicCollapse7" isOpen={this.state.collapseID}>
          <p>
          
  
  J2EE Overview, JDBC & Transaction Management, Servlets, Session, JSP,
   MVC, Hibernate Framework, What is Spring Framework, Overview of Spring Architecture,
    Spring Boot essentials, Spring Data Module, Spring AOP, Building REST 
    services with Spring
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse8")}
      style={{ marginBottom: "1rem" }}
    >
      + Aptitude & Communication
    </MDBBtn>
        <MDBCollapse id="basicCollapse8" isOpen={this.state.collapseID}>
          <p>
         
  
  Number Systems, Series & Cyclicity, Average, Percentage, Ratio & Proportion,
   Time & Work, Time & Wages (Mandays), Probability, Permutations & Combinations, 
   Profit & Loss, Time, Speed & Distance, Streams, Boats & Trains, Mixtures & Alligations,
    Puzzles, Data Interpretation,Syllogism, Coding & Decoding, Seating Arrangements, 
    Blood Relations, Ages, Clock, Calendar, Simple Interest & Compound Interest.
  
  Fundamentals of Communication, The Art of Communication, Personality Development,
   English Grammar, English Grammar, Correct usage of English, Common mistakes in English
    communication, Listening Skills, Reading Skills, Written Communication, Public Speaking,
     Presentation Skills, Group Discussions, Personal Interviews.
          </p>
        </MDBCollapse>
       
      </div>
    );
  }
}

export default CollapsePage;


 