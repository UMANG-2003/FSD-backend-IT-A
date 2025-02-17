const fs = require("fs");
const write = () => {
  fs.appendFile("./data.txt", "next line ",(err) => {
    if (err) {
      console.log(err);
    }
  });
};
write();
