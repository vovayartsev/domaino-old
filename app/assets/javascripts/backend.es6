'use strict';
window.Backend = (function () {
  var connectionOptions = {
    host: $('meta[name=rethinkdb-host]').attr('content'), // hostname of the websocket server
    port: 8015,              // port number of the websocket server
    path: '/',               // HTTP path to websocket route
    wsProtocols: ['binary'], // sub-protocols for websocket, required for websockify
    secure: false,           // set true to use secure TLS websockets
    db: 'domaino',              // default database, passed to rethinkdb.connect
    //simulatedLatencyMs: 100, // wait 100ms before sending each message (optional)
  };

  var backend = riot.observable();

  backend.watch = function (portalId) {
    RethinkdbWebsocketClient.connect(connectionOptions).then(function (conn) {
      r.table('portals').get(portalId).changes().run(conn, function (err, cursor) {
        cursor.each((_, record) => {
          backend.trigger('changed', record.new_val);
        });
      });
    });
  };

  return backend;
})();