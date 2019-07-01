---
title: "Heirarchal Temporal Memory (in Keras)"
date: "2017-09-29T12:00:00.000Z"
template: "post"
draft: true
slug: "/blog/heirarchal-temporal-memory-in-keras/"
img: "/media/image-sizing-post/map-big.jpg"
category: "Machine Learning"
tags:
  - "Machine Learning"
  - "Tutorial"
  - "Artificial Intelligence"
  - "Neuroscience"
description: "Making ANNs that resemble actual neural networks in the brain"
prev: "/blog/journey-to-machine-learning-part-1-introductions-motivations-and-roadmap/"
next: "/blog/what-the-heck-happened-to-social-media/"
twitterEmbed: true
---
Hierarchal Temporal Memory is a theoretical framework developed by Numenta

https://colab.research.google.com/drive/1-ueHB5yN_bnTWSGIgl-CwMSSCB_4Q8Vj

Let's detail how we would actually create one of these networks:

First, let's set up our imports:
```python
import numpy as np
import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data
from keras.layers import Input, Dense
from keras.models import Model
from tqdm import tqdm
import random

from math import *
from layers import SpatialPooler # <need to add these to the standalone colab
from util import one_hot        # < Need to add these to the standalone colab

epochs = 100

num_classes = 10
num_pixels = 784
pixel_bits = 4
validation_split = 0.9
input_units = num_pixels * pixel_bits
htm_units = 2048
batch_size = 32
```

So what does this mean? Does this mean that we can model the entire brain using only neurons like this?

Not so fast, it's not quite that simple...

Projects like OpenWorm have attemtped to replicate entire neural netowkrs for simple model organisms like C. elegans worms. One of the issues is that the individual dynamics of individual neurons themselves are not fully understood yet. Some researchers have even proposed modelling indivisual neurons with ODEs and neural netowrks of their own
