           
 
import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class DaiPage extends Component {
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
   + Fundamentals of Artificial Intelligence
    </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p>
             
         Introduction to AI, Evolution & Revolution of AI,
         Ethics of AI, Structure of AI, Real world Implications,
          Intelligent Agents, Uninformed Search, Constraint Satisfaction 
         Search, Combinatorial Optimization Problems, Heuristic & Meta-heuristics,
         Genetic Algorithms for Search, Game Trees, Supervised & Unsupervised Learning, Knowledge Representation,
         Propositional and Predicate Logic, Inference and Resolution for Problem Solving,
      Rules and Expert Systems, Artificial Life, Emergent Behavior, Genetic Algorithms
         
          </p>
        </MDBCollapse>
<div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse1")}
      style={{ marginBottom: "1rem" }}
    >
    +  Mathematics for Artificial Intelligence
    </MDBBtn>
        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID}>
          <p>
       Linear Algebra
Vectors, definition, scalars, addition, scalar multiplication, inner product(dot   product), vector projection, cosine similarity, orthogonal vectors, normal and ortho-  normal vectors, vector norm, vectors pace, linear combination, linear span, linear   independence, basis vectors
Matrices definition, addition, transpose, scalar multiplication, matrix multiplication,   matrix multiplication properties, hadamard product, functions, linear transformation,   determinant, identity matrix, invertible matrix and inverse, rank, trace, popularity of   matrices-symmetric, diagonal, orthogonal, ortho-normal, positive definite matrix
Eigen values & eigen vectors, concept, intuition, significance, how to find Principle   component analysis, concept, properties, applications
Singular value decomposition, concept, properties, applications

          </p>
        </MDBCollapse>
        <div></div>
    <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse2")}
      style={{ marginBottom: "1rem" }}
    >
      + Advanced Programming using Python
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
      +  Data Analytics
    </MDBBtn>
        <MDBCollapse id="basicCollapse3" isOpen={this.state.collapseID}>
          <p>
          Introduction to Business Analytics using some case studies, 
          Summary Statistics, Making Right Business Decisions based on data,
           Statistical Concepts, Descriptive Statistics and its measures, 
           Probability theory, Probability Distributions (Continuous and discrete- 
           Normal, Binomial and Poisson distribution) and Data, Sampling and 
           Estimation, Statistical Interfaces, Predictive modeling and analysis, 
           Bayes’ Theorem, Central Limit theorem, Data Exploration & preparation,
            Concepts of Correlation,  Covariance, Outliers, Regression Analysis, 
            Forecasting Techniques, Simulation and Risk Analysis, Optimization, Linear,
             Nonlinear, Integer, Overview of Factor Analysis, Directional Data Analytics,
              Functional Data Analysis , Hypothesis Techniques, Predictive Modelling 
              (From Correlation To Supervised Segmentation): Identifying Informative 
              Attributes, Segmenting Data By Progressive Attributive, Models, Induction 
              And Prediction, Supervised Segmentation, Visualizing Segmentations, 
              Trees As Set Of Rules, Probability Estimation; Overfitting And Its Avoidance,
               Generalization, Holdout Evaluation Vs Cross Validation; Decision Analytics:
            Evaluating Classifiers, Analytical Framework, Evaluation, Baseline,
                Performance And Implications For Investments In Data; Evidence And 
              Probabilities:  Explicit Evidence Combination With Bayes Rule,
              Probabilistic Reasoning;
               Python Libraries – Pandas, Numpy, Scipy
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse4")}
      style={{ marginBottom: "1rem" }}
    >
      + Practical Machine Learning
    </MDBBtn>
        <MDBCollapse id="basicCollapse4" isOpen={this.state.collapseID}>
          <p>
          Machine Learning in Nut shell, Supervised Learning, Unsupervised Learning,
         ML applications in the real world
Introduction to Feature engineering and Data Pre-processing: Data Preparation, 
Feature creation, Data cleaning & transformation, Data Validation & Modelling, 
Feature selection Techniques, Dimensionality reduction, Recommendation Systems 
and anomaly detection, PCA
ML Algorithms: Decision Trees, Oblique trees, Random forest,
 Bayesian analysis and Naïve bayes classifier, Support vector Machines, 
 KNN, Gradient boosting, Ensemble methods, Bagging & Boosting , Association 
 rules learning, Apriori and FP growth algorithms, Linear and Nonlinear classification, Regression Techniques, Clustering, K-means, Overview of Factor Analysis, ARIMA, ML in real time, Algorithm performance metrics, ROC, AOC, Confusion matrix, F1score, MSE, MAE, DBSCAN Clustering in ML, Anomaly Detection, Recommender System
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse5")}
      style={{ marginBottom: "1rem" }}
    >
     +  Deep Neural Networks
    </MDBBtn>
        <MDBCollapse id="basicCollapse5" isOpen={this.state.collapseID}>
          <p>
          Introduction to Deep Neural Network, RNN, CNN, LSTM, Deep Belief Network,
           semantic Hashing, Training deep neural network, Tensorflow 2.x, Pytorch, 
           building deep learning models, building a basic neural network using Keras
            with Tensor Flow, Troubleshoot deep learning models, building deep learning 
            project. (A log model), Transfer Learning, Inductive, unsupervised Transductive,
            deep Learning Tools & Technique, Tuning Deep Learning Models, Trends in Deep 
            Learning, Application of  Multi Processing in DL, Deep Learning Case Studies
          </p>
        </MDBCollapse>
        <div></div>
        <MDBBtn
      color="success"
      onClick={this.toggleCollapse("basicCollapse6")}
      style={{ marginBottom: "1rem" }}
    >
     +  Natural Language Processing & Computer Vision
    </MDBBtn>
        <MDBCollapse id="basicCollapse6" isOpen={this.state.collapseID}>
          <p>
          Natural Language Processing: Understanding Language, NLP Overview,
           Introduction to Language Computing, Language in Cognitive Science,
            Definitions of language, Language as a rule-governed dynamic system, 
            Language and symbolic systems: Artificial language (Logical language 
        / programming language) vs. Natural Language, Linguistics as a scientific
             study, And Description of different branches of Linguistics: Statistical
      Linguistics, Psycho linguistics, Neuro Linguistics, Computational 
          Linguistics, Socio linguistic, Language Analysis and Computational 
      Linguistics, Semantics, Discourse, Pragmatics, Lexicology, Shallow 
    Parsing and Tools for NLP, Deep Parsing and Tools for NLP, Statistical 
    Approaches, NLP with Machine Learning and Deep Learning, Pre-processing,
     Need of Pre-processing Data, Introduction to NLTK, Using Python Scripts
Word2Vec models(Skip-gram, CBOW, Glove, one hot Encoding), NLP Transformers, 
Bert in NLP Speech Processing, NLP Model Deployment Techniques using Flask, NLP 
Applications- Language identification, Auto suggest/ Auto complete, chat bots,
 Robotics
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
      +  AI Compute Platforms, Applications & Trends
    </MDBBtn>
        <MDBCollapse id="basicCollapse8" isOpen={this.state.collapseID}>
          <p>
         
  
          Apache Spark APIs for large-scale data processing: Basics of Spark,
           Deploying to a Cluster Spark Streaming, Spark ML lib and ML APIs, Spark Data Frames/Spark SQL, Integration of Spark and Kafka, Setting up Kafka Producer and Consumer, Kafka Connect API, Connecting DB’s with Spark,
AI Compute Platforms: Deep Vision, Cloud Machine Learning Engine,
 Tensorflow AI Network optimization using Intel Open Vino Toolkit
AI Future Trends
Self Study: AI applications in Financial Services including 
Insurance banking, stock markets & other financial markets like Forex–and
Artificial Economics, AI applications in Health Sciences & other Scientific
 Applications, AI in Cloud Environment. Deployment of Models on distributed platform.
          </p>
        </MDBCollapse>
       
      </>
    );
  }
}

export default DaiPage;


 