const fs = require('fs');

const RECORDS_COUNT = 1000001;

const writerTxt = fs.createWriteStream('server/stressTests/restIds.csv');

const writeRandomRestIds = (writer) => {
  let i = RECORDS_COUNT;
  const write = () => {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        writer.write(`${i}`);
        writer.end();
      } else {
        ok = writer.write(`${Math.floor(Math.random() * 100000000) + 1}` + '\n');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeRandomRestIds(writerTxt);
