# TRADER LEDGER: A WEB-BASED PROFIT AND DEBT TRACKING SYSTEM FOR SMALL AND MEDIUM BUSINESSES

---

## BY
## [STUDENT NAME IN UPPERCASE]
## (MAAUN/22/CBS/XXXX)

---

## BEING A PROJECT SUBMITTED TO THE DEPARTMENT OF COMPUTER SCIENCE, SCHOOL OF COMPUTING, MARYAM ABACHA AMERICAN UNIVERSITY OF NIGERIA IN PARTIAL FULFILMENT OF THE REQUIREMENT FOR THE AWARD OF DEGREE IN BACHELOR OF SCIENCE IN COMPUTER SCIENCE.

---

## APRIL, 2026

---

# DECLARATION

I, [STUDENT NAME] declare that this project work is the product of my own endeavor and that all sources have been adequately and duly acknowledged and that all the inadequacies in this project work are the product of my own shortcomings. And that this project paper has not been submitted in this faculty or elsewhere.

---

# DEDICATION

This project is dedicated to Almighty God for His infinite mercy, grace, and guidance throughout my academic journey. I also dedicate this work to my beloved family for their unwavering support, encouragement, and prayers, which have been the foundation of my success.

---

# APPROVAL PAGE

This project **Trader Ledger: A Web-Based Profit and Debt Tracking System for Small and Medium Businesses**, has been read and approved as meeting the requirements for Bachelor of Science project in the Department of Computer Science, School of Computing, Maryam Abacha American University of Nigeria.

...................................					.................................
[Name of Supervisor]					DATE
Supervisor

.....................................					....................................
[Name of HOD]							DATE
Head of Department

[Name of External Examiner]					....................................
External Examiner							DATE

---

# ACKNOWLEDGEMENT

First and foremost, I express my profound gratitude to Almighty God for His divine guidance, protection, and wisdom throughout the duration of this project.

I am deeply grateful to my project supervisor, [Supervisor Name], for his/her invaluable guidance, constructive criticism, and continuous support throughout the development and documentation of this project. His/Her expertise and dedication have been instrumental in shaping this work.


I extend my sincere appreciation to the Head of Department, Computer Science, and all the lecturers in the School of Computing for their academic support and for creating an enabling environment for learning and research.

My heartfelt thanks go to my family and friends for their moral support, encouragement, and prayers throughout my academic journey. Their belief in me has been a constant source of motivation.

Finally, I acknowledge all my colleagues and classmates who contributed in one way or another to the successful completion of this project.

---

# ABSTRACT

*Small and medium businesses in Nigeria face significant challenges in managing their financial transactions, particularly in tracking sales, purchases, customer debts, and supplier payments. The manual methods currently employed are time-consuming, error-prone, and lack real-time analytical capabilities, leading to poor financial decision-making and cash flow management problems. This project aims to develop a web-based profit and debt tracking system called Trader Ledger to address these challenges. The system was developed using Node.js and Express.js for the backend, SQLite3 for database management, and vanilla JavaScript with Chart.js for the frontend. The methodology employed includes system analysis using interviews and document reviews, followed by system design using Unified Modeling Language (UML) diagrams, and implementation using the Agile development model. Key features of the developed system include user authentication with password hashing, sales and purchase management with support for partial payments, automated debt tracking for customers and suppliers, real-time dashboard analytics with interactive charts, and email notification capabilities for payment reminders. The system was tested using unit and integration testing approaches, and results showed that all functional requirements were met with satisfactory performance. The system successfully addresses the identified problems by providing businesses with an efficient, user-friendly platform for managing their financial transactions and making informed decisions. It is recommended that future versions incorporate mobile applications, payment gateway integration, and advanced reporting features such as PDF export and multi-currency support.*

---


# TABLE OF CONTENTS

| Section | Page |
|---------|------|
| DECLARATION | i |
| DEDICATION | ii |
| APPROVAL PAGE | iii |
| ACKNOWLEDGEMENT | iv |
| ABSTRACT | v |
| TABLE OF CONTENTS | vi |
| LIST OF TABLES | ix |
| LIST OF FIGURES | x |
| **CHAPTER ONE: INTRODUCTION** | **1** |
| 1.1 Introduction | 1 |
| 1.2 Background of the Study | 2 |
| 1.3 Statement of the Problem | 4 |
| 1.4 Aim and Objectives | 5 |
| 1.5 Scope and Limitations | 6 |
| 1.6 Significance of the Project | 7 |
| 1.7 Project Document Organization | 8 |
| 1.8 Definition of Terms | 9 |
| 1.9 Chapter Summary | 11 |
| **CHAPTER TWO: LITERATURE REVIEW** | **12** |
| 2.1 Introduction | 12 |
| 2.2 Review of Fundamental Concepts | 13 |
| 2.2.1 Web-Based Applications | 13 |
| 2.2.2 Database Management Systems | 14 |
| 2.2.3 Client-Server Architecture | 15 |
| 2.2.4 Financial Management Systems | 16 |
| 2.2.5 Authentication and Security | 17 |
| 2.3 Review of Related Work | 18 |
| 2.4 General Discussion | 25 |
| 2.5 Chapter Summary | 27 |
| **CHAPTER THREE: SYSTEM ANALYSIS AND DESIGN** | **28** |
| 3.1 Introduction | 28 |
| 3.2 System Analysis | 29 |
| 3.2.1 Method of System Analysis | 29 |
| 3.2.2 Investigation and Analysis of the Existing System | 30 |
| 3.2.3 Problems with the Existing System | 32 |
| 3.3 System Design | 33 |
| 3.3.1 Description of the Proposed System | 33 |
| 3.3.2 Development Model and Justification | 35 |
| 3.3.3 Functional and Non-Functional Requirements | 36 |
| 3.3.4 Database Specification | 38 |
| 3.3.5 Choice of Programming Language | 41 |
| 3.3.6 Unified Modelling Language (UML) | 43 |
| 3.4 Chapter Summary | 50 |
| **CHAPTER FOUR: SYSTEM IMPLEMENTATION AND TESTING** | **51** |
| 4.1 Introduction | 51 |
| 4.2 System Implementation | 52 |
| 4.2.1 Description of the Developed System | 54 |
| 4.3 System Testing | 60 |
| 4.4 Chapter Summary | 65 |
| **CHAPTER FIVE: SUMMARY, CONCLUSION AND RECOMMENDATIONS** | **66** |
| 5.1 Summary | 66 |
| 5.2 Conclusion | 67 |
| 5.3 Recommendations and Future Work | 68 |
| **REFERENCES** | **70** |
| **APPENDICES** | **73** |
| Appendix A – Program Code | 73 |
| Appendix B – System Interface Screenshots | 85 |
| Appendix C – Database Schema | 92 |
| Appendix D – Sample Test Cases and Results | 94 |

---

# LIST OF TABLES

| Table | Title | Page |
|-------|-------|------|
| Table 2.1 | Summary of Related Works | 24 |
| Table 3.1 | Functional Requirements | 37 |
| Table 3.2 | Non-Functional Requirements | 38 |
| Table 3.3 | Users Table Specification | 39 |
| Table 3.4 | Sales Table Specification | 40 |
| Table 3.5 | Purchases Table Specification | 41 |
| Table 3.6 | Technology Stack Comparison | 42 |
| Table 4.1 | Development Tools and Technologies | 53 |
| Table 4.2 | Unit Test Cases and Results | 62 |
| Table 4.3 | Integration Test Cases and Results | 64 |

---

# LIST OF FIGURES

| Figure | Title | Page |
|--------|-------|------|
| Figure 3.1 | System Architecture Diagram | 34 |
| Figure 3.2 | Agile Development Model | 35 |
| Figure 3.3 | Entity Relationship Diagram | 40 |
| Figure 3.4 | Use Case Diagram | 44 |
| Figure 3.5 | Activity Diagram for User Registration | 46 |
| Figure 3.6 | Activity Diagram for Recording Sales | 47 |
| Figure 3.7 | Sequence Diagram for User Login | 48 |
| Figure 3.8 | Sequence Diagram for Adding Sale Transaction | 49 |
| Figure 4.1 | Login Page Interface | 55 |
| Figure 4.2 | Registration Page Interface | 56 |
| Figure 4.3 | Dashboard Interface | 57 |
| Figure 4.4 | Sales Management Interface | 58 |
| Figure 4.5 | Customer Debts Interface | 59 |
| Figure 4.6 | System Testing Process | 61 |

---


# CHAPTER ONE

# INTRODUCTION

## 1.1 Introduction

The management of financial transactions is a critical aspect of business operations that directly impacts profitability, sustainability, and growth. Small and medium enterprises (SMEs) in Nigeria constitute a significant portion of the economy, contributing approximately 48% to the national Gross Domestic Product (GDP) and accounting for about 96% of businesses in the country (Oyelaran-Oyeyinka & Lal, 2016). Despite their economic importance, many SMEs struggle with effective financial management due to limited resources, inadequate technological infrastructure, and reliance on manual record-keeping systems.

The traditional approach to managing sales, purchases, and debt tracking in small businesses often involves the use of physical ledgers, notebooks, or basic spreadsheet applications. While these methods may suffice for very small operations, they become increasingly inadequate as businesses grow and transaction volumes increase. The manual nature of these systems makes them susceptible to human errors, data loss, and inefficiencies that can have serious consequences for business decision-making and financial health.

In recent years, web-based applications have emerged as powerful tools for addressing business management challenges. These applications offer advantages such as accessibility from multiple devices, real-time data synchronization, automatic calculations, and visual analytics that facilitate better decision-making. The proliferation of internet connectivity and affordable computing devices in Nigeria has created an opportune environment for the adoption of such technologies by SMEs.

This project presents the development of Trader Ledger, a comprehensive web-based profit and debt tracking system specifically designed to meet the needs of small and medium businesses. The system provides an integrated platform for managing sales transactions, purchase records, customer debts, and supplier payments, while offering real-time analytical insights through interactive dashboards and charts. By automating routine tasks and providing instant access to critical financial information, Trader Ledger aims to empower business owners to make informed decisions, improve cash flow management, and enhance overall operational efficiency.

## 1.2 Background of the Study

The concept of financial record-keeping dates back thousands of years, with evidence of accounting practices found in ancient civilizations such as Mesopotamia and Egypt (Sangster, 2016). Over time, accounting methods have evolved from simple tally systems to sophisticated double-entry bookkeeping, and more recently, to computerized accounting systems. The advent of information technology has revolutionized financial management, enabling businesses to process large volumes of transactions with greater speed and accuracy.


In the Nigerian context, small and medium businesses face unique challenges that affect their financial management practices. According to Akinruwa, Awolusi, and Ibojo (2013), many SMEs in Nigeria lack proper accounting systems, which contributes to high failure rates within the first five years of operation. The absence of reliable financial records makes it difficult for business owners to track profitability, manage cash flow, and make strategic decisions. Furthermore, the inability to accurately monitor customer debts and supplier payments can lead to liquidity problems and strained business relationships.

Web-based applications have gained prominence as effective solutions for business management challenges. Unlike traditional desktop applications, web-based systems offer several advantages including platform independence, ease of deployment, automatic updates, and accessibility from any location with internet connectivity (Tatnall, 2005). These characteristics make web applications particularly suitable for small businesses that may lack dedicated IT infrastructure or technical expertise.

The development of financial management systems has been an active area of research and commercial development. Enterprise Resource Planning (ERP) systems such as SAP and Oracle provide comprehensive financial management capabilities, but their complexity and cost make them inaccessible to most small businesses (Monk & Wagner, 2012). On the other hand, simpler accounting software like QuickBooks and Sage offer more affordable options, but may still require significant training and ongoing subscription costs. There exists a gap in the market for lightweight, user-friendly, and cost-effective solutions tailored specifically to the needs of small businesses in developing economies.

Recent technological advancements have made it increasingly feasible to develop robust web applications using open-source technologies. JavaScript frameworks and libraries such as Node.js, Express.js, and Chart.js provide powerful tools for building scalable and interactive web applications (Brown, 2018). Database management systems like SQLite offer lightweight yet reliable data storage solutions suitable for small to medium-scale applications. The combination of these technologies enables developers to create sophisticated business applications without the overhead costs associated with proprietary software.

The importance of debt management in business operations cannot be overstated. Accounts receivable (money owed by customers) and accounts payable (money owed to suppliers) are critical components of working capital management (Brigham & Houston, 2019). Effective management of these accounts ensures adequate cash flow, maintains good supplier relationships, and minimizes the risk of bad debts. However, many small businesses struggle with debt tracking due to the manual effort required and the lack of systematic approaches to follow-up and collection.


Data visualization has emerged as an important aspect of business intelligence, enabling users to quickly understand complex information through graphical representations (Few, 2012). Modern web applications increasingly incorporate charts, graphs, and dashboards that transform raw data into actionable insights. For small business owners who may not have formal training in financial analysis, visual representations of sales trends, profit margins, and debt levels can significantly enhance their ability to monitor business performance and identify areas requiring attention.

Security considerations are paramount in financial management systems. The sensitive nature of financial data necessitates robust authentication mechanisms and data protection measures (Stallings & Brown, 2018). Password hashing, secure communication protocols, and proper access controls are essential components of any system handling financial information. The challenge for developers is to implement adequate security measures while maintaining system usability and performance.

This project builds upon the existing body of knowledge in web application development, database design, and financial management systems. By synthesizing best practices from these domains and tailoring them to the specific needs of small businesses in Nigeria, Trader Ledger aims to provide a practical solution that addresses real-world challenges faced by entrepreneurs and business owners.

## 1.3 Statement of the Problem

Small and medium businesses in Nigeria face several critical challenges in managing their financial transactions and maintaining accurate records of their business operations. Through preliminary investigations and interactions with business owners, the following specific problems have been identified:

Firstly, many small businesses rely on manual record-keeping methods such as physical notebooks, loose papers, or basic spreadsheet applications. These manual systems are time-consuming to maintain, prone to human errors in data entry and calculations, and vulnerable to loss or damage. Business owners often spend considerable time trying to reconcile records, calculate totals, and generate reports, time that could be better spent on core business activities.

Secondly, there is a lack of real-time visibility into business performance. With manual systems, business owners must manually compile and analyze data to understand their current financial position. This process can take hours or even days, by which time the information may already be outdated. The absence of timely information hampers decision-making and makes it difficult to respond quickly to changing business conditions.


Thirdly, tracking customer debts and supplier payments is particularly challenging with manual systems. Business owners often struggle to remember which customers owe money, how much is owed, and for how long payments have been outstanding. Similarly, keeping track of amounts owed to suppliers and payment due dates can be difficult, potentially leading to missed payments, damaged supplier relationships, and loss of credit facilities. The lack of systematic debt tracking also makes it difficult to follow up with customers for payment collection.

Fourthly, the absence of analytical tools and visual representations makes it difficult for business owners to identify trends, patterns, and potential problems in their operations. Without charts and graphs showing sales trends, profit margins, and debt levels, business owners must rely on intuition rather than data-driven insights when making strategic decisions.

Fifthly, existing commercial accounting software solutions are often too expensive, complex, or feature-rich for the needs of small businesses. Many small business owners find such systems intimidating and require extensive training to use them effectively. Additionally, ongoing subscription costs can be prohibitive for businesses operating on tight margins.

Lastly, there is limited support for partial payments in most simple record-keeping systems. In the Nigerian business context, it is common for customers to make partial payments over time rather than paying the full amount immediately. Tracking these partial payments and calculating remaining balances manually is tedious and error-prone.

These problems collectively result in poor financial management, inadequate cash flow control, difficulty in making informed business decisions, and ultimately, reduced profitability and increased risk of business failure. There is therefore a clear need for an affordable, user-friendly, web-based solution that addresses these specific challenges faced by small and medium businesses.

## 1.4 Aim and Objectives

The aim of this project is to develop an efficient web-based profit and debt tracking system that enables small and medium businesses to effectively manage their sales, purchases, customer debts, and supplier payments while providing real-time analytical insights for informed decision-making.

The specific objectives of the project are:

1. To analyze the requirements and limitations of existing manual and computerized financial management systems used by small businesses through interviews, document reviews, and system observation.

2. To design and develop a functional and user-friendly web-based system that meets the identified requirements, incorporating features for sales management, purchase tracking, debt monitoring, and financial analytics.

3. To implement the system using appropriate web technologies including Node.js, Express.js, SQLite3, and Chart.js, ensuring security through password hashing and parameterized database queries.


4. To test the system for performance, accuracy, and reliability using unit testing and integration testing methodologies, ensuring all functional requirements are met and the system operates correctly under various scenarios.

5. To evaluate the effectiveness of the developed system in addressing the identified problems through system demonstration and user feedback collection.

## 1.5 Scope and Limitations

The scope of this project encompasses the design, development, and testing of a web-based profit and debt tracking system specifically tailored for small and medium businesses. The system covers the following functional areas: user authentication and account management, sales transaction recording with support for paid, unpaid, and partial payment statuses, purchase transaction recording with supplier information, automated customer debt tracking and aggregation, automated supplier debt tracking and aggregation, real-time dashboard with key financial metrics, interactive data visualization using charts and graphs, and email notification capabilities for payment reminders.

The system is designed to handle the typical transaction volumes of small to medium businesses, with support for multiple users through individual business accounts. It provides a complete audit trail of all transactions and maintains historical data for analysis and reporting purposes. The application is accessible through standard web browsers on desktop computers, laptops, tablets, and mobile devices, ensuring flexibility in how users access the system.

However, the project has certain limitations that should be acknowledged. Firstly, the system uses SQLite as the database management system, which is suitable for small to medium-scale applications but may not provide optimal performance for very large businesses with thousands of concurrent users or millions of transactions. For such scenarios, migration to a more robust database system like PostgreSQL or MySQL would be necessary.

Secondly, the current implementation stores user sessions using browser localStorage, which is adequate for the intended use case but does not provide the same level of security as token-based authentication systems using JSON Web Tokens (JWT). Future versions could implement more sophisticated authentication mechanisms.

Thirdly, the system currently supports only Nigerian Naira as the currency. Businesses dealing in multiple currencies would require additional functionality for currency conversion and multi-currency transaction handling.

Fourthly, while the system provides email notification capabilities for payment reminders, it relies on the user's email client or web-based email services rather than implementing a built-in email server. This approach is simpler and more cost-effective but provides less control over the email sending process.


Fifthly, the system does not currently include advanced features such as inventory management, invoice generation, tax calculations, or integration with payment gateways. These features, while valuable, were considered beyond the scope of this initial version and are recommended for future development.

Lastly, the testing phase was conducted in a controlled environment with simulated data and a limited number of test users. While this approach is standard for academic projects, real-world deployment would require more extensive testing with actual business data and a larger user base to identify potential issues that may not be apparent in a testing environment.

Despite these limitations, the system successfully addresses the core problems identified in the problem statement and provides a solid foundation for future enhancements and extensions.

## 1.6 Significance of the Project

This project holds significant value for multiple stakeholders and contributes to both practical business operations and academic knowledge in several important ways.

For small and medium business owners, the system provides an affordable and accessible solution for managing their financial transactions without the need for expensive commercial software or extensive technical training. By automating routine tasks such as calculation of totals, tracking of debts, and generation of reports, the system frees up valuable time that business owners can dedicate to core business activities such as customer service, product development, and business expansion. The real-time dashboard and visual analytics enable business owners to quickly assess their financial position and make informed decisions based on current data rather than outdated or incomplete information.

The automated debt tracking feature is particularly significant as it helps businesses improve their cash flow management by providing clear visibility into outstanding customer payments and supplier obligations. The email notification capability facilitates timely follow-up with customers, potentially reducing the average collection period and minimizing bad debts. This improved cash flow management can be critical for business survival and growth, especially in challenging economic conditions.

From a technological perspective, the project demonstrates the practical application of modern web development technologies in solving real-world business problems. The use of open-source technologies such as Node.js, Express.js, and SQLite shows that robust business applications can be developed without relying on expensive proprietary software. This approach makes the solution more accessible and adaptable, as the source code can be modified to meet specific business needs or extended with additional features.


The project contributes to the academic field of information systems by providing a case study of how web-based applications can be designed and implemented to address specific business challenges in the Nigerian context. The documentation of the development process, including system analysis, design decisions, implementation details, and testing results, provides valuable insights for other students and researchers working on similar projects.

For the broader economy, the widespread adoption of such systems by small and medium businesses could contribute to improved business performance, reduced failure rates, and enhanced economic productivity. Better financial management leads to more sustainable businesses, which in turn creates employment opportunities and contributes to economic growth.

The system also has educational value as it can be used as a teaching tool in courses related to web development, database design, software engineering, and business information systems. Students can study the source code, understand the design decisions, and learn practical skills in full-stack web development.

Furthermore, the project addresses the digital divide by providing a solution that is accessible to businesses with limited technical infrastructure. The web-based nature of the application means that it can be accessed from any device with a web browser and internet connection, without requiring expensive hardware or software installations.

## 1.7 Project Document Organization

This project report is organized into five chapters, each addressing specific aspects of the project development process.

Chapter One provides an introduction to the project, establishing the context and rationale for the work. It presents the background of the study, outlining the evolution of financial management systems and the specific challenges faced by small businesses in Nigeria. The chapter identifies the specific problems that the project aims to address, states the aim and objectives that guide the development process, defines the scope and limitations of the work, and explains the significance of the project for various stakeholders.

Chapter Two presents a comprehensive review of relevant literature, covering both theoretical concepts and practical implementations. The chapter discusses fundamental concepts related to web-based applications, database management systems, client-server architecture, financial management systems, and security considerations. It reviews related work by other researchers and developers, analyzing existing solutions and identifying gaps that this project aims to fill. The chapter concludes with a general discussion that synthesizes the reviewed literature and establishes the theoretical foundation for the project.


Chapter Three describes the system analysis and design phase of the project. It explains the methods used to analyze the existing system and gather requirements, presents the problems identified with current approaches, and describes the proposed solution. The chapter details the development model chosen for the project, specifies the functional and non-functional requirements, presents the database design including table structures and relationships, justifies the choice of programming languages and technologies, and provides Unified Modeling Language (UML) diagrams that visually represent the system design including use case diagrams, entity relationship diagrams, activity diagrams, and sequence diagrams.

Chapter Four focuses on system implementation and testing. It describes how the designed system was actually built, including the development environment, tools and frameworks used, and implementation procedures followed. The chapter provides a detailed description of the developed system, including its main features, user interfaces, and workflows. It also presents the testing methodology and results, covering both unit testing of individual components and integration testing of the complete system.

Chapter Five concludes the report by summarizing the entire project, presenting conclusions drawn from the work, and offering recommendations for future enhancements. The chapter reflects on whether the project objectives were achieved, discusses the implications of the findings, and suggests directions for future research and development.

The report also includes a comprehensive reference list citing all sources used in the project, and appendices containing supporting materials such as program code, system interface screenshots, database schema diagrams, and detailed test cases and results.

## 1.8 Definition of Terms

This section defines key technical terms, acronyms, and concepts used throughout the project report to facilitate understanding for readers who may not be familiar with all the terminology.

**API (Application Programming Interface)**: A set of protocols, tools, and definitions that allows different software applications to communicate with each other. In this project, the API enables the frontend to send requests to and receive responses from the backend server.

**Bcrypt**: A password hashing function designed to be computationally expensive, making it resistant to brute-force attacks. The system uses bcrypt to securely store user passwords in the database.

**Client-Server Architecture**: A computing model in which client devices request services and resources from centralized servers. The Trader Ledger system follows this architecture, with web browsers acting as clients and the Node.js application serving as the server.



**API (Application Programming Interface)**: A set of protocols, tools, and definitions that allows different software applications to communicate with each other. In this project, the API enables the frontend to interact with the backend server.

**Authentication**: The process of verifying the identity of a user or system. The project implements authentication using email and password credentials.

**Backend**: The server-side component of a web application that handles data processing, business logic, and database operations. In this project, the backend is built with Node.js and Express.js.

**bcrypt**: A password hashing function designed to be computationally expensive, making it resistant to brute-force attacks. The project uses bcrypt to securely store user passwords.

**Chart.js**: A JavaScript library for creating interactive and responsive charts and graphs. The project uses Chart.js to visualize financial data on the dashboard.

**Client-Server Architecture**: A computing model where client applications request services and resources from server applications. The project follows this architecture with web browsers as clients and Node.js as the server.

**CORS (Cross-Origin Resource Sharing)**: A security mechanism that allows or restricts web applications running on one domain to access resources from another domain. The project configures CORS to enable frontend-backend communication.

**CSS (Cascading Style Sheets)**: A stylesheet language used to describe the presentation and formatting of HTML documents. The project uses CSS for styling the user interface.

**Dashboard**: A visual display of key performance indicators and metrics that provides an at-a-glance view of business performance. The project includes a dashboard showing sales, purchases, profits, and debts.

**Database**: An organized collection of structured data stored electronically. The project uses SQLite3 as its database management system.

**Debt**: An amount of money owed by one party to another. In this project, debts refer to unpaid amounts owed by customers (accounts receivable) or owed to suppliers (accounts payable).

**Express.js**: A minimal and flexible Node.js web application framework that provides features for building web and mobile applications. The project uses Express.js for routing and middleware management.

**Foreign Key**: A database constraint that establishes a relationship between two tables by referencing the primary key of another table. The project uses foreign keys to link sales and purchases to specific users.

**Frontend**: The client-side component of a web application that users interact with directly. In this project, the frontend consists of HTML, CSS, and JavaScript files.

**HTML (HyperText Markup Language)**: The standard markup language for creating web pages. The project uses HTML5 for structuring the user interface.

**JavaScript**: A programming language commonly used for creating interactive web pages. The project uses JavaScript for both frontend interactivity and backend logic (via Node.js).


**JSON (JavaScript Object Notation)**: A lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. The project uses JSON for data exchange between frontend and backend.

**localStorage**: A web storage API that allows web applications to store data locally in the user's browser. The project uses localStorage to maintain user session information.

**Middleware**: Software components that sit between the client and server, processing requests and responses. The project uses middleware for CORS, JSON parsing, and static file serving.

**Node.js**: A JavaScript runtime environment that executes JavaScript code outside of a web browser. The project uses Node.js as the backend runtime environment.

**Partial Payment**: A payment that covers only a portion of the total amount owed, with the remainder to be paid later. The project supports tracking of partial payments for both sales and purchases.

**Primary Key**: A unique identifier for each record in a database table. The project uses auto-incrementing integer primary keys for all tables.

**REST (Representational State Transfer)**: An architectural style for designing networked applications using HTTP methods. The project implements a RESTful API for communication between frontend and backend.

**SQLite**: A lightweight, file-based relational database management system. The project uses SQLite3 for data storage and retrieval.

**UML (Unified Modeling Language)**: A standardized modeling language used to visualize the design of a system. The project uses UML diagrams including use case, activity, sequence, and entity relationship diagrams.

**Web Application**: A software application that runs on a web server and is accessed through a web browser. Trader Ledger is a web application accessible from any device with a browser and internet connection.

## 1.9 Chapter Summary

This chapter has provided a comprehensive introduction to the Trader Ledger project, establishing the foundation for the subsequent chapters. The chapter began by introducing the importance of financial management for small and medium businesses and the challenges they face with manual record-keeping systems. The background section traced the evolution of financial management systems and highlighted the specific context of Nigerian SMEs, identifying the gap that this project aims to fill.

The statement of the problem clearly articulated the specific challenges faced by small businesses, including manual record-keeping inefficiencies, lack of real-time visibility, difficulty in debt tracking, absence of analytical tools, high cost of existing solutions, and inadequate support for partial payments. These problems collectively justify the need for the proposed system.


The aim and objectives section outlined the overall goal of developing an efficient web-based system and specified five concrete objectives that guide the project development process. The scope and limitations section defined what the project covers and acknowledged its boundaries, providing realistic expectations about what the system can and cannot do.

The significance of the project was discussed from multiple perspectives, highlighting benefits for business owners, contributions to technology and academic knowledge, and potential economic impact. The chapter also explained how the project report is organized, providing readers with a roadmap for navigating the document, and defined key technical terms to ensure clarity and understanding.

With this foundation established, the next chapter will review relevant literature, examining both theoretical concepts and practical implementations that inform the design and development of the Trader Ledger system.

---

# CHAPTER TWO

# LITERATURE REVIEW

## 2.1 Introduction

This chapter presents a comprehensive review of literature relevant to the development of the Trader Ledger system. The review serves multiple purposes: it establishes the theoretical foundation for the project by examining fundamental concepts related to web-based applications, database systems, and financial management; it surveys existing research and implementations in the field of business management systems, identifying their strengths, weaknesses, and gaps; it justifies the design decisions made in this project by referencing established best practices and proven approaches; and it positions this project within the broader context of information systems research and development.

The chapter is organized into four main sections. Section 2.2 reviews fundamental concepts that underpin the project, including web-based applications, database management systems, client-server architecture, financial management systems, and authentication and security. Section 2.3 examines related work by other researchers and developers, analyzing existing systems and identifying how this project differs from or improves upon previous efforts. Section 2.4 provides a general discussion that synthesizes the reviewed literature and draws connections to the current project. Finally, Section 2.5 summarizes the key points from the chapter.

The literature reviewed in this chapter comes from various sources including academic journals, conference proceedings, textbooks, technical documentation, and industry reports. This diverse range of sources ensures a comprehensive understanding of both theoretical principles and practical considerations relevant to the project.


## 2.2 Review of Fundamental Concepts

### 2.2.1 Web-Based Applications

Web-based applications, also known as web apps, are software programs that run on web servers and are accessed through web browsers over the internet or intranet (Tatnall, 2005). Unlike traditional desktop applications that must be installed on individual computers, web applications are centrally hosted and can be accessed from any device with a web browser and internet connection. This fundamental characteristic provides several advantages that make web applications particularly suitable for business management systems.

According to Shklar and Rosen (2009), web applications follow a client-server architecture where the client (web browser) sends requests to the server, which processes these requests and returns responses, typically in the form of HTML, CSS, and JavaScript. Modern web applications often implement a separation between the presentation layer (frontend) and the business logic layer (backend), communicating through Application Programming Interfaces (APIs). This separation of concerns facilitates maintainability, scalability, and the ability to support multiple client types (web browsers, mobile apps, etc.) from a single backend.

The evolution of web technologies has significantly enhanced the capabilities of web applications. Early web applications were primarily static, with limited interactivity. The introduction of JavaScript and AJAX (Asynchronous JavaScript and XML) enabled the development of dynamic, responsive applications that could update content without requiring full page reloads (Garrett, 2005). More recently, modern JavaScript frameworks and libraries such as React, Angular, and Vue.js have further advanced the state of web application development, though simpler approaches using vanilla JavaScript remain viable for many applications.

Brown (2018) discusses the advantages of web-based applications for small businesses, highlighting their accessibility from multiple locations and devices, elimination of installation and update hassles, lower hardware requirements compared to desktop applications, easier collaboration among team members, and automatic backup and data synchronization. These advantages align well with the needs of small and medium businesses that may lack dedicated IT infrastructure or technical expertise.

However, web applications also have some limitations that must be considered. They require internet connectivity to function, though modern techniques like Progressive Web Apps (PWAs) can provide some offline capabilities. Performance may be affected by network latency, and security considerations are paramount since data is transmitted over networks and stored on remote servers (Stuttard & Pinto, 2011).


### 2.2.2 Database Management Systems

A Database Management System (DBMS) is software that enables users to define, create, maintain, and control access to databases (Connolly & Begg, 2015). The choice of DBMS is a critical decision in application development as it affects performance, scalability, data integrity, and development complexity. Database systems can be broadly categorized into relational databases (RDBMS) and non-relational databases (NoSQL), each with distinct characteristics and use cases.

Relational databases organize data into tables with rows and columns, using Structured Query Language (SQL) for data manipulation and retrieval. They enforce data integrity through constraints such as primary keys, foreign keys, and check constraints. Popular relational database systems include MySQL, PostgreSQL, Oracle, Microsoft SQL Server, and SQLite (Elmasri & Navathe, 2016). The relational model's strength lies in its ability to maintain data consistency, support complex queries involving multiple tables, and provide ACID (Atomicity, Consistency, Isolation, Durability) guarantees for transactions.

SQLite, the database system used in this project, is a unique RDBMS that differs from traditional client-server databases. As described by Owens (2006), SQLite is a self-contained, serverless, zero-configuration database engine that stores the entire database in a single file. This simplicity makes SQLite ideal for embedded applications, mobile apps, and small to medium-scale web applications. Despite its lightweight nature, SQLite supports most SQL features and provides reliable ACID transactions.

The advantages of SQLite for small business applications include zero configuration and administration requirements, no separate server process to install or manage, cross-platform compatibility, small memory footprint, and reliability with extensive testing. However, SQLite has limitations in handling high concurrency (multiple simultaneous writes) and is not suitable for very large databases or applications with thousands of concurrent users (Kreibich, 2010). For the target use case of small to medium businesses, these limitations are generally not significant concerns.

Database design is a critical aspect of application development. A well-designed database schema ensures data integrity, minimizes redundancy, and supports efficient queries. The process of database normalization, as described by Date (2004), involves organizing data to reduce redundancy and dependency. Normal forms (1NF, 2NF, 3NF, BCNF) provide guidelines for structuring tables to avoid anomalies in data insertion, update, and deletion operations.

