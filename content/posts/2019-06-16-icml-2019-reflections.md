---
title: "ICML 2019 Reflections"
date: "2019-06-16T12:00:00.000Z"
template: "post"
draft: false
slug: "/blog/icml-2019-reflections/"
img: "/media/xkcd-290.png"
category: "Machine Learning"
tags:
  - "Meta"
  - "Learning"
  - "Career"
description: "Common themes in the research, and my first time here"
prev: "/blog/journey-to-ml-part-2-skills-of-a-marketable-machine-learning-engineer/"
next: "/blog/journey-to-machine-learning-part-1-introductions-motivations-and-roadmap/"
---

This past week was big. Those in the ML field know that the Thirty-sixth International Conference on Machine Learning (ICML 2019) was just held in Long Beach, CA. For those that aren’t in the ML field, this a giant, international academic conference on machine learning (in fact, one of the two primary conferences in the space alongside NeurIPS). It’s a little bit different than academic conferences in other fields, in large part because you’ve got large multinational companies releasing their research to the community alongside the usual academic researchers.

This is not going to be one of those posts that debates the merits/downsides of industry groups presenting at academic conferences (truth be told I’m glad that all these companies were tricked into this almost-altruistic behavior by the conferences presenting themselves as signalling opportunities). This is going to be a simple overview of what I thought were the main highlights (at least of the events that I attended). Here are some of my higher-level reflections:

- The analogy of how memory flaws in computers were deemed unimportant in the 1980s, until the internet came around and a new virus was shutting down thousands of machines every other week, doesn’t really apply to adversarial attacks against ML models. The situation is _much_ worse for the ML models.
- Differential Privacy is often really tricky to get right in the real world. It’s really easy to implement either too much or too little anonymity. There is likely enormous value in solving this
- For homomorphic encryption in ML, attackers don't attack the cryptography part because that's usually the hardest to crack. By extension, ML engineers need to become much more aware of how the systems they’re deploying in actually work if they want any hope of security.
- Apparently this year’s ICML was much more focused on reproducibility (with an added requirement for submitted papers to include code). As an ex-biologist, I am extremely grateful for this development.
- There was a lot of fantastic research on cooperation between RL agents, especially from DeepMind.
- A lot of fantastic work on conditional $p(x|y)$ generative models (contrast with un conditional $p(x)$ generative models). More researchers are also trying to move away from the gaussian assumption in this area.
- Solution manifolds for generalizable representation learning
- There was a fantastic workshop on lifelong RL (RL agents that learn policies over longer stretches of time like days, or weeks, or potentially even months or years).
- When it comes to evaluating how well RL or GAN algorithms work, most of the existing methods are woefully inadequate.
- Global warming was also the subject of a prominent talk with Andrew Ng. Between cryptocurrency mining and neural architecture search, people are becoming uncomfortably aware of the carbon footprints of their GPU-usage. Many of the speakers seemed aware of how daunting the problem seems, which is why it was encouraging that the rooms were packed with people presenting ways of using ML for fighting global warming.
- Building off the carbon footprint problems with high-GPU-usage techniques, it seems like there will be enormous value in CPU-compatible methods like probabilistic models derived from NNs, or automatic causal inference. I’m not entirely convinced of the thesis that ever-growing compute-availability will be able to solve any problem. I think there is under-appreciated value in figuring out how to do more with the same computational resources.

Now all these trends are interesting and all, but this ICML was significant for another reason: It was also my very first machine learning conference ever where I had contributed to work being presented there (I was part of THREE different papers). Because of this there were a few lessons and takeaways regarding my career in AI/ML itself that were reinforced by being at this conference:

- You shouldn’t be afraid to ask the "dumb" questions. Most of the people presenting slides or posters are more than happy to answer them. In some cases there might be too few people questioning the critical assumptions behind a piece of research.
- You shouldn’t just focus on your particular subdiscipline for inspiration. There is a ton of value in explicitly setting time in your schedule where you only focus on other areas of research
- Visualization tools go really far. It seemed like some posters and presentations got a lot of attention just because they had an intuitive visual (or in some cases, the authors just remembered to set their Jupyter notebooks to `retina` resolution).
- Conversations with the researchers are far more valuable than videos. Videos can often have a much better signal-to-noise ratios than many papers. The papers themselves at least have more value to them than the conference talks.
- It’s important to recognize and backtrack from dead-ends. There are plenty of projects that I was working on that I wanted to submit to this conference (in addition to what was already presented). In the end, I realized that these projects either weren’t really innovative, or were made redundant by something else at ICML. I decided to focus my efforts on the 
- Don’t get too roped into hype surrounding new techniques. There have been plenty of new algorithms that were the most popular at ICML or NeurIPS in previous years. I was surprised at how infrequently many of these were mentioned at this year’s ICML.
- Don’t stop writing (I knew this was important before, but my experience at ICML reinforced this).
- Mental and physical health are prerequisites for research. If you don’t have either of those you won’t get very far. I know this might sound like a platitude to many readers, but I want to emphasize that this is especially the case for getting a lot out of conferences (I got a lot more out of the day after I slept at an AirBnB than the day after I slept at the airport).

I didn’t stick around for the CVPR conference that was not only happening immediately after ICML, but also right in the same conference hall (2 weeks is too much time to spend at a conference for me). For the next one I attend, I will try and make a more comprehensive list of notes to share with everyone. For an idea of what to expect from me for the next one, I saw David Abel at the conference [taking notes and formatting them in LaTex in real-time](https://david-abel.github.io/notes/icml_2019.pdf). I couldn’t believe what I was seeing. I am not that kind of a LaTeX savant, but I will try and provide a similar level of detail next time.

If you’d like to stay up to date on new posts, you can subscribe below.

