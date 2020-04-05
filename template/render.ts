//imports
import util = require("util");
import fs = require("fs");
import ejs = require("ejs");

//promisify
const mkdir = util.promisify(fs.mkdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const pageModel = {
  content: "This is some sample content. Located on the sample page."
};

async function render() {
  try {
    //create output directory
    await mkdir("dist", { recursive: true });

    //render ejs template to html string
    //pass pageModel in to render content
    const html = await ejs
      .renderFile("templates/index.ejs", { model: pageModel })
      .then(output => output);

    //create file and write html
    await writeFile("dist/index.html", html, "utf8");

  } catch (error) {
    console.log(error);
  }
}
render();
