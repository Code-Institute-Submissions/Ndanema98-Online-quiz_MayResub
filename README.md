# Milestone project 2
# General Knowledge Online Quiz

["General Knowledge Online Quiz"](https://ndanema98.github.io/Online-quiz/) is a website designed to entertain and quiz people of all ages on thier general knowledge.  

This website was targetted at people who want to test their general knowledge on a range of topics, want to gain more information on general topics and want to entertain themselves with a fun quiz. The timer section will have a countdown of 30 seconds, to put some urgency on the users answering the questions. There will also be a score section so that users are able to see how well they've done. This will give them the incentive to keep playing again in hopes of beating their high scores. 

Quizes have been shown to greatly help develop key skills. Attention, focus and concentration are improved by games such as this. Also users can greatly benefit from exercising and utilising their brains, and any activity which encourages mental activity maintains and can improve mental function.

This website was built using knowledge gained from HTML, CSS and JacaScript modules, for the purpose of completing my second Milestone Project for the Code Institute's full stack developer course. This website is easy to navigate and easy to read, with a clear goal and aim. 

 # User Experience/User Interface (UX/UI)

 - ## User Stories
   ### First Time User Goals
   As a first time user I want:
   - the rules and final aim of the quiz to be easy to understand.  
   - to be entertained and engaged with the quiz.  
   - the quiz to function correctly.  
   - to be able to complete the quiz on various different devices. 
   
   ### Frequent User Goals
   As a frequent user I want:
   - to be able to score my performance.
   - to be able to challenge myself by answering questions within the timer.
   - to be able to use the quiz on various different devices.

   ### Developer's Goals.
   As the developer I want:
   - to provide a fun and entertaining quiz.
   - to provide a quiz to stimulate mental function.
   - to encourage continued use of the quiz.
 
 - ## Design 
   ### Colour Scheme
   - During the construction of my quiz i experimented with many different colours and decided to settle on using different shades of blue and grey. I decided to stick to only these two colours in order to make my quiz more visually appealing. The light blue was used for most of the text colour and this is because it contrats well agaisnt the darker grey. However the dark blue was used for the text for the buttons and the timer, which also contrats well agaisnt the lighter grey. Whenever a correct answer is selected the background will also go green and whenever an incorrect answer is selected the background will go red. 

   - Dark Blue #006DC7
   ![A screenshot of my colour 1](/assets/images/colour1.png)
   
   - Light Blue #27FCF8
   ![A screenshot of my colour 2](/assets/images/colour2.png)

   - Dark Grey #696969
   ![A screenshot of my colour 3](/assets/images/colour3.png)

   - Light Grey #D9D9D9
   ![A screenshot of my colour 4](/assets/images/colour4.png)

   - Red #FF0000
   ![A screenshot of my colour 5](/assets/images/colour5.png)

   - Green #008000
   ![A screenshot of my colour 6](/assets/images/colour6.png)

   ### Typography
   - I choose 'Roboto Condensed' as the font for my website. It is a big very easy and clear to read because of the spacings of the letters.
   ![A screenshot of my font family](/assets/images/fontfamily.png)

   ### Wireframes
   ![A screenshot of my wireframe 1](/assets/images/wireframing1.png)

   ![A screenshot of my wireframe 2](/assets/images/wireframing2.png)

 # Features
 - ## Responsive Website
   ![A screenshot of my of responsive design](/assets/images/responsive-design.png)

   - This website changes it's layout to best display the content depending on the screen size. This allows the user to use the quiz on various different devices. 

 - ## Instruction Page
   ![A screenshot of my of Instructions section](/assets/images/instructions.png)

    - When the page loads, you will be able to see the instruction section straight away, this is so the user immediately knows exactly what to do. 

 - ## Start Button
   ![A screenshot of my start button](/assets/images/start-button.png)

   - When this is hovered over the colour of the text is changed, to allow the user to know exactly ewhich button they are selecting. When this is selected, the quiz starts and the timer starts to count down. 

 - ## Next Button 
   ![A screenshot of my next button](/assets/images/next-button.png)

   - Like the rest of the other buttons, when this is hovered over the colour of the text is changed, to allow the user to know exactly ewhich button they are selecting. When this is selected another question will be chosen at random and displayed. 

 - ## Restart Button 
    ![A screenshot of my restart button](/assets/images/restart-button.png)

      - Like the rest of the other buttons, when this is hovered over the colour of the text is changed, to allow the user to know exactly ewhich button they are selecting. When this is selected the quiz starts again from question 1. 

 - ## Timer 
    ![A screenshot of my timer](/assets/images/timer.png)

     - The timer function counts down from 10 for each question. When the timer reaches 0, the game is ended. This allows for a more challenging quiz for the user. 

 - ## Score Area
    ![A screenshot of my score area](/assets/images/scores.png)

     - The score area shows the user how many answers they got correct and how many answers they got wrong. This allows the users to see how well they've done and encourage them them to play again. 
 
 - ## Game Area
   ![A screenshot of my game area](/assets/images/game-area.png)
 
   - The game area displays questions at random and also displays the answer buttons which users are able to select an option from. 

 - ## Possible Future Features
   - Catogorize my questions so users can select what catogory of questions they want at the start. 
   - Displays the users score when the game is over. 
   - Set up a high-scores table on localStorage so users can compare their scores to others.
    

 # Testing 
 - ## Manual 
   - This website has been tested using three different browsers (Google Chrome, Firefox, Safari) and I can confirm that it works. 
   - This website has been tested with all the standard screen sizes and I can confirm that it is responsive. 
   - The buttons have all been tested and I can confirm that they all perform thier respective functions.
   - I can confirm that the timer works and counts down until it reaches 0. 
   - The score board has also been tested and I can confirm that the correct and incoreect answers are added whenever a user answers the question.

 - ## Validator 
   - ### HTML
     - The official W3C validator was used to validate my HTML. No errors were found when my code was input.
     ![A screenshot of my html validation](/assets/images/htmlvalidator.png)

   - ### CSS 
     - The official W3C validator (Jigsaw) was used to validate my CSS. No errors were found when my code was input.
     ![A screenshot of my css validation](/assets/images/cssvalidator.png)

   - ### Javascript
    

  - ## Accessibility 
    - The Lighthouse function in devtools was used to see if the font and the font colours used were easy to read and access. I can confirm that the page on my website passed. 
    ![A screenshot of my css validation](/assets/images/accesibility.png)

  
- ## Bugs 
   - ### Solved 
     - #### Ammend issue with start button

     - #### Ammend issue with background colour

     - #### Repair timer function

     - #### Repair score board functionality

     - #### Ammed score-area styling

     - #### Hide instructions when quiz starts

   - ### Unsolved 
     - #### Repair problem with media queries
      
 # Languages used 
   - HTML
   - CSS
   - Javascript

 # Technologies Used 
   - Git 
     - Allowed me to add commit and push my code to github for version control. 
   - Gitpod 
     - The programme used to code my website.
   - Github 
     - Allowed me to store my repository and files pushed from Gitpod.
   - Fontawesome 
     - Used to display icons to make my website more visually appealing. 
   - Chrome developer tools 
     - Allowed me to troubleshoot and edit my code.
   - Am I Responsive 
      - Allowed me to check the responsiveness of my website at different screen sizes. 
   - W3C Validator 
      - Allowed me to validate my HTML and CSS code against industry standard. 

 # Deployment
  - ## Remote 
   1. Click on the settings icon in the navigation bar.
   2. Scoll until Github pages is visable.
   3. Once clicked change the branch to "main" and change the directory to "root". 
   4. Next, click the save button. 
   5. It may take a few moments for the website to publish but once its done, a link to the live website will be provided. 

  - ## Forking
   1. In the top right corner of the page click on the fork button. 
   2. The next page will show a forked version of my project. 

  - ## Cloning a repository
   1. Fork the repository using the steps above. 
   2. Next click code 
   3. You will then be asked if you want to clone using HTTPS, SSH or Github CLI
   4. Click the copy button
   5. Open Git bash and select the directory you want the clone to go to
   6. Type git clone and then paste the URL. 
   7. Lastly press enter and your clone will be created. 

 # Credits
 - ## Images
   - The code used for my logo image can be [found here.](https://www.britannica.com/story/do-we-really-use-only-10-percent-of-our-brain)

 - ## Code
   
   - The code for my html structure was taken from [Love Maths's walkthrough](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/a8ec361b95e94c25bf8a821654bd57bc/?child=first)
    
   - The code for my javascript quiz was taken from [Youtube](https://www.youtube.com/watch?v=riDzcEQbX6k)

   - The code for my javascript timer was taken from [Stack Overflow](https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz)

   - The code for my javascript scores was taken from[Stack Overflow](https://stackoverflow.com/questions/36921415/score-in-a-javascript-quiz)

 - ## Information 
   - The questions for my quiz were taken from [Radio Times](https://www.radiotimes.com/quizzes/pub-quiz-general-knowledge/)

 # Acknowledgement 
    - The online tutors that Code Institute provides. 
    - My mentor Ben Kav for helping me when I was stuck. 
    - Everybody on slack, for their advice. 
