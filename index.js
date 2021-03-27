const csv = require("csvtojson");

//relative path to data file
const csvFilePath = "./data.csv";

const readCsv = async () => {
  try {
    //variable to hold the sum
    let sum = 0;
    //reading csv file
    let data = await csv().fromFile(csvFilePath);

    // looping over data array and adding each line value to sum
    if (data && data.length) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value) {
          sum += Number(data[i].value);
        }
      }
    }
    return sum;
  } catch (err) {
    //if any error occures during file reading catching it and console logging
    return err;
  }
};

readCsv()
  .then((sum) => {
    console.log(`Sum: ${sum}`);
  })
  .catch(() => {
    console.log(err);
  });
