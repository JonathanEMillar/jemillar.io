---
title: 'ARDSMAICR'
description: The ARDSMAICR package contains the results of a meta-analysis by information content (MAIC) of genome-wide studies of the host response to acute respiratory distress syndrome (ARDS). These data are accompanied by a range of helper functions useful for analysis.
publishDate: 'Nov 25 2024'
isFeatured: true
seo:
  image:
    src: '/ardsmaicr.png'
    alt: Project preview
---
![Project preview](/ardsmaicr.png)

**Project Overview:**

The ARDSMAICR package contains the results of a meta-analysis by information content (MAIC) of genome-wide studies of the host response to acute respiratory distress syndrome (ARDS). These data are accompanied by a range of helper functions useful for analysis.

## Meta-Analysis by Information Content (MAIC)

[MAIC](https://github.com/baillielab/maic) was developed in the [Baillie Lab](https://baillielab.net), Roslin Institute, University of Edinburgh as a method for combining lists of genes arising from diverse experimental sources.

It has been used to study the host response to [Influenza](https://doi.org/10.1038/s41467-019-13965-x) and [SARS-CoV-2](https://doi.org/10.1038/s41586-020-03065-y).

MAIC consistently out performs similar algorithms in the case of ranked and unranked data sources and in the presence of heterogeneity in the quality of studies. Further details can be found [here](https://doi.org/10.1093/bioinformatics/btac621).

The source code for MAIC is hosted [here](https://github.com/baillielab/maic).

## Installation

You can install the latest version of ARDSMAICR from
[GitHub](https://github.com/) with:

``` r
if (!require(devtools)) install.packages("devtools")
```

## Getting started

``` r
library(ARDSMAICR)
```

## ARDS MAIC results

The systematic review, data extraction, and MAIC are described in detail
on the study [website](https://ardsmaic.site44.com).

The package contains the output of the MAIC covering the period
**1<sup>st</sup> January 1967 to 1<sup>st</sup> December 2022**. Future
releases will match regular updates of the systematic review.

These data are contained in `data_genes`. It has the following format:

| gene   | study_1_id | study_2_id | study_n_id | maic_score | contributors                               |
|--------|------------|------------|------------|------------|--------------------------------------------|
| GENE_A | 0.000      | 1.234      | 0.000      | 1.234      | METHOD_1: study_2_id                       |
| GENE_B | 1.345      | 1.234      | 0.000      | 1.456      | METHOD_1: study_2_id, METHOD_2: study_id_1 |

Additional data are:

- `data_study` - A summary of the studies identified by the systematic
  review, including their methods.
- `data_contributions` - Calculated study contributions to MAIC.
- `data_biolitmine` - The results of a [BioLitMine]() search for the
  MeSH “Respiratory Distress Syndrome, Adult”.
- `data_covidmaic` - A ranked list of genes from a MAIC of SARS-CoV-2
  studies.

## Helper functions

Several groups of functions useful in the analysis of the MAIC results
are included. They fall into the following broad families:

- Summary tables
- Helper functions - counts, genes, lists, methods and categories
- Gene prioritisation
- Information content and contribution

The majority of these functions can be applied to the standard
[MAIC](https://github.com/baillielab/maic) output of any analysis.