# LaTeX Resume

<p align="start">
  <a href="https://travis-ci.org/sebastienblanchet/Resume"><img src="https://travis-ci.org/sebastienblanchet/Resume.svg?branch=master" alt="Build Status"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></a>
</p>

*Author: Sebastien Blanchet*

*Email: s3blanch@edu.uwaterloo.ca*

## Contents

- [LaTeX Resume](#latex-resume)
  - [Contents](#contents)
  - [Setup](#setup)
  - [Files](#files)
  - [Artifacts](#artifacts)

## Setup

Instructions assume [MacTeX-2018 Distribution](http://tug.org/mactex/mactex-download.html) is installed on macOS

Clone this repository in a directory `~` of choice:

```bash
cd ~
git clone https://github.com/sebastienblanchet/Resume.git
```

Change to the repository directory and compile the `.tex` file with pdflatex:

```bash
cd Resume/res
pdflatex Resume.tex
```

Open the compiled pdf file:

```bash
open Resume.pdf
```

Note same applies for French version `Resume_fr.tex`

## Files

File contents of repository `Resume` in your current working directory `$`:

```bash
$/Resume/
|
├── LICENSE                    # Repo license
├── README.md                  # Repo read me
├── .travis.yml                # travis build config
├── texlive_install.sh         # travis install script
├── texlive                    # Install script depts.
├── common/
│   ├── Commands.tex           # Common commands (i.e. logos. colors, etc.)
│   └── Header.tex             # Header contents (i.e. name, phone number, etc.)
├── cov/
│   ├── Cover.tex              # Sample cover letter contents (lorem ipsum)
│   └── cov.cls                # Cover letter stylesheet
└── res/
    ├── Makefile               # Helper for building locally
    ├── Resume.png             # Figure shown below in read me
    ├── Resume.tex             # Main source
    ├── Resume_fr.tex          # French source
    └── res.cls                # Resume stylesheet
```

## Artifacts

See [latest releases](https://github.com/sebastienblanchet/Resume/releases/latest/) page for:
* `Resume.pdf`
* `Resume_fr.pdf`

generated outputs from `.travis.yml`.
