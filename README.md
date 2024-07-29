
# MEDICODOCTORS WEB APP PROJECT||Next.js || strapi API

MEDICODOCTORS Web App is a Project in which a Normal User can Fetch Details of Doctors and Categories of Doctors.They can Search all type of Categories inside this Web App and Search Doctors related to that category and after that they can Book an appointment with proper date and Timing. Once they Book their appointment they can see their appointment details and upcoming appointment and expired appointment.Afte booking They recieve an Email from Our Website regarding appointment.They can also delete their appointment according to their need.

[MEDICOSOCTORS WEBSITE LINK](https://medico-doctors.vercel.app/)



![Logo](https://res.cloudinary.com/dwp0bcwg9/image/upload/v1722193913/logo_footer_5361621fe8.png)


## API Reference


```http
  https://medicodoctors-strapi-backened-app.onrender.com
```


```http
  https://medicodoctors-strapi-backened-app.onrender.com/admin
```



## Authors

- [@rohitgupta8055](https://github.com/rohitgupta8055)


## Documentation

[Documentation](https://github.com/rohitgupta8055/medicoDoctors/blob/main/my_documentation.txt)


## Deployment

To deploy this project run

```bash
  npm run dev
```


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Screenshots

![App Screenshot](https://res.cloudinary.com/dwp0bcwg9/image/upload/v1722195390/Home_d2072bdf0d.png)

![App Screenshot](https://res.cloudinary.com/dwp0bcwg9/image/upload/v1722195390/Doctor_Info_4d405ea1e2.png)

![App Screenshot](https://res.cloudinary.com/dwp0bcwg9/image/upload/v1722195377/Search_Doctors_43719c726b.png)

![App Screenshot](https://res.cloudinary.com/dwp0bcwg9/image/upload/v1722195377/My_Bookings_7f460cdbde.png)


## 🛠 Skills
Javascript, HTML, CSS, Next.js, Mysql


## 🚀 About Me
I'm a full stack developer and currently Pursuing Engineering From Delhi Technological University




## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

**Database:** Mysql

#luicid-react
for using icon we use luicid react
import search ans use search icon

#Strapi
we will create api and store all our data we will use mysql for the database

#api connect
inside app folder we create _utils and inside this we create GLobalapi.jsx
before that in root directory make .env.local
all environment variable wil be stored here
now we call api in GLobalapi.jsx before that install axios npm i axios
it help us to fetch data from api
whenever u use any third party cloud storag u need to define in next.config.js
call api and use 

#doctor list display
we fetch from api and diplay in wensite using loop(map function )from the apiby giving address

#footer
we donot create footer use pre created footer using hyperUi

#loader
there is gap in loading the data from api so we have to provide some loader and one of the most popular option is skeleton
shadcn->skeleton


#App-ROuting
we have to make a folder search and inside page.js 
if we want to go search folder
http://localhost:3000/search
if we want to include all rote in a folder then make (route) this folder will not considered

layout.js whatever u want to fix on the screem (header +footer)
page.js  dynamic jo bhi change ho raha ha 

#doctors by category selection

we ues command from shdcn to filter out the search

#authentication
we use kind authentication 

#protect page from authentication middle ware

#react email
we use react email to write the template of emails not send emais
in react mail we use service resend to send mail


#deploy app
frontend and backend both on server


