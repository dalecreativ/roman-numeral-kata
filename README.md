# Convert number to roman numeral
A TDD Kata to create a function that converts a number to a roman numeral

## Getting started
First, clone repo.
Run `npm install` to install relevant dependencies

Run `npm test` to run the tests against the RomanNumberalGenerator

## Approach
For this kata I took a TDD red, green approach.  Here we write tests first, these tests should fail to begin with and then we write our code to make the test pass.  We follow this approach and slowly build up test cases, finding any patterns that emerge as we write our code.  As patterns emerge we refactor our code to remove any repetition.

This allows us to slowly build up our logic in small chunks and should enable us to make refactors without breaking the tests we have created.  

## Assumptions, caveats and other considerations
Earlier in the year I attended a few Katas which were focused on this problem, so I already had some assumptions as to how to create the function required.  

With previous knowledge I had around the problem I felt I may have skipped into refactoring using a lookup table a bit too soon for this challenge.  I could have allowed the code to build up more patterns of repetition before refactoring, maybe.

I've recently been learning about Big O, algorithms and data structures through a Udemy course.  I'm still early in the stages of this course but I'm finding it helpful to see where I can improve my code.  The implementation is still a linear lookup, using a iterative approach to looking up data.  I tried to avoid any nesting of loops so that we can avoid O(n^) time complexity.  I could have refactored more or taken a different approach to make the function recursive, avoiding loops.  This is something I plan on doing in the near future. 

While refactoring the function to a class a few issues arose which I could have handled earlier.  The need to introduce babel and jest configs could have been done at the beginning of the excersise as well as adding some eslint rules along with prettier would have helped ensure code constistency and formatting. 

