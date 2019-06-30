---
title: "Private Machine Learning (Explained in 5 levels of difficulty)"
date: "2018-12-17T12:00:00.000Z"
template: "post"
draft: false
slug: "/blog/private-machine-learning-explained/"
img: "/media/webpack.png"
category: "Machine Learning"
tags:
  - "Private Machine Learning"
  - "Entrepreneurship"
  - "Tech"
  - "DeMoloch"
  - "Blockchain"
description: "An intuitive explanation of some key parts of private machine learning"
canonical: https://demoloch.org/eli5
prev: "/blog/journey-to-ml-part-2-skills-of-a-marketable-machine-learning-engineer/"
next: "/blog/new-website/"
---

>"An alleged scientific discovery has no merit unless it can be explained to a barmaid."
>Lord Ernest Rutherford of Nelson, the “Father of Nuclear Physics”

Federated machine learning and homomorphic encryption are new technologies in ensuring data security.

The purpose behind DeMoloch is to allow people to use federated machine learning and homomorphic encryption technologies but WITHOUT the need to understand them being a barrier. Part of this has been achieved by making a much simpler interface that a person can use even if they’ve never touched a command line in their life.

Still, maximizing the positive impact that private machine learning has on the world will require more people to understand what it does, and improving this technology further will require understanding the technology inside and out.

Recently I came across a YouTube series by Wired Magazine: “[insert topic here] Expert Explains One Concept in 5 Levels of Difficulty”. In the series, a guest has to explain one topic (whether it be [CRISPR](https://www.youtube.com/watch?v=sweN8d4_MUg), [Blockchain](https://www.youtube.com/watch?v=opqIa5Jiwuw), [Quantum Computing](https://www.youtube.com/watch?v=OWJCfOvochA), [Musical Harmony](https://www.youtube.com/watch?v=eRkgK4jfi6M), [Virtual Reality](https://www.youtube.com/watch?v=akveRNY6Ulw), [the Connectome](https://www.youtube.com/watch?v=opqIa5Jiwuw)) to 5 people:

- a child,
- a teenager,
- a college student,
- a grad student in the field
- a world-class expert.
I set out to create a similar guide for the technology behind DeMoloch, private machine learning

The following text is the result of feedback from actual individuals at each level of complexity (per their recommendations, I’ve paraphrased the conversations to be more one-sided, and more generalizable).

## Level 1: Child
### (7-year old)
You know computers? Well, we can get computers to do a lot. Computers, you give them very specific instructions, called programs. We can create programs, and we call this programming. But, sometimes there are things that are too hard to turn into specific directions.

Like, if you wanted the computer to take a picture, and tell you if the picture is of a dog or not, that’s going to be hard, because computers don’t see like we do. They just see numbers, no floppy ears, or nose. And it’s hard for a person to look at a bunch of numbers and say, “okay computer, this part is a dog. When you see these numbers, this means the picture has a dog in it”.

Computers are actually very dumb like this.

BUT, if you were to show the computer lots and lots of pictures of dogs, it can actually recognize them without someone having to program it.

But now we can go further. Imagine if the computer could learn what a dog looks like, WITHOUT directly seeing the pictures.

It’s not quite psychic. We’re using really special math. We use a technology called private machine learning.

## Level 2: Teenager
### (high-schooler)
You’ve heard the phrase big data before, right? This involves getting a computer to learn from patterns on its own. So for tasks that are too complicated to program just with text, we can set up these algorithms to learn patterns from a bunch of examples of data. For example, teaching a computer to recognize human faces by showing it a bunch of faces. And this technology is being used in fields from finance to medicine.

Now, you may have been hearing a lot about these big data breaches. Facebook maybe? So people have been criticizing companies like this for using big data technologies without being careful about hackers getting ahold of it. This was just for social media data, imagine if a company was trying to take this big data approach with something like medical records to predict. THe problem is that a lot of the machine learning still needs a lot of examples.

This is what private machine learning is supposed to fix. Private machine learning is a way to make sure the data the algorithms are being learned from is kept separate. If a hacker breaks in, they don’t have access to the data. Sometimes the data may be on a lot of devices. It’s like if instead of facebook collecting all your social media info and storing it in one place, it was just on your phone. A hacker couldn’t break into the master database and steal info on millions of people they’d have to go through each person’s password-protected accounts the hard way (and it’s a LOT harder to steal millions of people’s information the hard way like that). We can also see to it that the information is encoded in ways that are hard to understand by humans (e.g., personal info just looks like gobbledygook), but that the machine learning algorithms still understand when they’re trying to learn. I’m working on making this privacy technology really easy to use, even without understanding all of the precise math and theory behind it.

## Level 3: College Student
### (CS undergrad)
So you’re familiar with machine learning. As you might be aware. this involves the use of algorithms that make use of a lot of data, like neural networks, multilayer perceptrons. Many follow the same pattern. The neural network makes predictions, and it gets better and better scores when compared to actual results. The problem is that many of these algorithms still require enormous amounts of training data. Obviously in the wake of all these big data breaches we’ve been having recently (you may be tired of reading all the news about it), there have been a bunch of concerns about all this data being aggregated and collected. Still, people want to be able to use this technology to do large-scale machine learning without exposing the data or violating the privacy of the people who contributed the data.

So there are two main techniques behind this: Federated machine learning and homomorphic encryption. Federated machine learning is pretty much what it sounds like. The machine learning model is split up. Data is on different devices. smaller versions of the machine learning algorithm get trained on those data subsets, and then the model itself is sent to a main computer instead of the actual data being collected on one machine. In some versions of this, these models can then be combined, and then the updated machine learning model can be split up again across the different devices for more iterations and more improvement, if needed. So basically, the sensitive data never leaves the device

Homomorphic encryption is a special kind of encryption that allows us to do mathematical operations on data that’s still encrypted. You can basically take an encoding for 3 and 5, add them, and get 8, while the true values of the numbers are still hidden. There have been many different versions of this type of encryption, but the encryption strategies have gotten much more advanced in the past 6 years.

So when we combine these techniques, we can still do our machine learning, but we can add a bunch of degrees of separation when we do it. There are still further challenges when it comes to optimizing the network itself, but now the biggest weak points for data security are taken care of, and it becomes a matter of system design for reducing latency.

## Level 4: Grad Student
### (CS at Stanford)
So, big data you’re obviously familiar with if you’re this far. Machine learning you’re familiar with. You know there are many different types of machine learning algorithms, such as neural networks, support vector machines, decision trees. Many of these are still dependent on large amounts of data. Fortunately we have a variety of techniques we can use to split up this machine learning model training

So then the biggest parts of this are the federated machine learning and homomorphic encryption. The federated machine learning aspect is when untrained copies of the machine learning models themselves are split among many different devices. The intermediate machine learning models can then be aggregated on one oracle instead of the data itself, and then we can use that aggregated version to split up the model among the data sources again. The common example of this is trading the updated weights of a neural network back and forth between nodes, but this can also be adapted to other machine learning algorithms as well, such as decision trees.

This requires a bit more back-and-forth, and it’s speed will be partially dependent on the strength of the connections between the machines that are running these computations. However, the splitting up of the machine learning operations like this has given a lot more hope for the creation of marketplaces for both the data, and the renting out of the computation (managed with resources like Bitcoin or Ethereum).

Homomorphic is particularly exciting. The idea is being able to run mathematical functions on encoded data and getting coherent outputs. This existed in a few forms in the past, including with partial-homomorphic encryption, but in recent years there have emerged algorithms for full homomorphic encryption. These algorithms are much stronger, especially the lattice-based homomorphic encryption. This involves encoding the data using a higher-dimensional lattice. So the data can still have mathematical operations based on it, but the encryption will still have no clear way to break it (even for a quantum computer). Homomorphic encryption also means that we can more easily do private machine learning with unsupervised algorithms, like PCA or t-SNE.

If you can combine this with something like a machine learning marketplace or machine learning competition, you can likely increase the size and numbers of datasets that people are comfortable submitting to these if they know it’s protected. Now, there are still some ways in which there might be vulnerabilities that we don’t know about, that might be exposable to adversarial attacks, but we can anticipate a lot of these by using techniques like universal data schemas. This involves a common data schema being created so that space for all of the data types being collected is in the schema. It doesn’t really matter whether the data itself is created. From this, the encryption can be made stronger, and it will defy attempts at learn any patterns in the hashes (several groups have been working on ways to do this with adversarial models, but none of the approaches are anywhere close to breaking this kind of encryption).

## Level 5: Expert
### (Machine Learning researcher at Google Deepmind)
So, private machine learning is an integral part of many proposed uses for AI. Beyond being critical for projects involving sensitive data (e.g., situations where GDPR enforcement is a big concern), being able to train machine learning models on sensitive data. It's also even more important after Cambridge analytica demonstrated that a lot of data we thought wasn't sensitive actualy was. Fred Ersham, one of the co-founders of coinbase recently discussed the possibility of distributed machine learning model marketplaces. Some of this was first implemented on a much smaller scale with Numerai back in 2015, but since then so many other machine learning algorithms have been adapted to be able to make use of federated machine learning. This is good progress, but there's still more to go. As with any technology, its maturation will be dependent on it running in the background without the user giving much thought to it.

So, one of the pieces that made this project possible was the OpenMined Library. I was a contributor to this project for a while, at one point demonstrating it's precise usefulness for combining it with a machine learning model marketplace, where models are trained using this private machine learning, and then the top scoring models can get a reward (the example currency we used was stellar XLM). The example model we originally used was using a modified Mask-R-CNN for image segmentation (ike the kind that self-driving car researchers use).

Homomorphic encryption is one of the important pieces of this tech stack. This is the tool for allowing machine learning operations to be run on encrypted data. This has been demonstrated in both supervised and unsupervised learning situations. There are a few groups working on exploring the use-cases of this for Reinforcement learning as well, as that would be invaluable in finance. This type of cryptosystem has been an area of research for a while (with partial examples such as Unpadded RSA, Paillier, ElGamal, etc.), but it's only recently that we migrated from partial-homomorphic cryptosystems to full-homomorphic cryptosystems (A cryptosystem that supports arbitrary computation on ciphertexts). This is far more powerful. Such a scheme enables the construction of programs for any desirable functionality, which can be run on encrypted inputs to produce an encryption of the result. Since such a program need never decrypt its inputs, it can be run by an untrusted party without revealing its inputs and internal state. This makes the cloud computing needed for successful federated machine learning much more secure. Since many of the full-homomorphic encryption systems work through lattice-based cryptography, it's theoretically possible to make this quantum secure (even with one that DOES have the processing power for running Shor's Algorithm).

Even with both of these there is the risk of adversarial attacks. One of the OpenMined's ideas was the creation of universal data schemas that would confuse attempts by adversarial attacks to uncover the identity of the information on the network. This was a good start, but some recent algorithms can go even further. Private Aggregation of Teacher Ensembles (P.A.T.E.) algorithms are a very interesting approach to this. This family of algorithms is based on this idea: if two different classifiers, trained on two different datasets with no training examples in common, agree on how to classify a new input example, then that decision does not reveal information about any single training example. These different models that have been trained on subsets of the data are known as the "Teachers". For a given data instance, The teachers will then be queried for predictions. The models will vote on the labels, and gaussian noise will be added to the vote tallies. If enough of the "teachers" are making a certain prediction even after adding a lot of noise to the votes, a set of partially-labelled data will be created. From this the "Student" model can then learn. Setting up aggregators like this when creating the master ML model can do a lot for both the pivacy of the contributors and the accuracy of the model.

Of course, all of these techniques become a lot harder to break if they’re used in combination, and if everyone is able to readily use them without setting these up. One of the remaining challenges is any additional time complexity that gets added due to both the encryption/decryption process, as well as working with data and models stored on many different nodes. The data privacy problem becomes much more tractable, but the problem becomes one of distributed system design. One of the promising approaches is to set up a system like a machine learning competition or machine learning model marketplace, where resources (such as an existing cryptocurency like Ethereum's Gas or Stellar's XLM) can be spent and traded to manage compute time and reimburse data contributors for their data.

Part of the reason that this project is important is also from an AI safety perspective. A lot of researchers in he field point out that many of the dangers are already here. High Frequency traders can make up 2/3 of the stock trades on an exchange. In addition to stock price manipulation, they're the main causes of "flash crashes". Adding a few degrees of separation to some of these machines could mitigate the economic risks of these. Basically tools like this reduce the amount of data (and hopefully thereby power) that certain algorithms can consolidate.

That was private machine learning explained in 5 levels of complexity.

Hopefully you came away from this having learned something!
