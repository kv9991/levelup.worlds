const dev = process.env.DEV === "true";
const ssl = process.env.SSL === "true";
const port = process.env.PORT;
const type = ssl ? "https://" : "http://";
const domain = type + (dev ? ("localhost:" + port) : process.env.URL);
const staticfolder = "/dist";
const staticaddr = domain + staticfolder;
const host = dev ? "127.0.0.1" : process.env.IP;
const hosturl = type + host;
const sitename = process.env.URL;
const sender = process.env.SENDER;
const receiever = process.env.RECEIEVER;
const smtpuser = process.env.SMTP_LOGIN;
const smtppassword = process.env.SMTP_PASSWORD;
const emailurl = `${domain}/send`;
const smtphost = process.env.SMTP_HOST;

module.exports.server = {
  dev,
  ssl,
  port,
  domain,
  static: staticfolder,
  hosturl,
  smtpuser,
  smtppassword,
  smtphost,
  mail: {
    sender,
    receiever,
  }
}

module.exports.client = {
  dev,
  ssl,
  port,
  emailurl,
  domain,
  static: staticaddr,
  hosturl,
};

