'use strict';
window.Backend = (function () {

  var options = {
    host: 'fbae7f61-dockhero.node.tutum.io',       // hostname of the websocket server
    port: 8015,              // port number of the websocket server
    path: '/',               // HTTP path to websocket route
    wsProtocols: ['binary'], // sub-protocols for websocket, required for websockify
    secure: false,           // set true to use secure TLS websockets
    db: 'domaino',              // default database, passed to rethinkdb.connect
    //simulatedLatencyMs: 100, // wait 100ms before sending each message (optional)
  };


  return {
    watch: function (domainId) {
      return new Promise((resolve) => {
        RethinkdbWebsocketClient.connect(options).then(function (conn) {
          r.table('domains').get(domainId).changes().run(conn, function (err, cursor) {
            cursor.each((_, record) => {
              resolve(record.new_val);
            });
          });
        });
      });
    }
  };

})();