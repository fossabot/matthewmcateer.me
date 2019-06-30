---
title: "Practical Causal Inference"
date: "2018-11-17T12:00:00.000Z"
template: "post"
draft: false
slug: "/blog/practical-causal-inference/"
img: "/media/image-sizing-post/map-big.jpg"
category: "Machine Learning"
tags:
  - "Machine Learning"
  - "Careers"
  - "Artificial Intelligence"
description: "Putting Judea Pearl's ideas into actual code"
prev: "/blog/journey-to-machine-learning-part-1-introductions-motivations-and-roadmap/"
next: "/blog/what-the-heck-happened-to-social-media/"
twitterEmbed: true
---
One of the criticisms of machine learning is that it’s only learning from correlations in data. However deep your neural network is, most of the patterns it’s matching are likely devoid of true understanding of the latent factors resulting in the “why” of what the data.

AI is not some all-knowing god that lives in the cloud. It’s a collection of statistical techniques used to solve various problems. AI is comprised of four components: Data, Algorithms, Computer, and education. Computer science theorists educate themselves in mathematics to create algos, a set of rules that can be followed for a problem-solving operation. They then train these algorithms to learn from data using compute power. These trained algorithms are then applied to large problems.

If we want to use AI to solve these complex problems, we need to work on the algorithms side of this. However these neural networks are touted as being the next step on the road to AGI, there is still MUCH further to go.

One of these limitations is lack of causal reasoning. While machine learning typically focuses on prediction, causal inference relates to decision-making. If supervised learning is akin to classical conditioning, and reinforcement learning is akin to operant conditioning, causal inference is the ML equivalent of learning by reasoning.

For example, if we want to predict whether our user will continue to use our service in the next year, based on their behavior in the first month, We’d use machine learning techniques to figure this out. Specifically, we’d use a classification model as a function of first-month behaviors. We could then narrow down a series of behaviors that highly correlate with staying with the service for 1+ years, which would help optimize marketing spending. The magic moment isn’t about determining retention, it’s determining the set of 1st-month behaviors that causally drive retention. In Facebook’s case, if users who obtain more friends at the start are more likely to obtain just because they’re different people (e.g., more social, more interested in the product, more addicted to technology), then they can make strategic product decisions to invest in early friending, based on observational correlations between real friending and these personality traits. Making decisions just on these correlations would yield suboptimial business results. 

We need machines to be able to reason causally, not just by association. Reasoning by association was a challenge that was solved decades ago with inventions like bayesian networks, which automatically associated a potential cause with a set of observable conditions. Bayesian networks made it possible, for say, a patient returning from africa with a fever, the most likely diagnosis was malaria. The second step up from that, which we are on today, is a glorified version of that first step. Deep learning finds hidden regularities in large sets of data. All of deep learning’s impressive achievements amount to curve-fitting, meaning fitting a model to the data so we can make predictions.

But the future of AI is replacing reasoning by association with causal reasoning. Instead of merely correlating fever with malaria, machines need to be able to reason that Malaria causes fever. Once we have this kind of causal framework in place, it becomes possible to ask computers for counterfactuals. For example, how the causal relationship would change, given some kind of intervention X, which is the cornerstone of scientific research

[Judea Pearl](http://bayes.cs.ucla.edu/jp_home.html), who is credited with inventing bayesian networks, recently wrote [“The book of Why”](https://www.amazon.com/Book-Why-Science-Cause-Effect/dp/046509760X). In it, he divides causal reasoning into 3 layers:


Counterfactuals are the building blocks of scientific thinking, as well as legal and moral reasoning. Each of these has a syntactic signature that characterizes it. Associations are characterized by conditional probability $p(y|x)$. We can use bayesian networks, or any of the other deep learning models that support this, to come up with associations. At the interventional layer, we define the probability of event $y$ given that we intervene (Judea pearl calls this the $do()$ operator) and set $x$ to a different value and observe $z$. We can estimate this experimentally, or we can do this with analytic techniques like bayesian neural networks. At the Counterfactual level, we have the probability of event $y$ had $x$ been some value, given that we already observed $x=x’$ and $y=y’$. Judea Pearl’s book theorized about the need for a new type of mathematics (called “do calculus”) to formalize these computational counterfactuals. “The Book of Why” was a fantastic introduction to the concept of formalizing causal inference. I recommend it to anyone that wants a high-level understanding…

...but…

...we can’t rely on just high-level details forever. At some point, you’re going to be curious about how to actually implement these tools that you’ve learned. Several groups and companies have already been working on tools for causal inference. Microsoft Research recently put together an experimental library called [doWhy](https://www.microsoft.com/en-us/research/blog/dowhy-a-library-for-causal-inference/) ([Github repo here](https://github.com/Microsoft/dowhy))

Microsoft research has put together some examples.

Let's go through an example. We can download DoWhy from the github. For this problem we will use the XXXXX dataset. There are four main stages to using DoWhy:

1. Model: DoWhy models each problem using a graph of causal relationships. The current version of DoWhy supports two formats for graph input: gml (preferred) and dot. The graph might include prior knowledge of the causal relationships in the variables but DoWhy does not make any immediate assumptions.
2. Identify: Using the input graph, DoWhy finds all possible ways of identifying a desired causal effect based on the graphical model. It uses graph-based criteria and do-calculus to find potential ways find expressions that can identify the causal effect
3. Estimate: DoWhy estimates the causal effect using statistical methods such as matching or instrumental variables. The current version of DoWhy supports estimation methods based such as propensity-based-stratification or propensity-score-matching that focus on estimating the treatment assignment as well as regression techniques that focus on estimating the response surface.
4. Verify: Finally, DoWhy uses different robustness methods to verify the validity of the causal effect.


I enjoyed using this framework. It felt like [the DoWhy team](https://www.microsoft.com/en-us/research/group/causal-inference/) built it to feel like a combination of using Pandas and using Keras. Several parts of “do calculus” are much easier with it. There are still a few features that will be needed in any causal inference framework:
Reinforcement learning is one of the obvious areas that could benefit from causal inference. Solving more complex environments that require puzzle-solving will not be possible without integrating some kind of causal reasoning. 

For more details on Causal inference, I highly recommend the blog [iNFERENce.VC](https://www.inference.vc/). The author made a wonderful guide available [here](https://www.inference.vc/untitled/).
