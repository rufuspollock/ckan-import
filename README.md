A stand-alone webapp to automate importing data from various sources into CKAN
and its DataStore.

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

