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

File contents of `~/Resume`:

```bash
~/Resume/
|
├── LICENSE                    # Repo license
├── README.md                  # Repo read me
├──common/                     
│   ├── Commands.tex           # Common commands (i.e. logos. colors, etc.)
│   └── Header.tex             # Header contents (i.e. name, phone number, etc.)
├──cov/
│   ├── Cover.tex              # Sample cover letter contents (lorem ipsum)
│   └── cov.cls                # Cover letter stylesheet
└──res/
    ├── Resume.jpg             # Figure shown below in read me
    ├── Resume.tex             # Main source
    ├── Resume_fr.tex          # French source
    ├── res.cls                # Resume stylesheet
    └──out/
        ├── Resume.pdf         # PDF output of Resume.tex
        └── Resume_fr.pdf      # PDF output of Resume_fr.tex

```

## Preview

![Screenshot](res/Resume.jpg)

Updated 02/14/2019.


## License

[MIT License](LICENSE)
