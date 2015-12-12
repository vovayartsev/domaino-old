## README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## RethinkDB

```
rethinkdb:
  image: anapsix/rethinkdb:latest
  ports:
    - "8080:8080"
    - "28015:28015"
    - "29015:29015"
websockify:
  image: siboulet/websockify:latest
  command: '8015 rethinkdb:28015'
  ports:
    - "8015:8015"
```
