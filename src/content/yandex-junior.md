Currently I'm working on LogBroker project – large distributed system based on [Apache Kafka](http://kafka.apache.org). LogBroker serves as a centralized data bus, which controls internal company's data flow, reaching hundreds of terabytes of throughput on a daily basis. It aggregates data from servers across the company, preprocesses it to unify format and delivers to the processing endpoints such as MapReduce clusters for batch processing or real-time log analytics systems, while ensuring lack of data loss and duplication (exactly once delivery semantics).

LogBroker is being successfuly used in production environment for over a year and gradually replaces old data flow infrastructure. 95% of data travels end-to-end from server of origin to processing endpoint in less then 3 seconds with goal towards reaching 99% mark.

During my involvement in the project I:

- migrated core components to [Akka](https://akka.io) actors;
- cleaned up service API written with [Spray](http://spray.io) for coherence, consistency and ease of use;
- developed a dynamic configuration which allowed to change settings at runtime by updating [HOCON](https://github.com/lightbend/config) config file or special nodes in [ZooKeeper](https://zookeeper.apache.org);
- developed an infrustructure for functional testing using [Jenkins](https://jenkins.io) and [Docker](https://www.docker.com) which automaticaly runs a full suite of tests for each PR;
- wrote a tonn of unit and functional tests using [ScalaTest](http://www.scalatest.org).

In the course of development I've had expirience with Scala programming language, Akka and Spray frameworks, Apache Kafka and ZooKeeper projects. I've also learned a lot about building fault-tolerant systems and distibuted service architecture.
