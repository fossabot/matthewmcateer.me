---
title: "Three Body Problem and Neural ODEs"
date: "2019-01-14T12:00:00.000Z"
template: "post"
usesKatex: true
draft: true
slug: "/blog/three-body-problem-and-neural-odes/"
img: "/media/neural-network-post/network3.png"
category: "Machine Learning"
tags:
  - "Machine Learning"
  - "Artificial Intelligence"
  - "Advice"
description: "Applying Neural ODEs to a scenario from Liu Cixin's cosmic horror story"
prev: "/blog/review-of-the-hive-global-leaders-program/"
next: "/blog/journey-to-ml-part-2-skills-of-a-marketable-machine-learning-engineer/"
---


Neural ODEs

revealed at NIPS

Three body problem

**SPOILER ALERT**

Plight of the Trisolarans (with code for planet motions): https://alelouis.github.io/blog/chaotic-ephemeris

Planetary modelling: https://github.com/rcburnet/Gravitational-N-Body-problems/blob/master/combined_code.py

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

still reading? Okay.

Now, the book definitely takes some artistic license with scientific accuracy (even ignoring the energy requirements of a "sophon block", we know that the Alpha Centauri system is in a far more stable orbit than portrayed in the book). Still, the process of the trisolarans to try and create a model for their homeworld's day-night cycles is an interesting one.

Basically, the planet trisolaris goes through "stable" and "chaotic" era. In the "stable" eras, days and nights are predictable lengths, the days are reasonably warm and sunny, and the nights are reasonably cool and dark. The days and nights have predictable durations. Civilization and daily life can progress. . The trisolarans for much of their history have had no way of predicting when the stable or chaotic eras would begin. As such, when one of these extreme hot or cold spots hit, trisolaran civilization would often have to reset (by the time they make contact with Earth, trisolaran civilization has reset back to the stone age about 200 times). Throughout the book, trisolaran history is introduced to humans through a VR game that replaces trisolarans with figures from all throughout human history. One particular interesting scene involves Von Neumann demonstrating to an emperor how an army of soldiers can be arranged to form a computer (with a von Neumann architecture, no less) for calculating the motions of the planets (based on Newton's ideas). In short, the trisolaran history is told through analogies to human history. But how similar should we expect an alien civilization to be in terms of computer science history? Suppose that certain concepts in computer science, such as neural ODEs, had been developed out of order compared to human computer science.

how to simulate the planetary motion (in python)

Can Neural ODEs solve this?

It gets close, but fails. 
