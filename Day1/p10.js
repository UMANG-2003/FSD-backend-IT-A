const fs = require("fs/promises");

const read = async () => {
  const data = await fs.readFile("./data1.txt", "utf-8");
  console.log(data);
};

read();
