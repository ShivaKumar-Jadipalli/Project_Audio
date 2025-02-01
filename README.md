1. Dashboard
2. Game
3. github
4. Notion

https://www.creative-tim.com/product/notus-nextjs

our current tasks right now

1. build the playing features
2. main landing page setup
3. beautify everything
4. now setup database
5. solve that auto suggestions from browsers too, we don't need that

performing login :
Looks like to learn this completely I first need to know these three things

1. the video of firebase tutorial
   1. He is showing how to get the users google profile photo at 28:44
2. that guy showing how to create login with next js
3. next js tutorial page itself
   I believe after all this we would get an overview of what should we do

Game(props) : This takes all the values passed to it as props  
const punctuation = searchParams?.punctuation; here without the question mark tsx is showing error I don't know maybe it is thinking what if this value is not present

you know that useEffects(() => {..function},[]) here null value in the square bracket represents that it only runs once

the useEffects() with currWordIndex will follow for any changes in that value and if changed this will update the values inside that, I tried to do in the regular keydown function using if-else block but the setCurrWordIndex() updated values isn't reflecting immediately to the condition currWordIndex so it is always returning true so I choose useEffects

addPunctuation : I didn't write this function chatgpt gave it to me to add punctuation marks to the words

generateWords : so I believe this is self explanable also I don't know why but the values are coming as strings instead of boolean values so instead of modifying the input prompts I modified here

arrayShuffle() : I know we could build this code ourself but this is time-save and very clear function, the slice is so that 50 words length is maintained

PreviousWords , I just built with what little I know besides if we render this many times wouldn't this increase load on the javascript

date = {countdownDate} : here I tried to use values directly here instead of using useState but the time is resetting every time I type something so I set useState

Problem :
we have python module " YPM " and youtube official api " YOA "

### YPM :

Pros :

1. No struggle nothing just provide link it will give you subtitles

Cons :

1. will block ip address if too much request is made at once
2. format is just plain text
3. how to add python code to firebase

### YOA

Pros :

1. 10,000 songs for each day was free, You just have to pay for your additional request like 1 dollar for 2,000 requests

Cons :

1. I am just charging 30 rupees for my website bro how can I provide such a thing

### End Decision

I am thinking of going with youtube api itself and when the end user exceeds a limit for now I will ask money but immediately after luanch I will ask them to create an account themselves and provide me that api key in that way they will get free 10,000 songs and doesn't have to pay anything

I have also thought that I will use python to scrape subtitles and video of popular songs and I will add that to their drive so they can practice typing without any friction

# Today's Plan :

1. complete youtube typing feature : the youtube api is saying users need to be signed in to access this so I will give it a break here is the chat gpt conversation you can find " https://chatgpt.com/share/678b5b2b-a0cc-8003-9f51-338d76113dc8 "
2. complete audio typing feature ( I believe this also needs a login feature but I can do this without login by using local file song and srt file), so here is what you have to do in order, I have written each one in detail below
   1. An audio file typing
   2. setting up login
   3. getting files from drive
   4. setting up the youtube thing
3. send all features results and update it in dashboard cards
4. start building the main landing page and keep updating it until you luanch

# https://youtu.be/kbCzZzXTjuw?list=PLuLYbjCmb41R9BDB3rlV4Y7OqRRS-H00q : Best way to perform login

Pitfalls :

1. Do not set login condition in layout page
   1. because it only protects layout page if a user has the link of main page then it will directly be loaded without authentication

Notes :

1. I need to learn what this middleware is cause it seems like it's not just for login
2. Even while using middle ware there are still some situations where you need to use page level authentication
   1. imagine a tsx file with the original data now what if some developer imports this data to a public page then the will be able to read that data cause middle ware only protects routes mentioned there so in this cause you have to do another authentication check at the tsx file
3. He said that we also have to use a level of authentication when accessing the database cause database access is different from page access

Tasks to do :

1. create a github repo and write something in it daily and commit it like I need a vlog
   1. for this I need to create a new folder
      1. reasons :
      2. I want to understand the whole picture once
2. I need youtube vanced
3. I need to improve at every step like mr beast said
4. I need to have a journal bro like in some form
5. Don't learn anything without writing like you have that disease which is like I will learn this now and will write this later trust me bro that is the worst strategy
6. cut all toxic foods
7. from now on every sunday i will just look at the bigger picture and reflect on life like meditation and everything
