# Distributed System Visualizer

A visual simulation of distributed system concepts including replication, quorum, node failure, and recovery.

## Overview

This project demonstrates how distributed systems maintain availability and consistency when nodes fail.

Users can interact with a cluster of nodes and simulate:

• Data replication
• Quorum-based operations
• Node failures
• Node recovery
• Cluster health monitoring

## Features

### Replication

Values written using PUT are replicated across multiple nodes.

### Quorum Consensus

Operations require a minimum number of active nodes.

Example:
3 nodes → quorum = 2

### Node Failure Simulation

Nodes can be intentionally failed to observe system behavior.

### Node Recovery

Failed nodes can be restored to the cluster.

### Cluster Health Monitoring

Displays:

• Active nodes
• Failed nodes
• Required quorum
• Total keys stored

### Activity Log

Logs all operations including:

• PUT
• GET
• Node failures
• Node recovery

## Technologies Used

HTML
CSS
JavaScript

## Author

Yadlapalli Naga Venkata Deepak
