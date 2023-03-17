---
toc: true
layout: post
description: Using Programs with Data Quiz
categories: [Work]
tags: [Week 26]
title: UPDQ
---

**My Score**
![]({{site.baseurl}}/images/UPWDQ.png "Fuck off")


# Questions and Explanations

## ***Question 1***

![]({{site.baseurl}}/images/BookstoreSpreadsheet.png "Fuck off")

An employee wants to count the number of books that meet all of the following criteria.

> Is a mystery book
> Costs less than $10.00
> Has at least one copy in stock

For a given row in the spreadsheet, suppose genre contains the genre as a string, num contains the number of copies in stock as a number, and cost contains the cost as a number. Which of the following expressions will evaluate to true if the book should be counted and evaluates to false otherwise?

A: `(genre = "mystery") AND ((1 ≤ num) AND (cost < 10.00))`

B: `(genre = "mystery") AND ((1 < num) AND (cost < 10.00))`

C: `(genre = "mystery") OR ((1 ≤ num) OR (cost < 10.00))`

D: `(genre = "mystery") OR ((1 < num) OR (cost < 10.00))`

Correct Answer: *A*. For a book to be counted, the value of genre must be "mystery" so that only mystery books are counted. The value of num must be greater than or equal to 1 so that only books that have at least one copy in stock are counted. The value of cost must be less than 10.00 so that only books that cost less than $10 are counted. All three conditions must be true, so the AND operator is used between them.


## ***Question 2***

The owner of a clothing store records the following information for each transaction made at the store during a 7-day period.

> The date of the transaction
> The method of payment used in the transaction
> The number of items purchased in the transaction
> The total amount of the transaction, in dollars
Customers can pay for purchases using cash, check, a debit card, or a credit card.

Using only the data collected during the 7-day period, which of the following statements is true?

A: The average amount spent per day during the 7-day period can be determined by sorting the data by the total transaction amount, then adding the 7 greatest amounts, and then dividing the sum by 7.

B: The method of payment that was used in the greatest number of transactions during the 7-day period can be determined by sorting the data by the method of payment, then adding the number of items purchased for each type of payment method, and then finding the maximum sum.

C: The most expensive item purchased on a given date can be determined by searching the data for all items purchased on the given date and then sorting the matching items by item price.

D: The total number of items purchased on a given date can be determined by searching the data for all transactions that occurred on the given date and then adding the number of items purchased for each matching transaction.

Correct Answer: D. For each transaction, the data includes the date of the transaction and the number of items purchased in the transaction. By searching the data to find all transactions that occurred on the given date, and then adding the number of items purchased in each of those transactions, the total number of items purchased on a given date can be determined.


## ***Question 3***

![]({{site.baseurl}}/images/DataFiles.png "Fuck off")

A new rechargeable battery pack is available for products that use AA batteries. Which of the following best explains how the data files in the table can be used to send a targeted e-mail to only those customers who have purchased products that use AA batteries to let them know about the new accessory?

A: Use the customer IDs in the purchases file to search the customers file to generate a list of e-mail addresses

B: Use the product IDs in the purchases file to search the products file to generate a list of product names that use AA batteries

C: Use the customers file to generate a list of customer IDs, then use the list of customer IDs to search the products file to generate a list of product names that use AA batteries

D: Use the products file to generate a list of product IDs that use AA batteries, then use the list of product IDs to search the purchases file to generate a list of customer IDs, then use the list of customer IDs to search the customers file to generate a list of e-mail addresses

Correct Answer: *D*. The information in the products list can be used to create a list of the product IDs of all products that use AA batteries. Since the products list and the purchases list have the product ID information in common, the list of product IDs can be used in the purchases list to create a list of customer IDs of all the customers who purchased products that use AA batteries. Finally, since the purchases list and the customers list have the customer ID in common, the list of customer IDs can be used to generate a list of e-mail addresses of the customers who purchased products that use AA batteries.


## ***Question 4***

![]({{site.baseurl}}/images/treeswiththreeEs.png "Fuck off")

> In column A, each unknown photographer is set to "(unknown)".
> In column C, each unknown year is set to -1.

A student is developing an algorithm to determine the name of the photographer who took the oldest photograph in the collection. Photographs whose photographer or year are unknown are to be ignored.

Once the algorithm is complete, the desired entry will appear in the first row of the spreadsheet. If there are multiple entries that meet the desired criteria, then any of them can appear in the first row.

The student has the following actions available.

Which of the following sequences of steps can be used to identify the desired entry?

**Select two answers.**
A: Filter by photographer, then filter by year, then sort by subject
B: Filter by photographer, then filter by year, then sort by year
C: Sort by subject, then sort by year, then filter by photographer
D: Sort by year, then filter by year, then filter by photographer

Correct answers: B & D. Filtering by photographer will remove any entries with unknown photographers. Filtering by year will remove any entries with unknown years. Sorting by year will sort the remaining entries in column C from least to greatest, putting the photograph with the lowest year value in the first row of the spreadsheet. For answer D, sorting by year will sort the spreadsheet on column C from least to greatest. Filtering by year will remove any entries with unknown years. Filtering by photographer will remove any entries with unknown photographers. Since the order of the entries is not affected by the filters, the photograph with the lowest year value will be in the first row of the spreadsheet.

## ***Question 5***

![]({{site.baseurl}}/images/RadioShow.png "Fuck off")
A student wants to count the number of shows that meet both of the following criteria.

> Is a talk show
> Is on Saturday or Sunday
> 
For a given row in the spreadsheet, suppose `genre` contains the genre as a string and day contains the day as a string. Which of the following expressions will evaluate to true if the show should be counted and evaluates to false otherwise?
A: `(genre = "talk") AND ((day = "Saturday") AND (day = "Sunday"))`
B: `(genre = "talk") AND ((day = "Saturday") OR (day = "Sunday"))`
C: `(genre = "talk") OR ((day = "Saturday") AND (day = "Sunday"))`
D: `(genre = "talk") OR ((day = "Saturday") OR (day = "Sunday"))`

Correct Answer: *B*. For a show to be counted, the value of genre must be "talk" and the value of day must be "Saturday" or "Sunday".

## ***Question 6***

A wildlife preserve is developing an interactive exhibit for its guests. The exhibit is intended to allow guests to select the name of an animal on a touch screen and display various facts about the selected animal.

For example, if a guest selects the animal name “wolf,” the exhibit is intended to display the following information.

> Classification: mammal
> Skin type: fur
> Thermoregulation: warm-blooded
> Lifestyle: pack
> Average life span: 10–12 years
> Top speed: 75 kilometers/hour

The preserve has two databases of information available to use for the exhibit. The first database contains information for each animal’s name, classification, skin type, and thermoregulation. The second database contains information for each animal’s name, lifestyle, average life span, and top speed.

Which of the following explains how the two databases can be used to develop the interactive exhibit?
A: Only the first database is needed. It can be searched by animal name to find all the information to be displayed.

B: Only the second database is needed. It can be searched by animal name to find all the information to be displayed.

C: Both databases are needed. Each database can be searched by animal name to find all information to be displayed.

D: The two databases are not sufficient to display all the necessary information because the intended display information does not include the animal name.


Correct Answer: C. The information to be displayed comes from both databases. The animal name can be used search the first database to find the classification, skin type, and thermoregulation information. The animal name can be used search the second database to find the lifestyle, average life span, and top speed information.