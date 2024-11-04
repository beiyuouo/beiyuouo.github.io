---
title: "Doubly-Bounded Queue for Constrained Online Learning: Keeping Pace with Dynamics of Both Loss and Constraint"
date: 2024-08-04 00:01:00 +0800
selected: false
pub: "AAAI'25, CCF-A"
pub_last: 'Under review.'
pub_date: "2024"
abstract: >-
    We consider online convex optimization with time-varying constraints and conduct performance analysis using two stringent metrics: dynamic regret with respect to the online solution benchmark, and hard constraint violation that does not allow any compensated violation over time. We propose an efficient algorithm called Constrained Online Learning with Doubly-bounded Queue (COLDQ), which introduces a novel virtual queue that is both lower and upper-bounded, allowing tight control of the constraint violation without the need for the Slater condition. We prove via a new Lyapunov drift analysis that COLDQ achieves $\mathcal{O}(T^\frac{1+V_x}{2})$ dynamic regret and $\mathcal{O}(T^{V_g})$ hard constraint violation, where $V_x$ and $V_g$ capture the dynamics of the loss and constraint functions. For the first time, the two bounds smoothly approach the best-known $\mathcal{O}(T^\frac{1}{2})$ regret and $\mathcal{O}(1)$ violation, as the dynamics of the losses and constraints diminish. For strongly convex loss functions, COLDQ matches the best-known $\mathcal{O}(\log{T})$ static regret while maintaining the $\mathcal{O}(T^{V_g})$ hard constraint violation. We further introduce an expert-tracking variation of COLDQ, which achieves the same performance bounds without any prior knowledge of the system dynamics. Simulation results demonstrate that COLDQ outperforms the state-of-the-art approaches.
# cover: /assets/images/covers/eyegraphgpt.png
authors:
    Juncheng Wang†
    Bingjie Yan
    Yituo Liu
# links: 
    # Paper: https://ieeexplore.ieee.org/abstract/document/10643309/
    # Bib: bib/wang2024eyegraphgpt.txt
---