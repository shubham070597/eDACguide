           
 
import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class DmcPage extends Component {
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
      <>
      
    <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse")}
      style={{ marginBottom: "1rem" }}
    >
      + Operating Systems Concepts
    </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p>
             
          OS Concepts: Introduction to Operating System, Processes Architecture, 
          Multithreading, CPU Scheduling and Synchronization, Memory management
           Linux Programming: Introduction Linux Architecture, Basic Commands, 
           Linux Shell Programming.
         
          </p>
        </MDBCollapse>
<div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse1")}
      style={{ marginBottom: "1rem" }}
    >
      + Introduction to DBMS
    </MDBBtn>
        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID}>
          <p>
          Need of RDBMS Client/Server, Computing Codd’s Rules, Data Models, 
          Normalization Techniques, ER Diagrams, Data Flow Diagrams, SQL: DDL, DML, DCL, Sub query Joins, 
          SQL Functions, Stored Procedures, NoSQL concepts, Introduction to MongoDB.
          </p>
        </MDBCollapse>
        <div></div>
    <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse2")}
      style={{ marginBottom: "1rem" }}
    >
      + Algorithms and Data Structures
    </MDBBtn>
        <MDBCollapse id="basicCollapse2" isOpen={this.state.collapseID}>
          <p>
          Introduction to STL (Standard Type Libraries), Define the problem, Find Creative Solutions using creativity tools, Evaluate and Select solution, Implementing Decisions, Algorithm Design and Analysis, Analyzing time and space complexity.

Basic Data Structures: Arrays, Stacks, Queues (Circular Queues, Priority Queues, Dequeues), Linked lists (Single, Double and Circular Linked Lists), 

Trees and Applications: Tree traversals, Ordered Trees, Binary trees, Complete Binary Trees, Search trees, Binary Search Trees, Self-Balancing Trees

Searching , sorting algorithms: Sequential Search, Binary Search, Selection sort, Insertion sort, Bubble sort, Heap sort, Merge sort, Quick sort

Hash Functions and Hash Tables

Graph and Applications: Graph traversal algorithms (BFS, DFS), Dijkstra’s Algorithm, Bellman Ford Algorithm, All-pairs shortest path, Floyd-Warshall algorithm, Johnson's algorithm, Maximum flow algorithms, Ford-Fulkerson algorithms, Spanning Trees.


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
          OOPs: Introduction to OOPs concepts, Classes and Objects, Access specifiers,
           Namespaces and Tokens, Abstraction, Data hiding, Encapsulation, 
           Polymorphism and Inheritance

             Core Java: Java 8 and its features, Introduction to JDK, JRE JVM, 
             JVM Architecture Overview, Data types, Variables, Constants, Operators, 
             Arrays and control statements (if, for, while, switch etc.). Classes in 
             java, Constructors, instance data, method overloading and overriding, 
             super and this keyword, static variables, methods, block and scope, 
             lifetime. Packages and access rules, Inheritance and its types, Runtime 
             and Compile Time Polymorphism, Abstract classes and Interfaces, 
             Inner classes, Exception Handling, String and Wrapper classes, Generics
              and Collections, File Handling and Multithreading, Reflection, Java n/w 
              programming, JDBC Driver and Architecture.
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse4")}
      style={{ marginBottom: "1rem" }}
    >
     + Web-Based Java Programming
    </MDBBtn>
        <MDBCollapse id="basicCollapse4" isOpen={this.state.collapseID}>
          <p>
          Introduction to JSON, Servlets, Session Management, JSP and JSTL, 
          MVC Architecture Hibernate framework, ORM Concepts, JPA, Hibernate 
          architecture, Annotation support and ID generators. Transaction management,
           Hibernate Session CRUD API, Hibernate caching,
       HQL, Spring framework, Overview, IOC, Dependency Injection, 
   Spring Beans, Spring Core Container, Autowiring, Web application using 
   Controller, Service & DTO layers, Spring Hibernate Integration and Testing,
    Web Services, REST Architecture, RESTful web service using Spring Boot, 
   Integration and Testing of RESTful web server and client, Java Mail API.
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse5")}
      style={{ marginBottom: "1rem" }}
    >
 Android Programming
    </MDBBtn>
        <MDBCollapse id="basicCollapse5" isOpen={this.state.collapseID}>
          <p>
          Introduction of Android and its architecture, Android SDK features,
           Introduction to Kotlin      Programming, Android activities, lifecycle 
           and callback methods, Android UI design    fundamentals, Layouts, Intents, 
           Toast, Adapters, Dialogs , Animations, Notification and Media Player,
            Material Design, Fragments , fragments lifecycle and callback methods.
            List View and  Recycler view, ActionBar, ToolBar, Menus and Popups, 
            View Pager, Navigation Drawer Android Storage: SQLite database,Content 
            Providers, Multitasking in Android, Android Location based services, 
            Android Sensors, Using blue tooth and telephony Consuming REST API ,
             JSON Parsing, Retrofit Libraries, Integration with Social Networking 
             like Facebook, Twitter etc , Design Patterns- MVP and MVVM, Publish 
             application on play store.
 </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse6")}
      style={{ marginBottom: "1rem" }}
    >
    +Hybrid Mobile Apps Programming
    </MDBBtn>
        <MDBCollapse id="basicCollapse6" isOpen={this.state.collapseID}>
          <p>
          
  
          Introduction to Hybrid development,
           Hybrid application frameworks, HTML 5.0, CSS, JavaScript, 
           jQuery, Node.js, Express, Responsive Web Design, React Native: 
           Introduction to React Native and its architecture.

             Props and states, Inline and External styling, 
        React native binding, handling events and user inputs, validations, 
          using network in app, Timers, Animations and Gesture Support,
         Consuming web services, Publishing App to Play Store and App Store.


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
       
      </>
    );
  }
}

export default DmcPage;


 