Currently I'm working on LogBroker project – large distributed system based on Apache Kafka. LogBroker serves as a centralized data bus, which controls internal company's data flow, reaching hundreds of Terabytes of throughput on a daily basis. It aggregates data from servers across the company, preprocesses it to unify format and delivers to the processing endpoints such as MapReduce clusters for batch processing or real-time log analytics systems, while ensuring lack of data loss and duplication (exactly once delivery semantics).

LogBroker is being successfuly used in production environment for over a year and gradually replaces old data flow infrastructure. 95% of data travels end-to-end from server of origin to processing endpoint in less then 3 seconds with goal towards reaching 99% mark.

During my involvment in the project I:

- participated in migrating core components of to Akka framework;
- worked on cleaning up service API for coherence, consistency and ease of use;
- developed a dynamic configuration which allows to change properties at runtime via file update or setting an overriding value to ZooKeeper without having to restart the service;
- developed an infrustructure for functional testing using Jenkins, Docker and ScalaTest, which automaticaly runs a full suite of tests for each commit and build;
- participated in developing unit and functional tests for the project;

In the course of development I've had expirience with Scala programming language, Akka and Spray frameworks, Apache Kafka and ZooKeeper projects. I've also learned a lot about building fault-tolerant systems and distibuted service architecture.
