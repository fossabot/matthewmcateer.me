---
title: "Influence Functions for Image Segmentation"
date: "2018-10-25T12:00:00.000Z"
template: "post"
usesKatex: true
draft: true
slug: "/blog/influence-functions-for-image-segmentation/"
img: "/media/neural-network-post/network3.png"
category: "Machine Learning"
tags:
  - "Machine Learning"
  - "Artificial Intelligence"
  - "Advice"
description: "Finding Helpful/Harmful training data for PSPNet"
prev: "/blog/review-of-the-hive-global-leaders-program/"
next: "/blog/journey-to-ml-part-2-skills-of-a-marketable-machine-learning-engineer/"
---

This is the Scale API Challenge
1) search github for approaches
2) find notes from Envision presentation on Adversarial segmentation (can probably find this in Messenger Messages)
- https://github.com/leilavc/seocs_lime_demo
- http://people.csail.mit.edu/beenkim/papers/BeenK_FinaleDV_ICML2017_tutorial.pdf
3) put together JuPyter notebook Solution
4) print out results of experiment
5) Put together video
6) Edit video into 5 minutes
7) look into method to change Created, Edited, and access times (one possible option: https://youtu.be/o_URnXK5Ur0)

Other Possible Interviews:
- According to Glassdoor: "Something about parsing a string I think?", "Given a circle find number of points inside it. "
- Nothing on Leetcode
- As a precaution, do image convolution exercise

Scale Practical: Pixel-wise Influence Functions for
Semantic Segmentation
Influence functions are a way to measure the impact individual points in our training data have on a model's output
PART 0: Get everything set up
PART 1: Get Influence Functions to work with PSPNet (image segmentation), non-pixel-wise (use Darkon Influence)
PART 2:  Get Influence Functions to work with PSPNet (image segmentation), pixel-wise (use Darkon Gradients)
PART 3: Influence over entire test image for which part of it is causing the mischaracterization


### References for Solution
[1]: ADE20K Dataset
https://groups.csail.mit.edu/vision/datasets/ADE20K/
[2]: Semantic Segmentation (PSPNet) with Tensorflow
https://github.com/hellochick/semantic-segmentation-tensorflow
[3]: Mislabel detection using influence function with all of layers on Cifar-10, ResNet
http://groups.csail.mit.edu/vision/datasets/ADE20K/
[4]: Darkon Documentation
http://darkon.io/example.html
[5]: Darkon Demo
https://darkon-demo.herokuapp.com/influence
[6]: Influence function example for Cifar-10, ResNet
https://nbviewer.jupyter.org/github/darkonhub/darkon-examples/blob/master/cifar10-resnet/influence_cifar10_resnet.ipynb
[7]: Mislabel detection using influence function with all of layers on Cifar-10, ResNet
https://nbviewer.jupyter.org/github/darkonhub/darkon-examples/blob/master/cifar10-resnet/influence_cifar10_resnet_mislabel_all_layers.ipynb
[8]: Mislabel detection using influence function with top one layer on Cifar-10, ResNet
https://nbviewer.jupyter.org/github/darkonhub/darkon-examples/blob/master/cifar10-resnet/influence_cifar10_resnet_mislabel_one_layer.ipynb
[9]: Gradcam example for ImageNet, ResNet50 (for the pixelwise part)
https://nbviewer.jupyter.org/github/darkonhub/darkon-examples/blob/master/gradcam/GradcamDemo.ipynb
[10]: ICML 2017 Demo
https://people.csail.mit.edu/beenkim/papers/BeenK_FinaleDV_ICML2017_tutorial.pdf
