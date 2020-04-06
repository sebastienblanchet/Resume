//imports
import util = require("util");
import fs = require("fs");
import ejs = require("ejs");

import {skills, jobs, interests} from "./json/resume.json";

// promisify
const mkdir = util.promisify(fs.mkdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const resume = {
  skills: skills,
  interests: interests,
  jobs: jobs
};

async function render(name: String, ext: String, obj: Object) {
  try {
    //create output directory
    await mkdir("dist", { recursive: true });

    // render ejs template to file
    const p = `templates/${name}.ejs`;
    const file = await ejs
      .renderFile(p, obj)
      .then(output => output);

    //create file and write rendered content
    const out = `dist/${name}.${ext}`
    await writeFile(out, file, "utf8");

  } catch (error) {
    console.log(error);
  }
}

// render("index", "html", { model: pageModel });
render("resume", "tex", resume);
