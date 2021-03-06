A stand-alone webapp to automate importing data from various sources into CKAN
and its DataStore.

## Install and Deployment

Get it from github:

    git clone ...

We use foreman (as provided by Heroku)

    foreman start -f Procfile-dev

## Implementation

Focus on import of Data Package stored in Github

### Import of a Generic Data Package

* Given URL to datapackage.json
  * optionally a specific file(s) that have changed
  * plus the CKAN API Key (our bearer token)
* Identify target CKAN dataset
  * Use DataPackage.name attribute for Dataset name
  * Identify target resources (by name)
* Start import process for each data file

### Import of a Single Tabular Data Package resource

Require

* CSV file URL
* schema (optional?)
* Target resource id (or dataset name + resource name?)
* CKAN API Key

Steps:

* Load CSV file (into memory or do we stream?)
* (?) Check Schema is valid
* Convert Schema to DataStore schema
* Send data to DataStore

### Github hook

* Receive webhook payload
* Determine if any action needed
* Boot up Data package import process

Extras / questions

* Handle data file renames
* How do we deal with a schema change (e.g. a change in type)
  * Ans: if we drop data resource content and recreate we should be ok ...
* Do we try to be smart with updates and only push changed rows (probably not)



## User Stories

Persona:

* Data User - less sophisticated (uses Excel but may not know what an API is)
* Data Wrangler - more sophisticated (knows what an API is)

### Import File and get Data API

As a Data Wrangler I want to provide my file and have it imported into CKAN so that I get a Data API

What kind of file?

* CSV file
* Excel file
* GeoJSON file
* ...

How do I provide
* web interface
* API (POST/GET url string or POST file content)

Questions:
* Do we validate the file?
* Do we have some process for e.g. tweaking the field types
* What is the mapping between file and Dataset / Resource

Implementation
* DataPusher already does most of this
  * What's missing is any kind of edit metadata step
  * No user interface

As a XXX I want to push my data file to github and have it automatically create/update the CKAN DataStore so that my Data API is up to date

* This is very similar to import file - only difference is we get push notifications (github webhooks). so merge this with that example.

### Github import

As a XXX I want to push my tabular data package to github and have it automatically create/update the CKAN DataStore so that my Data API is up to date

* As it is already a data package importing should be very simple
* If file is large we may need to worry about queues etc but probably keep it simple for present
* How do we determine dataset to associate this with in CKAN?

### One-Click Create a Dataset

As a XXX I want to provide my file and have it imported into CKAN so that I get a nice Dataset

* what distinguishes from existing system? Ans: one-click nature

### Automated regular import

As a Data Wrangler I want to have my data file automatically re-imported at regular intervals so that the DataStore (and Data API) stays up to date with my data.

