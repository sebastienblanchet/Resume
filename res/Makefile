# LaTeX Makefile
DIR=
MAIN=Resume
FR=Resume_fr
LATEX=pdflatex
EXT=*.aux *.lof *.log *.lot *.fls *.out *.toc *.fmt *.fot *.cb *.cb *.upa *.pdf

all: ## Build
		$(LATEX) $(DIR)$(MAIN).tex
		$(LATEX) $(DIR)$(FR).tex

fr: ## Build
		$(LATEX) $(DIR)$(FR).tex

clean: ## Clean
		-rm -rfv $(DIR)*.$(EXT)
