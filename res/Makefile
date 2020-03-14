# LaTeX Makefile
DIR=
MAIN=Resume
FR=Resume_fr
LATEX=pdflatex
EXT=*.aux *.lof *.log *.lot *.fls *.out *.toc *.fmt *.fot *.cb *.cb *.upa

all: ## Build
		$(LATEX) $(DIR)$(MAIN).tex
		-convert -density 300 $(MAIN).pdf -append -quality 300 $(MAIN).png
		-mv $(DIR)$(MAIN).pdf $(DIR)out/$(MAIN).pdf

fr: ## Build
		$(LATEX) $(DIR)$(FR).tex
		-mv $(DIR)$(FR).pdf $(DIR)out/$(FR).pdf

clean: ## Clean
		-rm -rfv $(DIR)*.$(EXT)
