---
title: "Teaching an LSTM how XOR works"
date: "2019-04-07T12:00:00.000Z"
template: "post"
usesKatex: true
draft: true
slug: "/blog/teaching-an-lstm-how-xor-works/"
img: "/media/neural-network-post/network3.png"
category: "Machine Learning"
tags:
  - "Machine Learning"
  - "Artificial Intelligence"
  - "Advice"
  - "Tutorial"
description: "Another response to a low-level request for research"
prev: "/blog/review-of-the-hive-global-leaders-program/"
next: "/blog/journey-to-ml-part-2-skills-of-a-marketable-machine-learning-engineer/"
---

In OpenAI's "Requests for Research 2.0", the OpenAI team lists a few interesting ideas. Here's an example of one:

> ⭐ Train an LSTM to solve the `XOR` problem: that is, given a sequence of bits, determine its parity. The [LSTM](http://colah.github.io/posts/2015-08-Understanding-LSTMs/) should consume the sequence, one bit at a time, and then output the correct answer at the sequence’s end. Test the two approaches below:

- Generate a dataset of random 100,000 binary strings of length 50. Train the LSTM; what performance do you get?
- Generate a dataset of random 100,000 binary strings, where the length of each string is independently and randomly chosen between 1 and 50. Train the LSTM. Does it succeed? What explains the difference?

https://openai.com/blog/requests-for-research-2/

https://github.com/openai/requests-for-research

https://www.reddit.com/r/MachineLearning/comments/7ubc3f/d_requests_for_research_20_openai/

In the grand scheme of OpenAI's research requests, this one is in the category of "warmups". With that in mind, I figured making the thought process behind this publically available would help others in trying to get to the more advanced requests.
