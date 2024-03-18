const { onRequest } = require('firebase-functions/v2/https');
  const server = import('firebase-frameworks');
  exports.ssrvisma5c70e = onRequest({"region":"europe-west1"}, (req, res) => server.then(it => it.handle(req, res)));
  