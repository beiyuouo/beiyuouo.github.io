---
title: "Im2col-Winograd: An Efficient and Flexible Fused-Winograd Convolution for NHWC Format on GPUs"
date: 2024-08-12 00:01:00 +0800
selected: false
pub: "ICPP'24, CCF-B"
pub_date: "2024"
abstract: >-
    Compared to standard convolution, Winograd algorithm has lower time complexity and can accelerate the execution of convolutional neural networks. Previous studies have utilized Winograd to implement 2D convolution on GPUs, mainly using 2D Winograd, and arranging tensors in NCHW or CHWN format instead of NHWC to make data access coalesced. Due to the higher space complexity of Winograd and limited hardware resources, these implementations are usually confined to small filters. To provide an efficient and flexible fused-Winograd convolution for NHWC format on GPUs, we propose Im2col-Winograd. This algorithm decomposes an ND convolution into a series of 1D convolutions to utilize 1D Winograd, thereby reducing space complexity and data-access discontinuity. The reduced space complexity makes Im2col-Winograd less restricted by hardware capability, enabling it to accommodate a wider range of filter shapes. Our implementations support 2-9 filter widths and do not use any workspace to store intermediate variables. According to the experiments, Im2col-Winograd achieves a speedup of 0.788 × to 2.05 × over the fastest benchmark algorithm in cuDNN; and shows similar convergence to PyTorch on Cifar10 and ILSVRC2012 datasets. Along with memory efficiency, the more generalized acceleration offered by Im2col-Winograd can be beneficial for extracting features at different convolution scales.
# cover: /assets/images/covers/im2col.png
authors:
    Zhiyi Zhang
    Pengfei Zhang
    Zhuopin Xu
    Bingjie Yan
    Qi Wang†
links:
    Paper: https://dl.acm.org/doi/10.1145/3673038.3673039
    Bib: bib/zhang2024im2col.txt
---
