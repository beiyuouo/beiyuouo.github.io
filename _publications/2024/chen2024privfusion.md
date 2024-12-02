---
title: "PrivFusion: Privacy-Preserving Model Fusion via Decentralized Federated Graph Matching"
date: 2024-08-21 00:01:00 +0800
selected: false
pub: "IEEE Transactions on Knowledge and Data Engineering (TKDE), CCF-A, CORE-A*"
pub_date: "(2024)"
abstract: >-
  Model fusion is becoming a crucial component in the context of model-as-a-service scenarios, enabling the delivery of high-quality model services to local users. However, this approach introduces privacy risks and imposes certain limitations on its applications. Ensuring secure model exchange and knowledge fusion among users becomes a significant challenge in this setting. To tackle this issue, we propose PrivFusion, a novel architecture that preserves privacy while facilitating model fusion under the constraints of local differential privacy. PrivFusion leverages a graph-based structure, enabling the fusion of models from multiple parties without additional training. By employing randomized mechanisms, PrivFusion ensures privacy guarantees throughout the fusion process. To enhance model privacy, our approach incorporates a hybrid local differentially private mechanism and decentralized federated graph matching, effectively protecting both activation values and weights. Additionally, we introduce a perturbation filter adapter to alleviate the impact of randomized noise, thereby recovering the utility of the fused model. Through extensive experiments conducted on diverse image datasets and real-world healthcare applications, we provide empirical evidence showcasing the effectiveness of PrivFusion in maintaining model performance while preserving privacy. Our contributions offer valuable insights and practical solutions for secure and collaborative data analysis within the domain of privacy-preserving model fusion.
cover: /assets/images/covers/chen2024privfusion.png
authors:
  - Qian Chen
  - Yiqiang Chen†
  - Xinlong Jiang
  - Weiwei Dai
  - Wuliang Huang
  - Bingjie Yan
  - Zhen Yan
  - Lu Wang
  - Bo Ye
links:
  Paper: https://ieeexplore.ieee.org/abstract/document/10643309/
  Bib: bib/chen2024privfusion.txt
---