const fs = require("fs");
const write = () => {
  fs.writeFile("./data.txt", "new line", (err) => {
    if (err) {
      console.log(err);
    }
  });
};
write();
