---
title: "Buffalo: Biomedical Vision-Language Understanding with Cross-Modal Prototype and Federated Foundation Model Collaboration"
date: 2024-10-21 00:01:00 +0800
selected: true
pub: "ACM CIKM'24, CCF-B, CORE-A <font color='red'>(Acceptance Rate: 22.7%)</font>"
pub_last: ' <span class="badge badge-pill badge-publication badge-danger">Oral</span>'
pub_date: "2024"
abstract: >-
  Federated learning (FL) enables collaborative learning across multiple biomedical data silos with multimodal foundation models while preserving privacy. Due to the heterogeneity in data processing and collection methodologies across diverse medical institutions and the varying medical inspections patients undergo, modal heterogeneity exists in practical scenarios, where severe modal heterogeneity may even prevent model training. With privacy considerations, data transfer cannot be permitted, restricting knowledge exchange among different clients. To trickle these issues, we propose a cross-modal prototype imputation method for visual-language understanding (Buffalo) with only a slight increase in communication cost, which can improve the performance of fine-tuning general foundation models for downstream biomedical tasks. We conducted extensive experiments on medical report generation and biomedical visual question-answering tasks. The results demonstrate that Buffalo can fully utilize data from all clients to improve model generalization compared to other modal imputation methods in three modal heterogeneity scenarios, approaching or even surpassing the performance in the ideal scenario without missing modality.
cover: /assets/images/covers/yan2024buffalo.png
authors:
  - Bingjie Yan
  - Qian Chen
  - Yiqiang Chen†
  - Xinlong Jiang
  - Wuliang Huang
  - Bingyu Wang
  - Zhirui Wang
  - Chenlong Gao
  - Teng Zhang
links:
  Paper: https://dl.acm.org/doi/10.1145/3627673.3679627
  Bib: bib/yan2024buffalo.txt

---