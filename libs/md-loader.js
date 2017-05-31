import fs from "fs";
import remark from "remark";
import html from "remark-html";
import hljs from "remark-highlight.js";
import slug from "remark-slug";
import heading from "remark-autolink-headings";
// import recommended from "remark-presset-lint-recommended";

module.exports = file => {
  let markdown = fs.readFileSync(file).toString("utf8");
  let vfile = remark().use([slug, heading, hljs, html]).processSync(markdown);

  return vfile.contents;
};
