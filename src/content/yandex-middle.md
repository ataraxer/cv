LogBroker had become the de-facto standard for internal data transfer and spanned multiple data centers in different geographical regions with hundreds of nodes.

As a middle developer I had continued developement of important LogBroker features:

- integrated distributed quotas library and developed ACLs support to deal with increased number of users migrating to the system;
- developed an automated parser and validator to enabled writing configuraiton schema in declarative style based on Scala data structures and case classes using [shapeless](https://github.com/milessabin/shapeless) library. Same auto-derived parsers/validators then could be used in multiple subsystems such as server-side and client-side validations of dynamicly applied settings for enforcing stronger correctness guarantees and ability to notify clients (usually operations) about attempts to set incorrect settings, without actually breaking anything; This dramatically introduction of new settings and configuration maintenance and prevented common errors during operations procedures, effectively preventing all configuration mistakes which could lead to system failure due to human error since release of the feature;
- developed a dedicated configuration microservice with HTTP API which enforced correctness of all applied settings;
- migrated client offset storage from ZooKeeper to new Kafka API;
- developed internal tools to simplify debugging and operations of the system;
- developed a tool for automated Kafka cluster restart, which performs rolling cluster update, checking that cluster is healthy and balanced between node restarts;
- participated in development of a tool which automaticly checks and restores Kafka cluster on failures leading to data loss on some replicas in cases when data truncation is not allowed;
- refactored a large portion of code, building a layer of abstraction over Kafka to simplify migration between versions and provide an ability to supporting an alternative backend for the system;
- supported a new experimental storage backend developed in-house by another team for providing stronger guarantees when deliviring important data such as financial information via LogBroker.
