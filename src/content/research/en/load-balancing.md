---
title: Load Balancing in Communication Networks
summary: We study the UELB problem, which assigns each traffic demand to a single path so as to minimize the load factor of the most congested link, using LP relaxation, Markov approximation, GNNs, and reinforcement learning.
order: 1
image: ../images/load-balancing.png
---

Keywords: load balancing / traffic engineering / combinatorial optimization / graph neural networks / reinforcement learning

## What is the UELB problem?

The UELB problem (Unsplittable flow Edge Load factor Balancing) asks how to assign each of several traffic demands (flows) to a single path in a communication network so that link load factors are balanced. Specifically, paths are chosen to minimize the load factor of the most congested link. Depending on the choice of paths, traffic can concentrate on particular links and cause delay and congestion. The problem is NP-hard, so solving it exactly on large networks is not practical.

## Example approaches

We work on approximate methods such as the following.

- **LP relaxation**: Relax the integrality constraints, solve the resulting linear program, and round the solution to an integer one.
- **Markov approximation**: Design a Markov chain over path assignments (solutions) that visits solutions with lower load factors with higher probability, and use it to search for good solutions.
- **GNN (graph neural networks)**: Learn from the network structure to predict which links and paths should be used.
- **Reinforcement learning**: Learn a policy that decides the path of each flow one at a time.
