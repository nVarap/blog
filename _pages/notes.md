---
layout: page
title: Notes
permalink: /notes/
search_exclude: true
---
### Notable Terms:
- echo
- versions
- shells
- print
- return
- iteration
- append
- procedural abstraction
- data abstraction
- for loops
- recursive loops
- while loops
- Liquid (coding language)
- code.org
- debug log


## Week 0
- Discussed Fastpages creation
    - Go to the **[setup link](https://github.com/fastai/fastpages)**
    - Once you receive a pull request, use this **[utility](https://8gwifi.org/sshfunctions.jsp)**
        1. Set settings to RSA and 4096
        2. Generate keys
        3. Use utilities provided in the pull request to place keys in 
            - Note that the secret key must be ```SSH_DEPLOY_KEY``` exactly
    - Once all these are done, check your URL to see if everything is workings
        - if not: try checking the **actions** page.
    - Otherwise continue with configuring your website
- Discussed Markdown files and [syntax](https://www.markdownguide.org/cheat-sheet/)

## Week 1
- Started work on Fastpages Frontend Development
    - Learned how to change tags configure when assigning tags in the TOC. Changing these tags add them
    - Create new pages, using TOC and making the `.md` file's layout to page 
- Learn bash
    - Use basic syntax, such as assigning variables without spaces `str="string"`
    - Use `echo` to print
- Learn basic python
    - Use `print` and  
    - `return` to output
    - Create a quiz

## Week 2
- Started learning about python dictionaries
    - Create lists using `[]` and dictionaries using `{}`
    - use `append` to add to the end of a list
    - You can **nest** lists and dictionaries, which means to put multiple of a similar structure in one
    - You can print out a list and dictionary, or print out an **index** (an element or object in a list)
    - You can use a `for i in range(x)` loop, a `for element in list`, `while i != x` or a recursive loop (using a function that calls itself)
    - Used HTML fragments for images (such as ``<img>``)
    - Used liquid to create a better table that reacts to new tags.
## Week 3
- Started working with applab to build a foundation in JS
- Created a Ninjago quiz that can save data and play different songs
- Created a basic hangman game
- Read about competencies for College board AP performance task
- Read the rubric fo the performance task
- Debug log, use `console.log` to log when specific items and values occur, used heavily in debugging and not seen during the final product.