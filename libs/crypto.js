const crypto = require("crypto");

const createVideoID = (length) => {
  const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
  const randomString = randomBytes.toString("hex");
  const randomDigits = randomString.slice(0, length);

  return randomDigits;
};
module.exports = createVideoID;
