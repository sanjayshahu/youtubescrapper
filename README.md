# Youtube Scrapper

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

##Technology Used
Angular (Front-end)
Nodejs,Expressjs,Mongodb,Mongoose(Back-end)


Running Application:
1.npm install on client side
2.npm start will run application on port:4200
3.Click on search button will fetch top 25 trending videos in India then it will insert these details in db.
4.After that it will fetch all data from db.
5.Video related data when rendered on screen.
6.Click on "see details" button .
7.Pop-up will be displayed where video streams along with details.


Server side:
1.Install mongodb on local
2.Go to bin folder inside programfiles/mongodb
3.Run Command Mongod
4.npm install inside server folder
5.node index.js(it will automatically connect to mogo server and start express application at port 3001)


Additional Information:
1.Cors module is used on server so that two applications running on different port can communicate.
2.Few of the functionalities and ui realted changes are pending as per the  requirement due to which application's production version is not created.

