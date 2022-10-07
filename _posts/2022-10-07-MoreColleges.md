---
toc: true
layout: post
description: Notes for Collegeboard 1.4
categories: [Hacks]
tags: [Week 7]
title: 1.4 Notes
---

# Video 1.4 pt 1
- Many types of errors
- You cannot write a program without errors
- Four types
    - <mark>Logic Errors</mark>
    - <mark>Syntax Errors</mark>
    - <mark>Runtime Errors</mark>
    - <mark>Overflow Errors</mark>
- Logic errors:
    - A problem by the programmer specifically
    - Nothing with the internals, but rather a programming skill issue
- Syntax error
    - Programmer does something that doesn't line up with the rules of the language
    - Syntax such as {}, (), ;, etc.
- Runtime error:
    - When the program fails in the midst of a program
    - May only occur at certain inputs (letters when you intend numbers, etc.)
- Overflow errors:
    - When the program maxes out the amount of memory allocation to a certain variable
    - i.e ints vs floats vs doubles.

# Video 1.4 pt 2

- When syntax error:
    - Often you are directed to the area of the error
    - It could be at the line, the line above, the line under, etc. 
    - Fix the error that is just a typo
- When Logic errors:
    - use test cases
    - See the output and certain values
    - Some IDEs have certain debuggers to assist in helping logic stuff

# Video 1.4 pt 3
- Often you need many testing "schemes" to help with testing
- We start testing at the start of development
    - Start thinking
    - Start planning specifications
    - Plan how to test (influenced by *specifications*)
- After testing programmers revise sections of their code that didn't work
- You keep testing, and then get users to test, and then release
- And even after, you will get errors, leading to certain maintainence patches

# MCQ
![]({{site.baseurl}}/images/Video14.png "VIDEO 1.4 MCQ")