---
title: "Correlation-Driven Multi-Modality Graph Decomposition for Cross-Subject Emotion Recognition"
date: 2024-07-21 00:01:00 +0800
selected: false
pub: "ACM MM'24, CCF-A, CORE-A*"
pub_last: ' <span class="badge badge-pill badge-publication badge-danger">Poster</span>'
pub_date: "(2024)"
abstract: >-
  Multi-modality physiological signal-based emotion recognition has attracted increasing attention as its capacity to capture human affective states comprehensively. Due to multi-modality heterogeneity and cross-subject divergence, practical applications struggle with generalizing models across individuals. Effectively addressing both issues requires mitigating the gap between multi-modality signals while acquiring generalizable representations across subjects. However, existing approaches often handle these dual challenges separately, resulting in suboptimal generalization. This study introduces a novel framework, termed Correlation-Driven Multi-Modality Graph Decomposition (CMMGD). The proposed CMMGD initially captures adaptive cross-modal correlations to connect each unimodal graph to a multi-modality mixed graph. To simultaneously address the dual challenges, it incorporates a correlation-driven graph decomposition module that decomposes the mixed graph into concordant and discrepant subgraphs based on the correlations. The decomposed concordant subgraph encompasses consistently activated features across modalities and subjects during emotion elicitation, unveiling a generalizable subspace. Additionally, we design a Multi-Modality Graph Regularized Transformer (MGRT) backbone specifically tailored for multimodal physiological signals. The MGRT can alleviate the over-smoothing issue and mitigate over-reliance on any single modality. Extensive experiments demonstrate that CMMGD outperforms the state-of-the-art methods by 1.79% and 2.65% on DEAP and MAHNOB-HCI datasets, respectively, under the leave-one-subject-out cross-validation strategy.
cover: /assets/images/covers/huang2024cdmmgd.png
authors:
  - Wuliang Huang
  - Yiqiang Chen†
  - Xinlong Jiang
  - Chenlong Gao
  - Qian Chen
  - Teng Zhang
  - Bingjie Yan
  - Yifan Wang
  - Jianrong Yang
links:
  Paper: https://openreview.net/pdf?id=sR7BptgSaw
  Bib: bib/huang2024correlation.txt
---