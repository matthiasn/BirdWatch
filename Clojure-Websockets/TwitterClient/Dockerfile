FROM dockerfile/java:oracle-java8
MAINTAINER Matthias Nehlsen <matthias.nehlsen@gmail.com>

RUN sudo apt-get update

ADD target/uberjar/birdwatch-0.1.0-SNAPSHOT-standalone.jar /srv/birdwatch-clj.jar
ADD twitterconf.edn /srv/twitterconf.edn

EXPOSE 8888

CMD ["java", "-jar", "/srv/birdwatch-clj.jar"]
