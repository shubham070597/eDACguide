           
 
import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class DbdaPage extends Component {
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
     + Linux Programming and Cloud Computing
    </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p>
             
          Linux Programming: Installation (Ubuntu and CentOS), Basics of Linux, 
          Configuring Linux, Shells, Commands, and Navigation, Common Text Editors,
           Administering Linux, Introduction to Users and Groups, Linux shell scripting, shell computing, Introduction to enterprise computing, Remote access

Cloud Computing: Cloud Computing Basics, 
Understanding Cloud Vendors (AWS/Azure/GCP), Definition, Characteristics,
 Components, Cloud provider, SAAS, PAAS, IAAS and other Organizational scenarios 
 of clouds, Administering & Monitoring cloud services, benefits and limitations,
  Deploy application over cloud. Comparison among SAAS, PAAS, IAAS, Cloud Products 
  and Solutions, Cloud Pricing, Compute Products and Services, Elastic Cloud Compute,
   Dashboard.
         
          </p>
        </MDBCollapse>
<div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse1")}
      style={{ marginBottom: "1rem" }}
    >
    + Data Collection and DBMS (Principles, Tools &Platforms)
    </MDBBtn>
        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID}>
          <p>
          Database Concepts (File System and DBMS), OLAP vs OLTP,
           Database Storage Structures (Table space, Control files, Data files), 
           Structured and Unstructured data, SQL Commands (DDL, DML & DCL),
            Stored functions and procedures in SQL, Conditional Constructs in SQL,
             data collection, Designing Database schema, Normal Forms and ER Diagram,
              Relational Database modelling, Stored Procedures. The tools and how data can 
              be gathered in a systematic fashion, Data ware Housing concept, No-SQL, Data
               Models - XML, working with MongoDB.
          </p>
        </MDBCollapse>
        <div></div>
    <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse2")}
      style={{ marginBottom: "1rem" }}
    >
      + Python and R programming
    </MDBBtn>
        <MDBCollapse id="basicCollapse2" isOpen={this.state.collapseID}>
          <p>
          Python Programming: Python basics, If, If- else, Nested if-else, Looping, For, While, Nested loops, 
          Control Structure, Break, Continue, Pass, Strings and Tuples, Accessing Strings, Basic Operations, String slices, 
          Working with Lists, Accessing list, Operations, Function and Methods, Files, Modules, Dictionaries, Functions and Functional Programming,
           Declaring and calling Functions, Declare, assign and retrieve values from Lists, Introducing Tuples, Accessing tuples, Visualizing using 
            Matplotlib, Seaborn, OOPs concept, Class and object, Attributes, Inheritance, Overloading, Overriding, Data hiding, Operations Exception,
                Exception Handling, except clause, Try-finally clause, User Defined Exceptions, Data wrangling, Data cleaning
R Programming: Reading and Getting Data into R,
 Exporting Data from R, Data Objects-Data Types & Data Structure. 
 Viewing Named Objects, Structure of Data Items, Manipulating and Processing Data 
 in R (Creating, Accessing, Sorting data frames, Extracting, Combining, Merging,
  reshaping data frames), Control Structures, Functions in R (numeric, character, 
  statistical), working with objects, Viewing Objects within Objects, Constructing 
  Data Objects, Packages – Tidyverse, Dplyr, Tidyr etc., Queuing Theory, Interactive 
  reporting with R markdown, Introduction to Rshiny.
          </p>
        </MDBCollapse>
<div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse3")}
      style={{ marginBottom: "1rem" }}
    >
      +  Object Oriented Programming with Java 8
    </MDBBtn>
        <MDBCollapse id="basicCollapse3" isOpen={this.state.collapseID}>
          <p>
          OOPs Concepts, Data Types, Operators and Language, Constructs,
           Inner Classes and Inheritance, Interface and Package, Exceptions,
            Collections, Threads, Java.lang, Java.util, Java Virtual Machine.
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse4")}
      style={{ marginBottom: "1rem" }}
    >
      + Big Data Technologies
    </MDBBtn>
        <MDBCollapse id="basicCollapse4" isOpen={this.state.collapseID}>
          <p>
          Introduction to Big Data: Big Data - Beyond The Hype, Big Data Skills
           And Sources Of Big Data, Big Data Adoption, Research And Changing Nature
            Of Data Repositories, Data Sharing And Reuse Practices And Their Implications 
            For Repository Data Curation

         Hadoop: Introduction of Big data programming-Hadoop, 
         The ecosystem and stack, The Hadoop Distributed File System (HDFS), 
         Components of Hadoop, Design of HDFS, Java interfaces to HDFS, Architecture overview, 
         Development Environment, Hadoop distribution and basic commands, Eclipse development, 
         The HDFS command line and web interfaces, The HDFS Java API (lab), Analyzing the Data with Hadoop,
          Scaling Out, Hadoop event stream processing, complex event processing, MapReduce Introduction,
           Developing a Map Reduce Application, How Map Reduce Works, The MapReduce Anatomy of a Map Reduce 
           Job run, Failures, Job Scheduling, Shuffle and Sort, Task execution, Map Reduce Types and Formats,
            Map Reduce Features, Real-World MapReduce,
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse5")}
      style={{ marginBottom: "1rem" }}
    >
     +  Data Visualization- Analysis and Reporting
    </MDBBtn>
        <MDBCollapse id="basicCollapse5" isOpen={this.state.collapseID}>
          <p>
             
          Business Intelligence- requirements, content and managements,
           information Visualization, Data analytics Life Cycle, Analytic 
           Processes and Tools, Analysis vs. Reporting, MS Excel: Functions, 
           Formula, charts, Pivots and Lookups, Data Analysis Tool pack: Descriptive 
           Summaries, Correlation, Regression, Introduction to Power BI, Modern Data 
           Analytic Tools, Visualization Techniques.
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse6")}
      style={{ marginBottom: "1rem" }}
    >
     +  Advanced Analytics using Statistics
    </MDBBtn>
        <MDBCollapse id="basicCollapse6" isOpen={this.state.collapseID}>
          <p>
          Introduction to Business Analytics using some case studies, Summary Statistics,
           Making Right Business Decisions based on data, Statistical Concepts, Descriptive 
           Statistics and its measures, Probability theory, Probability Distributions
            (Continuous and discrete- Normal, Binomial and Poisson distribution) and Data,
             Sampling and Estimation, Statistical Interfaces, Predictive modeling and analysis, 
             Bayes’ Theorem, Central Limit theorem, Data Exploration & preparation, Concepts of 
             Correlation,  Covariance, Outliers, Regression Analysis, Forecasting Techniques, 
             Simulation and Risk Analysis, Optimization, Linear, Nonlinear, Integer, Overview of Factor
              Analysis, Directional Data Analytics, Functional Data Analysis , Non parametric Tests- 
              ANOVA, chi-Square, t-Test, U-Test; Predictive Modelling (From Correlation To Supervised
               Segmentation): Identifying Informative Attributes, Segmenting Data By Progressive Attributive,
                Models, Induction And Prediction, Supervised Segmentation, Visualizing Segmentations, 
                Trees As Set Of Rules, Probability Estimation; Overfitting And Its Avoidance: Generalization,
                 Holdout Evaluation Vs Cross Validation; Decision Analytics: Evaluating Classifiers, Analytical 
                 Framework, Evaluation, Baseline, Performance And Implications For Investments In Data; Evidence
                  And Probabilities: Explicit Evidence Combination With Bayes Rule, Probabilistic Reasoning;
             Python Libraries: Pandas,  Numpy, Scipy, Scrapy, Plotly, Beautiful soup
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse7")}
      style={{ marginBottom: "1rem" }}
    >
     + Practical Machine Learning
    </MDBBtn>
        <MDBCollapse id="basicCollapse7" isOpen={this.state.collapseID}>
          <p>
          Supervised and Unsupervised Learning, Uses of Machine learning ,
           Clustering, K means, Hierarchical Clustering, Decision Trees,
            Classification problems, Bayesian analysis and Naïve Bayes classifier, 
            Random forest, Gradient boosting Machines, Association rules learning, PCA, 
            Apriori, Support vector Machines, Linear and Non liner classification,  ARIMA, 
            XG Boost, CAT Boost, Neural Networks and its application, Tensor flow 2.x framework: 
            Deep learning algorithms, KNN, NLP, Bert in NLP, NLTK
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

export default DbdaPage;


 