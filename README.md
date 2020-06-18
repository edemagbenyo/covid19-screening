# covid19-screening

<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->
![GitHub repo size](https://img.shields.io/github/repo-size/edemagbenyo/covid19-screening)
![GitHub contributors](https://img.shields.io/github/contributors/edemagbenyo/covid19-screening)
![GitHub stars](https://img.shields.io/github/stars/edemagbenyo/covid19-screening?style=social)
![GitHub forks](https://img.shields.io/github/forks/edemagbenyo/covid19-screening?style=social)

This project is a front end application that interacts with the API to fetch Covid-19 real time information. The information pulled from the API has been sanitized and presented in a table and graphical format. This project is build using vanilla javascript and a bit or react.

Live version is available [here](https://covid19out-92937.firebaseapp.com/)

To report a bug or request a feature use this [link](https://github.com/edemagbenyo/covid19-screening/issues)

![screen](https://github.com/edemagbenyo/covid19-screening/blob/develop/src/images/Screenshot%202020-04-16%20at%2011.56.59%20AM.png)



## Prerequisites

Before you begin, ensure you have met the following requirements:
<!--- These are just example requirements. Add, duplicate or remove as required --->
* You have installed the latest version of `Node.js`
* You have a `<Windows/Linux/Mac>` machine.


## About the project

Covid19-screening is a simple application for tracking the novel coronavirus pandemic cases.  This platform provides up-to-date information on the cases count per country, global case data and, some preventive measures. The information is presented in a table and graphical format to enable easy interpretation of the data.

## Installing covid19-screening

To install covid19-screening app, follow these steps:

1. Clone the project
```bash
git clone git@github.com:edemagbenyo/covid19-screening.git

cd covid19-screening

npm install

npm run start
```

### Available scripts

```
npm run build
```
Builds the app for production to the build folder.

## Using covid19-screening app

To use covid19-screening app, follow these steps:

1. The home page provides you with global information on the cases in a graphical form
2. Clicking on the "countries" card will take you to the countries cases pages
3. Clicking a specific country will open a modal displaying detail information with data on that country.


## Contributing to covid19-screening app
<!--- If your README is long or you have some specific process or steps you want contributors to follow, consider creating a separate CONTRIBUTING.md file--->
To contribute to the covid19-screening app, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b feature/awesome_branch`.
3. Make your changes and commit them: `git commit -m 'awesome message'`
4. Push to the original branch: `git push origin feature/awesome_branch`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

### Edem Agbeyo
* LinkedIn: [@edemagbenyo](https://www.linkedin.com/in/edemagbenyo/) 
* Email: [edem.agbenyo@gmail.com](mailto:edem.agbenyo@gmail.com)

### Colling Ugwu
* [@collinsugwu](https://github.com/collinsugwu) 📖


## Contact

If you want to contact me you can reach me at <https://twitter.com/edemAgbenyo>.

## Known issues or improvement
1. Automatically detect the country of visitor and showcases information
2. Mark countries as a favorite, and show those countries data on top of the table on subsequent visits.
3. Show daily addition of cases to inform the visitor of daily cases.

## License
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [MIT](<link>).


Source:
The dashboard is using (COVID-19 (2019-nCoV) Data Repository by Johns Hopkins CSSE)[https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series] as a data source
