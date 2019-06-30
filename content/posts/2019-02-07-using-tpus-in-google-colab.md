---
title: "Using TPUs in Google Colab (properly)"
date: "2019-02-07T12:00:00.000Z"
template: "post"
draft: true
slug: "/blog/using-tpus-in-google-colab/"
img: "/media/webpack.png"
category: "Machine Learning"
tags:
  - "Machine Learning"
  - "Tensorflow"
  - "Tech"
  - "Google Colab"
  - "Tutorial"
description: "A simple way to use TPUs with minimal hardware optimization"
prev: "/blog/journey-to-ml-part-2-skills-of-a-marketable-machine-learning-engineer/"
next: "/blog/new-website/"
---

There are plenty of articles out there detailing the differences between TPUs. one of the main challenges that can take some getting used to is that you need to specify the hardware itself

https://colab.research.google.com/drive/1jOfBdbnTk3WTkpesUaMdfEkWLf5S1ZgC

First, let's set up our model. We can use any arbitrary model we want, but for demonstration purposes we'll use a large, out-of-the-box model. VGG is not the most up-to-date classification model, but it is large enough that we should see some dramatic differences in performance (if there is an improvement).

```python
model = VGG16Net(input_shape=X_tr.shape[1:], classes=1001, batch_size=batch_size)

model.compile(loss='categorical_crossentropy',
          optimizer=tf.train.AdamOptimizer(learning_rate=1e-3),
          metrics=['accuracy'])
```

configuring the TPU

```python
import os

TPU_WORKER = 'grpc://' + os.environ['COLAB_TPU_ADDR']

strategy = tf.contrib.tpu.TPUDistributionStrategy(tf.contrib.cluster_resolver.TPUClusterResolver(TPU_WORKER))
tpu_model = tf.contrib.tpu.keras_to_tpu_model(model, strategy=strategy)

tpu_model.summary()
```

Now, you can actually use the TPUs to fit he model

```python
tpu_model.fit(X_tr, y_tr,
              epochs=100,
              batch_size=batch_size
)
```

