## This is a simple web app following the API Rest architecture with a monolithic approach👇


*This web page allows us to manage (create, delete, update, complete) a todos list, linked with every user*

<h1 align="center"> Todo Web app</h1>
<p align="center"> Using Django Rest Framework and ReactJs with typeScript</p>
<p align="center">
<img width='' src="https://miro.medium.com/v2/resize:fit:744/1*uZoN-dhttTLYdUsA7nyZSA.jpeg"/></p> 

## Table of Contents:
---

- [Installation guide](#Installation-guide)
- [How to contribute](#How-to-contribute)
- [Author/s](#Author/s)
- [Additional information](#Additional-information)
- [License](#License)


 	
## Installation guide
---
To setup the project first you have to install:
- Python v3.6 or recent
- Django v4.2
- Node js
- TypeScript

### Dependencies
Once you have all of this installed you must go to the directory where is located the requirements file and run   *pip install -r requirements.txt*, before doing this make sure you have installed pip or other python package manager you wish to use. This will install the dependencies required for the project.

     pip install -r requirements.txt

Later you must install the frontend dependencies, in order to do that you must go inside the frontend directory to the location where it is the package.json file, that contains all the information about the modules required for the project correct behaviour, and in there run *npm install* since this react project was created using Vite. This command will install all dependencies required.

    npm install

    


### Setting up the Backend and Frontend
After installing all dependencies you should run the backend and frontend servers. Run *python mange.py runserver* to run the backend server and *npm run dev* to run the vite server to serve the client application. Inside their respectives directories.

      python manage.py runserver
      npm run dev 

## Author
---
Ing. Dairon Isidro Rodríguez del Portillo
- daironirdp@gmail.com
- https://www.linkedin.com/in/daironisidro98rodriguez/


## Additional information
---
This project was deployed at PythonAnyWhere for the backend code and the for the frontend at Netlify, and you can access to it through https://applicationtodos.netlify.app. The code and configurations in the master branch are ready for production enviroment, but if you wish to test the application by your own, you should work in the development branch.

