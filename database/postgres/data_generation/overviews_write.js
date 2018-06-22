const overviewsScript = require('./overviews_script');
const fs = require('fs');

const RECORDS_COUNT = 1000;

const writerTxt = fs.createWriteStream('fake_data/overviews_data.txt');

const writeABunch = (writer, getData) => {
  let i = RECORDS_COUNT;
  const write = () => {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        writer.write(getData());
        writer.end();
      } else {
        ok = writer.write(getData() + '\n');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeABunch(writerTxt, overviewsScript.generateOverview);
