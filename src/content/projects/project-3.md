---
title: 'Pubmed Command Line Interface'
description: A Python cli that allows you to search PubMed for publications based on a specific query term.
publishDate: 'Nov 25 2024'
isFeatured: true
seo:
  image:
    src: '/pubmedcli.png'
---

![Project preview](/pubmedcli.png)

**Project Overview:**
A Python cli that allows you to search PubMed for publications based on a specific query term and a specified number of days back. The module use the Biopython library to interact with the PubMed database.

Features:

-  Search PubMed for recent publications using a specific query term

-  Specify the number of days back to search

-  Fetch article details including title, authors, journal, publication date, PubMed ID, and DOI URL

-  View abstracts of selected articles

-  Open article URLs in default browser

-  Option to output the results to a CSV file

## Installation

1. Clone the repository:

   ``` bash
   git clone https://github.com/JonathanEMillar/pubmed_cli.git
   cd pubmed_cli  
   ```

2. Install the required dependencies:

   ``` bash
   pip install -r requirements.txt  
   ```

3. Set up your configuration:

   * Copy `config.yaml`
   * Edit `config.yaml` and add your email and NCBI API key

You can obtain an API key from the [NCBI website](https://ncbiinsights.ncbi.nlm.nih.gov/2017/11/02/new-api-keys-for-the-e-utilities/). 

## Basic use

To perform a basic search, use the following command:

   ``` bash
   python pubmed_search.py -q "your search query" -d 7`
   ```

This will search for articles published in the last 7 days matching your query.


## Command-line Options

* `-q, --query`: Specify the search query (required)
* `-d, --days`: Number of days back to search (default: 1)
* `-o, --output`: Enable CSV output of results
* `-c, --clearcache`: Clear the cache before running

## Interactive Mode

After displaying search results, the tool enters an interactive mode where you can:

* View article abstracts
* Open article URLs in your default web browser
* Perform new searches

## Configuration

The `config.yaml` file contains important settings:

yaml

`Email: "your.email@example.com"`

`APIKey: "your_ncbi_api_key"`

`OutputDirectory: "/path/to/output/directory"`

`QueryTerm**: "default search term"`

Ensure you replace the placeholders with your actual information.

## Caching

The tool uses joblib to cache article details, improving performance for repeated searches. The cache is stored in the `artcile cache` directory.

## Logging

Logs are written to `pubmedcli.log` in the same directory as the script.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* This tool uses the Biopython library for interacting with the NCBI Entrez system
* Thanks to the NCBI for providing the Entrez Programming Utilities
