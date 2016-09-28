LogBroker had became the de-facto standard for internal data transfer and currently spans multiple data centers in different geographical regions and hundreds of nodes.

As a middle developer I had continued developement of important LogBroker features including:

- integrated distributed quotas and ACLs support to deal with increased number of producers and consumers migrating to the system;
- developed an automated parser and validator derivations to enabled writing configuraiton in declarative style based on Scala data structures and case classes using [shapeless](https://github.com/milessabin/shapeless) library. Same auto-derived parsers/validators then could be used in multiple subsystems such as server-side and client-side validations of dynamicly applied settings for enforcing stronger correctness guarantees and ability to notify clients (usually operations) about incorrect settings, HTTP API for cluster control and pre-commit tests of configuration all without any additional boilerplate code. This allowed to dramatically simplify addition of new settings and configuration maintenance  and prevent common errors during operations procedures, effectively preventing all configuration mistakes which could lead to system failure due to human error since feature release;
- migrated client offset storage from ZooKeeper to new Kafka API;
- worked on clean up of existing and development of additional internal tools to simplify debugging and operations of the system;
- developed a tool for automated Kafka cluster restart, which restarts cluster node by node, checking that cluster has been restored to balanced state before proceeding to next step;
- participated in development of a tool which automaticly checks and restores Kafka cluster on failures leading to data loss on some replicas in cases when data truncation is not allowed;
- refactored a large portion of code, building a layer of abstraction over Kafka to simplify migration between versions and provide an ability to supporting an alternative backend for the system;
- supported a new experimental storage backend developed in-house by another team for providing stronger guarantees when deliviring important data such as financial information via LogBroker.
