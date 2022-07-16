# MODULE 1 - Week 1 The Dev Workflow

## TOPICS
- [x] Curriculum Overview
- [x] Problem Workflow
- [x] Problem Solving Tips
- [x] Git Workflow (in lecture notes)
- [x] In Closing

### **Curriculum Overview**
**Module 1**: week 1- 4\
Fundamentals, FOCAL: (Functions, Objects, Conditionals, Loops )

**Module 2**:  week 5\
HTTP,  for web Developers 

**Module 3**: weeks 6-7\
Developement in Node

**Module 4**: weeks 8 - 11\
Front End development

**Module 5**: weeks 12 -13\
Backend and relational databases (SQL, Postgres)

**Module 6**: weeks 14- 15\
Midterm! we assign the teams, only limited list of assignments

**Module 7**: week 16-19\
React 

**Module 8**: weeks 20 - 21\
Automated Testing in React  

**Module 9**: weeks 22 - 26\
Ruby on Rails

**Module 10**: weeks 27 - 30\
Final Project! You will chose your product, you come up with the teams, you come up with the stack.




### **Problem Workflow**
Write a **node** program that takes in an **unlimited** number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.

1. Store arguments to a new array
2. Splice the first 2 arguments. 
3. loop through the arguments of the formatted array
- Establish a condition to check if the arguments is a number
- Ignore any non number arguments. 
4. Log the result 

### **Problem Solving Tips**
1. Plan ahead and break down the issue in the smallest tasks. Ideally write it down 
2. Console log everything to make sure the values you are using are actually what you think they are
3. Google everything you need to, BUT avoid copy/pasting as much as you can. It actually makes your learning slower
4. Error messages are your friends: try to understand what they point to and debug from there.
5. Clean up: remove all unnecessary console logs once all your testing is done

### **Git Workflow**
see docs [here](https://git-scm.com/docs)

Git allows you to keep versions of your work, to which you can refer back to if needed. 

to initialize git in your folder, run the command ```git init``` 

If ever you want to check if this was already done, you can always list the files in your folder (`ls -a`). If you see a `.git` file, you're good to go

You will have to deal with branching very soon in your learning, but as far as updating your repository for a given branch goes, follow these steps, in order.

1. Add your changes to the working tree: 
```
git add
```
2. Commit your changes, ideally with an explicit message: 
```
git commit -m"Your description here"
```
3. Upload your changes to the repository: 
```
git push
```

*Note: you may need to point to or define the origin, meaning repository's remote origin url to which those changes need to be broadcast to. We will help you if that happens. Feel free to read more on [__remote origins__](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)*