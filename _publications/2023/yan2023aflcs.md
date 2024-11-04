---
title: "AFL-CS: Asynchronous Federated Learning with Cosine Similarity-based Penalty Term and Aggregation"
date: 2023-12-17 00:01:00 +0800
selected: false
pub: "IEEE ICPADS, CCF-C"
pub_date: "2023"
abstract: >-
    Horizontal Federated Learning offers a means to develop machine learning models in the realm of medical application while preserving the confidentiality and security of patient data. However, due to the substantial heterogeneity of the devices in medical institution, traditional synchronous federated aggregation methods result in a noticeable decrease in training efficiency, thereby impacting the application and deployment of federated learning. Asynchronous Federated Learning (AFL) model aggregation methods can mitigate this problem but present new challenges in terms of convergence stability and speed. In this paper, we propose a cosine similarity-based layer-wise penalty term and asynchronous model aggregation method AFL-CS, which considers the global model convergence direction during local training. Compared with existing AFL aggregation methods, AFL-CS can achieve faster and more consistent convergence direction to superior performance especially in non-iid settings with high statistical heterogeneity, even reaching and exceeding synchronous FL.
cover: /assets/images/covers/yan2023aflcs.png
authors:
    - Bingjie Yan
    - Xinlong Jiang†
    - Yiqiang Chen†
    - Chenlong Gao
    - Xuequn Liu 
links:
    Paper: https://ieeexplore.ieee.org/document/10476054
    Bib: bib/yan2023afl.txt
    Code: https://github.com/beiyuouo/AFL-CS-ICPADS
---