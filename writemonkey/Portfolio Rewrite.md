# Portfolio Rewrite
Version 2.0

Major revision, six weeks left. Removing client and academic focus, working on public-facing portfolio and writing for my audience. Twice weekly check-ins with advisor.

# General Housekeeping
You've got some things to work on, don't you Jen?

# From Sharon:

## REVISION is first and foremost with the conversation
Feeling existential dread during the revision process is normal, and she'd like to talk about it

- A lot of stuff seemed like it was leading up to what I was doing as opposed to what I had done
- So where's the project, then?

Who is my audience?
- Seems like I'm talking to clients? But unsure
- Audience is too general? The "you" feels like I'm not getting to the point.
- Make my audience intentional.
	- Lack of clarity and audience is causing the problem.
		- Find out who I'm talking to, and then the direction will help find itself
		- The 'cup holder' area at the thing
	- Pass through the writing looking for audience - who is my audience?
		- Reframe the writings to be
- Write about my audience
	- Talk about the things I've thought about and who I'm writing for?

"There is" is not a good phrase - doesn't have meaning, so rewrite so the sentences have meaning.

Cut the "their is" and try to reassemble sentences to make it better.

Primary Audience: The committee
Secondary Audience: Clients and/or other researchers?

Justified text is probably not good

The way I use "you" is offensive? idk

"hold your hand" feels disrespectful - this is an othering statement

## The Method
- Write the thing that goes to the public
	- Because it will mean more than just

## Read some of what I wrote out loud to hear how I "sound"
How to figure out what I'm stuck on and how to revise by reading it outloud.


## Imposter Syndrome
Don't worry about it lol

## What *actually* needs to get written, because I might have enough

## I'm not constructing myself as the enemy, and that's good.

## Focus of Scale?
-Thesis instead of portfolio?

## Public-facing portfolio
Audience: someone who knows enough who'd be looking for that information, and to be a seat at the table versus an adversary

Someone's looked up phishing, interested in phishing

Educational website - audience is the user who's looking for this information

Define for this porject, who my audience is, and define it.

A person who has googled phishing emails

## Anxiety and Writing
if I can remember the undermining of intelligence, efficacy, etc.

## Wednesday
Is there anything getting in the way of the "what's going to happen next" conversation that Sunday?

# Audience

Project has an audience split:
- Someone who is looking for information on phishing emails
- Someone who wants information on security awareness training

But someone who wants phishing emails *and* security awareness training is who?
- The cybersecurity researcher?

Red & Blue Team look at the same data from different vantage points -> cybersecurity researcher -> anyone who *needs* information on it -> Hackers.

My audience is hackers.

**My audience are hackers and researchers interested in phishing and security from a perspective that isn't corporately biased.**

## Audience
My audience is someone who is both interested in phishing emails and security awareness training. They could be a researcher, a professional, or a hobbyist...but what it boils down to is "hacker."  My audience is hackers interested in a non-corporate take on security.
Should reframe the whole business thing in this, then, I think. Maybe get rid of it for now since we're still up and coming.

## Aesthetic Fixes

1. Background color, thinking of taking inspiration from frack with a lime green touch as opposed to the red. Like a cool grey terminal with white text and black and green bars still. Maybe. Not sure.
2. Right-justified on web, especially in current design. I should find a more readable font. Tracking problems.
3. Make font size a bit bigger in the  body, I think it's 16 now.
4. Maybe find a different background gif :( Will do this with redisgn most likely.

Font ideas:
1. Courier Prime

Color theme ideas:
-Dark/black bg with

greens:
- 42C01C

## Remove

1. Phase designations - I need to come up with a better way of organizing thoughts. Nodes has come to mind a bit.
2. Creative works, maybe.
3. Providentia Security?

## Add

## New organization

Introduction
1. Landing page
2. what is this project
3. Who is this project for? (audience)
4. why is this project important to me and to you
5. about jen
6. jen's cv
7. sitemap

Phishing Emails
1. How does rhetoric and phishing go together?
2. Classes of phishing I've looked at

SAT
1. Why does SAT exist, and what motivates it? aka The Good, the Bad, and the Ugly of SAT
2. How does SAT and rhetoric go together?
3. Existing SAT I've examined
4. 
What Next?

# init

## The Landing Page - /index.hbs
    
Hello, and welcome. I'm Jenny Lynn, a Rhetoric & Writing Master's candidate at St. Cloud State University. I've thought a lot about both rhetoric and cybersecurity, and I believe a meaningful relationship exists between these two diciplines - one I believe should be examined seriously if we want to understand security from other vantage points. I'm starting that conversation with this project: an examination on various aspects and issues within cybersecurity through the lens of rhetoric. Since I am interested in digital spaces, I felt that my work is more suited to a digital space, hence this portfolio.

Currently, access to content is restricted to my committee. I expect an approval for publication near December 2019. I intend on releasing my project here when I am completed, and want to open dialogue about this exciting intersectional study. If you have questions about what I am working on, or have worked on in the past (or even just want to say hello,) please see my <a href="/about/jen">about me</a> page for contact methods.</a> I'm more than happy to talk about anything I'm working on. &#9835;

### Old writing:
This website hosts my master's portfolio project, among other things I've worked on. What's in here is mostly writing for now. I'm currently a master's candidate for a Rhetoric and Writing degree at Saint Cloud State University. Because I am a huge propoent of open source, I feel that the type of work I have been interested in [digital spaces] is more suited to a digital space than a standard thesis. I am much more open to the idea of having easily accessible knowledge and building a community, rather than hiding behind paywalls or other types of barriers. I am a huge proponent of Open Source, and feel that education should follow the same path.

I've thought a lot about both rhetoric and cybersecurity, and I believe a meaningful relationship exists between them. It's the perfect marriage of disciplines, and I feel it should be focused on seriously if we want to promote technological literacy - not just in the workplace, but overall. I aim to push that conversation in the right direction with this project. Currently, access to portfolio content is restricted to my committee. I expect an approval for publication date near December 2019. I intend on releasing my project to the wild when I have approval. If you have questions about what I am working on, or have worked on in the past (or even just want to say hello,) please see my about me page for contact methods. I'm more than happy to talk about anything I'm working on. ♫

If you have access, please click "login $USER" at the top of the page to access the portfolio. Otherwise, enjoy the links in the footer. You'll find information about me, my previous writings, artwork, and music.

## what is this project - init/theproject.hbs

A computer is a compilation of symbols that make a system we understand and use for our own benefit. Humans make meaning from the act of communication with the computer, but the computer must translate its functions in order to be understood by the human - to be *meaningful* to the human. This idea of identification and understanding is apparent even when thinking about programming *languages* - many modern languages use interpreters to execute high-level (human readable) code freely without having to compile it into low-level (machine) code first. Programming interpreters "make meaning" to the computer based on what's given in high-level code, translating it to low-level, and then producing a program that a human can make meaning from. The computer is inherently rhetorical, as is every other communicative process involved with one. This is one of the ideas where digital rhetoric spawns from - the relationship between writers and audience through the use of digital media. In this spirit, I am focusing my project on one of my long-term interests - cyber attacks - looking at both phishing emails and existing security awareness training materials to understand how the language operates within both offensive and defensive techniques. 

Often understanding of these attacks is made through behavioral science, psychology, and social engineering,  both examining how attacks are executed and how to prevent them. I say we need to go a step further and invoke rhetoric to help us understand how these communications work, and security professionals and hobbiysts would be wise to pay attention to rhetorical devices present within cyber threats. To clarify that when I discuss rhetoric here, I refer to modern rhetoric, not the traditional "art of persuasion" rhetoric. While rhetoric does focus on appeals and persuasion, modern rhetoric goes further, examining how symbol-systems shape the way people interpet reality and make meaning within it. A symbol-system can be a multitude of things - the language you're reading this in, an ideological system like religion or government, or even something like bytecode. Knowing these symbol-systems are inherently influential, modern rhetoricians focus on two-way communication as opposed to a one-way influence on the intended party. Rhetoric seeks to actively engage participants in the public sphere, while making meaning from those interactions to understand how language acts and shapes the world around it. Simply put, rhetoric is the act of meaning-making through language. Because of this, rhetoricians can enhance the way that computer and cybersecurity is discussed and understood through the very act of rhetoric itself. By focusing on communicative practices in both offensive and defensive positions, this act enhances what's already available, and creates space for new studies. 


Regardless of whether you've chosen Red or Blue, rhetoric has something for you!

Whether you're Red or Blue, rhetoric has something for you!

;)




I want to ask tough and unconventional questions



I want a space to share ideas.

Rhetoric deserves to be taken seriously, and not dismissed as "the art of persuasion" when discussing how it impacts security stuff.

This project is not meant to fight others.

I am not meaning to put down other avenues of study, but include this one.

### old writing
Now that you're here, I'm assuming you'd like to know why I've got all this security and secrecy. Rest assured, there is a reason: there is a change in how security professionals (and corporations) are managing risk when it comes to end-users. Companies are catching on that their existing platforms aren't working as well as they should be, and that it's primarily due to human factors. No doubt this is due to the changing technologies and security concerns that people interact with daily.

When I started this project, I wanted to look at a lot of different places - emails, websites masking themselves as antivirus popups, and even cultural understandings of what it means to be a hacker. So in my typical fashion, I created a project so large that no mere mortal Master's candidate would be able to complete within a respectable amount of time. While the temptation to remain a student indefinitely has undoubtedly been tempting, I was suggested to examine phishing emails for "ease of use." (Un)surprisingly, there wasn't a large amount of data available for me to analyze. Researchers who have looked into phishing emails, such as Derek Ross' Ars Dictaminus Perverted, tended to collect their own from personal accounts. (It is important to note the year of this publication was 2009, suggesting that data was limited still, then.) I had difficulty capturing data from my personal email account as well, as Gmail's spam filter was too powerful. I did at one point sign up for an OX (OpeneXchange) mail account through my domain name provider, but even with submitting my email into various forms and places, I had hardly any luck on the spam front.

After months of trying to find sources on what to use, I found the holy grail - the Enron Email Dataset. The Enron dataset is incredibly important, as it is one of the few, possibly only publicly available dataset. Since releasing a cache of emails would be a huge security risk, most companies won't release that data into the wild. The only reason we have this dataset publicly is due to it being uploaded during the Federal Energy Regulatory Commission's investigation against Enron. Because of its unique (and scarce) availability, it's a very common dataset for machine learning, like Parakweet Lab's Email Intent Data Set, which uses this same cache to detect intent within an email message. I finally thought, "wow, that's a lot of data," but since most of it had been from the early to mid-2000s I found it challenging to work with when dealing with modern trends such as clone phishing.

Many rhetoricians are interested in looking at past events to understand how current trends operate, and that's an excellent path to travel. However, looking at emails from 2004 is the equivalent of a student examining ancient Sumerian to understand the English language. Which is a valid methodology, and it can be exciting and fun, but there's been so much change in those near 4,000 years that those connections aren't exactly helpful. Much like with phishing, going from 2001 to 2019 is the equivalent of millennia, and there has been an exponential evolution in how we operate and communicate online in less than 20 years.

Think back to when you were on the internet in 2001 - Youtube didn't exist, Google was barely on the radar to the public, and AOL was the most visited website of all time. But we're in 2019 now, and you no longer have to use dial-up to access the internet (unless you want to.) The evolution of the internet as an always-on, social space for everyone has impacted how communication (and exploitation) operates. Even with this rapid change, I don't mean to say these artifacts fail to inform how phishing has worked and continues to work today. Instead, the methods now are much more sophisticated than writing a letter, and rhetorical researchers should be aware of these changes to understand what's happening with recent phishing attacks. Phishing attempts have long since changed from the standard personal solicitation scams. That's not to say that these scams don't exist still (because they do), but the methods of obtaining the payload, whether it be credentials, personal information, or even access to your computer itself, has become more sophisticated than a simple letter.

A great example of this is research published on 09.04.2019 from Checkpoint discussing a new phishing scam that targets individuals by falsifying an over-the-air (OTA) data transmission through SMS. It works via a man-in-the-middle attack [define] which tricks the user into believing they are receiving a genuine request to provision their phone. Since provisioning is standard practice for cellular carriers when setting up a customer on their network, it's unsurprising that this attack is so effective. The fantastic thing about this phishing attack is that it uses the same OTA standards that a genuine provisioning request is sent through! When the user accepts,all network traffic is accessible to the attacker, since the phone was reprovisioned to give access. Therefore someone illiterate, or merely unsuspecting, on how OTA updates work is vulnerable to this sort of attack.

This lack of awareness is precisely the problem that security professionals (and myself) are trying to understand and address. While not every attack is as potentially undetectable as this one, I recognize the phishing game has changed considerably. Which brings my main question to this: "How do we have a user tell the difference between a malicious act and a genuine act from a trusted person/provider/entity?" From a security standpoint, it can feel incredibly daunting, especially when you're trying to explain to users the intricacies of phishing tactics and how to protect them, while they don't understand why the built-in cupholder in their computer stopped working. But the rhetorical standpoint feels just as daunting since a lot of the language is visual and remarkably similar to legitimate sources. I recognize that it's going to be a lot like teaching my students in freshman composition class about rhetoric. Difficult, but manageable in small doses, I think.

I consider this project - one that imparts rhetoric as a key factor to training - as a novel idea. Companies such as KnowBe4, SANS, and many others use psychological and an understanding of social engineering to make their products, and for what it's worth, they are useful products. However, if we think about security issues like an infection, security awareness training programs function like a band-aid instead of an antiseptic. They treat the symptoms as opposed to the underlying disease: a lack of caring about critical thinking.

What I mean by that is existing training programs look at how to change people's behavior through psychological "mind tricks". So while you can psychosocially analyze people to your heart's content, there's still a gap in understanding how the language causes people to act. Not everything is behavior modification, after all! I noticed that these programs don't look at the agency of the audience, or the exigency demonstrated outside of "your company is at risk, so don't do this." It creates a very dull scenario for an employee. I think back to my own experiences with mandatory training, and often considered ways to complete it in the background so I could get on with "more important" things. I'm sure you've experienced the same feelings as well.

As dull as they seem though, these pieces of training are essential, and part of my work is going to understand how to tailor that exigency to be effective. Because to persuade an audience to react, they need convincing that a problem exists, they're affected by it, it's urgent, and there's a reasonable solution to that problem. Without these critical factors, the training is at risk of being rendered meaningless. Outside of spending tens of thousands of dollars, it wastes valuable time for a company, its employees, and creates a culture that believes "security is a waste of time," a significant issue now in organizations.

I recognize that saying we need to think critically sounds like every other talk about creating awareness of a problem and educating someone on how to do things "the right way." That all we need to do is think critically, and the problem is solved. I also recognize how cliche it sounds, but thinking critically is precisely what we have to train people to do if corporations (and individuals) want to understand, manage, and mitigate security risks.

Being an educator in various fields (robotics, educational technology, and composition/argument, respectively) has given me different terministic screens to look at the problem of critical thinking. Each domain approaches the subject very differently, and it's quite easy to see why there is such a disconnect in the technical versus the humanities. It reminds me of the ideas of Ronald Heifitz, an expert in leadership training who discusses the challenges of technical and adaptive change within organizational problems.

Technical challenges are easy to see and easy to fix, while adaptive challenges require considerable effort to understand, and are often experimental in how they are solved. The main issue I've seen in corporate environments is that they treat many, if not most, of the problems with security as a technical challenge, as opposed to adaptive. These problems can be solved partially with technical solutions, such as the examples provided in an interview with Steven Cox, VP and CSA of the security company CyberAuth. While I agree with Mr. Cox on his ideas about how to combat the onslaught of malicious attacks on users, what I don'tsee is a willingness to adapt psychologically (but more importantly, rhetorically) aside from creating a carrot-on-a-stick with a fancy UX. Don't get me wrong - I appreciate symbol-to-accept, and it is helpful in some situations, but you can't tailor emails, websites, and everything else outside of an organization to provide the same functions. What I see is a service trains users to think about a specific instance (pushing a corresponding image on a secondary device to confirm authenticity) rather than the internet experience as a whole. It's like a CAPTCHA - do you ever think about them outside of the event itself? Does it even register as a security measure to you anymore, or just "one more thing" to click on to authenticate? What does it even mean to you outside of the moment you're using it - does it even mean anything?

I believe this disconnect is part of the problem with phishing training. It functions as a technical solution to a technical problem which doesn't create value to the audience, who don't identify with it outside of being a situational problem. In reality, this training needs to be adaptive, something extrapolated to other areas of life to create value for the information to be retained. That is where rhetoric comes in. Action. Identification. Meaning-making. All of the good stuff that helps us understand why things are the way they are, how they make us human, and what all that means.

As a final note, my analysis of phishing emails is only one aspect of Security Awareness Training. There is much, much more involved in these pieces of training than phishing, but I chose to analyze this specific portion of training due to data availability. I am aware that many anti-phishing products masquerade as holistic Security Awareness Training solutions, but that is not my intent here. I see this Master's project as a framework for Providentia Security's training endeavors, and can only hope to expand the knowledge gained here to other areas of awareness training. I hope the research in the following pages is proof of that.

## Who is this project for? init/audience.hbs
Project has an audience split:
- Someone who is looking for information on phishing emails
- Someone who wants information on security awareness training

But someone who wants phishing emails *and* security awareness training is who?
- The cybersecurity researcher?

Red & Blue Team look at the same data from different vantage points -> cybersecurity researcher -> anyone who *needs* information on it -> Hackers.

My audience is hackers.

**My audience is hackers and researchers interested in phishing and security from a perspective that isn't corporately biased.**


My audience is someone who is both interested in phishing emails and security awareness training. They could be a researcher, a professional, or a hobbyist...but what it boils down to is "hacker."  My audience is hackers interested in a non-corporate take on security.


If you're here, I'm guessing you're some sort of researcher or hacker interested in understanding both the offensive and defensive side of cyber attacks. 

If not, that's cool too. 

This website is a space to share ideas, and to bring something valuable to both the rhetoric and cyber sceurity discourse communities. 






## why is this project important to me and to you - init/why.hbs

### old writing - limitations
In terms of performing analyses on phishing emails, my largest limitation has been data availability, and I have been dependant on existing sources of phishing emails. Surprisingly (or unsurprisngly, perhaps) there has been only one publicly available corpus of emails, one of which I describe in longer detail here. While I initially thought the issue would be that attackers have read over and have learned from the emails, I haven't seen that to have any noticible affect on how the emails are written and distrubuted. Not a lot has changed in terms of bulk phishing, and still operates very similarly as it did in the emails analyzed. I did consider creating a spamcatchery/honeypot, but felt time would be better serverd analyzing available records. I did manage to capture some personal spam, so I incorporated those into the project.

On the Security Awareness Training side, I ran into an issue of content not being provided without scheduling a one-on-one demo. I've circumvented some of that with my business email, while some companies have not cared that I am a student seeking information, and allowed me to utilize free demos for tools with limited functionality. But getting access to a few of the "big names" in security awareness training has been difficult. My favorite response so far has been from SANS, stating:

Unfortunately, we do not provide Demos to persons who are not in a decision making or procurement position for our commercial products. You are welcome to advise your organization's executive of our products and that Educational Institutions are eligible to receive significant discounted pricing through our REN-ISAC Partnership Aggregate Purchase year-round.

I'm not sure how I, as a student, can contact my organization's executive of products in order to have a demo of their products for my research. I'm also amazed at the suggestion to inform them they could recieve a significant discount as an educational institution for their trainings. It left a strange taste in my mouth, especially as a person who's really enjoyed SANS and what they do.

While I listed this as a limitation, I want to make note that it grew into a new point of inquiry - why don't you want me to see the content if I describe myself as a student interested in learning how things work? What are the companies trying to hide? In honesty, this limitation has made me dive a bit deeper into some of the idiosyncracies of what being an industry-leader actually means, with results both fascinating and disappointing. I may have become a bit more cynical to the process, but I think that it's been helpful in understanding what a lot of the problems are in existing security awareness training. This incident, in conjunction with discoveries made analyzing some content from another company's training respository, is largely responsible for a shift in my project's outline. While I initially was focused on creating new training materials and selling a service to prospective clients, it's awakened a desire to "get to the bottom" of what's really going on with these organizations and how they create and sell their training. Something feels amiss, and I want to find out more.

That being said, webinars that I have been able to be a part of through KnowBe4 have also been incredibly helpful in understanding various facets of this problem. One notable point was made during "In the Hot Seat: Three Experts Tackle 10 Critical Security Awareness Issues" was that a lot of anti-phishing programs are sucessfully marketed as Security Awareness Training, which ends up creating problems when actual Security Awareness Training is attempted to be implimented They also discussed how corporate culture affects Security Awareness Training and the relationship between a security team, employees, and other C-level executives. It's incredibly complicated, disheartening, and leaves a lot to be desired. But people are starting to see that they need to focus on understanding behavioral patterns and other parts of people's psychological tendencies in order to make effective training systems, and I think that opens a door for rthetorical practices, as well. 

### old writing - rationale
 This project is a culmination of many years of confusion, toiling, and rediscovery. My educational path wasn't one I'd recommend to anyone else, but it's given me a lot of interesting ideas, and challenges to move past. I'm sure you can guess that cybersecurity isn't a common hobby for people who study the humanities, so my rationale is going to start with a confession: I wanted to be security engineer. The first half of my education was in network engineering and security, and I spent a few years working as a network security intern. I saw first hand the damage caused by phishing and ransomware applications. One of the institutions I was at got hit by ransomware, and I had to deal first hand with end users who fell prey to it. Not only was it challenging due to the nature of the attack, but it was fascinating to see how users handled the attack. Some opted to pay an exorbitant fee to the attacker to have their files restored versus letting the technicians deal with it.

My training at the time was functional - you focus on how to prevent them, mitigate damage that already happened, and basically beat end-users over the head with "don't click that link!" I didn't understand at the time why someone would do that; it seemed like common sense would tell you not to shell out $600 instead of contacting someone who's qualified to deal with these problems for free. It made me curious as to why someone would choose to pay, and that thought has stuck with me over the years, either buried deep in my subconscious, or as it now: full force and screaming "LOOK, LOOK AT THIS!" I didn't realize at the time how monumental even having this thought was until much later.

A lot of things in my life changed in the five or so years that progressed between this experience and my first inclinations of my project, with one of the more difficult parts for me to deal being I was a humanities major. (Buy me a beer and we'll talk about that sometime.) Suddenly, I'm a master's student studying rhetoric in this story. A late night discussion occured with my boyfriend (now-husband) about some ideas I had about ransomware and those who fall for it - I think it was in the wake of WannaCry. What really stuck out to me was how it wasn't just the stereotypical naive person who fell for it, but digitally literate people as well. Something operated on a base level that transcended traditional ideas of “computer smarts,” and I wanted to find out what it was. So I started thinking around about phishing worked at a language level, not just psychologically. It seemed like no one was talking about these ideas, and suddenly I realize there's a gap - this is what I should be talking about! I felt like I finally had something to pull me back into what I loved. (Phishing got me hooked! <3)

As I've progressed in my research, I've discovered a sort of "miscommunication" happening on the Rhetoric side. I preface this discovery with the fact that I was not a fan of their analysis in the slightest, but did use it as a launchpad to solidify why this work is important. The article is question discusses phishing and how it relates to terrorism and racial violence. It additionally suggests that we rename terms such as phishing to digital forgery so we can understand the motive behind it better, but the problem is that is already an existing field of something unrelated. This kind of publication is dangerous as allowing this type of misinformation or suggestions of "alternatives" damages the credibility of rhetoric as a genre of analysis concerning cybersecurity. I want to set the record straight and explore phishing rhetorically as someone who is knowledgeable of the technical side of phishing.

Regarding Security, I've delved into a few security awareness training programs and have found that the trtaining tends to focus on remediating functional concerns as opposed to helping users learn about the problems from a critical-thinking perspective. I'm assuming that, much like myself years ago, this tendency to fix the problem by applying functional solutions is ingrained in them through years of experience with both the subject matter, and prior education. Security professionals think about how to fix it, generally without addressing human factors such as agency or the literacy level of the user. Both are focused on educating someone about something, but they're missing a commonality between the two. That's what I'm here to find.

The lack is one of the best parts of research. Seeing the struggle for understanding on both ends helped me see that a meaningful relationship between rhetoric and cybersecurity is not only possible, but it's a perfect marriage of disciplines. One that should be focused on seriously if we want to promote technological literacy, not just in the workplace, but overall. And I aim to push that conversation in the right direction with this project.

Finally, I've chosen to create this project as a digital portfolio over a thesis because I feel that the type of work I have been interested in [digital spaces] is more suited to a digital space than a standard thesis. I am much more open to the idea of having easily accessible knowledge and building a community, rather than hiding behind paywalls or other types of barriers. I am a huge proponent of Open Source, and feel that education should follow the same path. 

## bibliography - init/bibliography
## about jen - init/jen.hbs

## jen's cv - init/cv.hbs

## sitemap - init/sitemap.hbs