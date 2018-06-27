const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['h1', 'h2'], keyspace: 'cavatable' });
 
const queries = [
  { 
    query: 'INSERT INTO cavatable.overviewsTest (rest_id, tags) VALUES (?, ?)',
    params: [102, {{tagname: 'Good for Lunch', votecount: 234}, {tagname: 'Good for Brunch', votecount: 24}}],
  },
  { 
    query: 'INSERT INTO cavatable.overviewsTest (rest_id, tags) VALUES (?, ?)',
    params: [103, `{{tagName: 'Good for Dates', voteCount: 23}, {tagName: 'Good for Hacks', voteCount: 243}}`],
  }
];

const queryOptions = { prepare: true, consistency: cassandra.types.consistencies.quorum };

client.batch(queries, queryOptions, function(err) {
  console.log('Data updated on cluster');
});
