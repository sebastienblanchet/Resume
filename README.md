# LaTeX Resume

*Author: Sebastien Blanchet*

*Email: s3blanch@edu.uwaterloo.ca*

## Contents

* [Setup](#setup)
* [Files](#files)
* [Preview](#preview)
* [License](#license)

## Setup

Instructions assume [MacTeX-2018 Distribution](http://tug.org/mactex/mactex-download.html) is installed on macOS

Clone this repository in a directory `dir` of choice:

```bash
cd dir
git clone https://github.com/sebastienblanchet/Resume.git
```

Change to the repository directory and compile the tex file with pdflatex:

```bash
cd Resume/res
pdflatex Resume.tex
```

Open the compiled pdf file:

```bash
open Resume.pdf
```

## Files

File contents of `dir`:

```bash
dir:
|
├── LICENSE
├── README.md
├── common
│   ├── Commands.tex
│   └── Header.tex
├──cov:
│   ├── Cover.tex
│   └── cov.cls
├──fig:
│   ├──bw:
│   │   ├── altaeros.png
│   │   └── uw.png
│   └──color:
│       ├── altaeros.png
│       └── uw.png
└──res:
    ├── Resume.jpg           #
    ├── Resume.pdf
    ├── Resume.tex
    └── res.cls

```

## Preview

![Screenshot](res/Resume.jpg)

Updated 12/8/2018


## License

[MIT License](LICENSE)
