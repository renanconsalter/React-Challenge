<center>

# HostGator Frontend Challenge

<a href="https://www.hostgator.com.br">
<img style="border-radius: 125px;" src="https://yt3.ggpht.com/ytc/AAUvwnh9lePemDabfH8CePRIWa4DLGWtAlYhvJqVeSS30A=s250-c-k-c0x00ffffff-no-rj" width="250px;" alt="HostGator Logo"/><br>
</a>
<br>
<a href="https://twitter.com/hostgatorbrasil">
    <img src="https://img.shields.io/badge/Follow-@hostgatorbrasil-%237159c1?style=social&logo=twitter" alt="Subscribe HostGatorBrasil" />
<a href="https://www.youtube.com/c/HostGatorBrasil">
    <img src="https://img.shields.io/badge/Subscribe%20HostGator%20on%20YouTube-9.83k-%237159c1?style=social&logo=youtube" alt="Subscribe HostGatorBrasil" />
</a>

<br>![Yarn Badge](https://img.shields.io/badge/yarn-1.22.5-%7159c1?style=for-the-badge)
![JavaScript Badge](https://img.shields.io/badge/JS-ES6+-yellow?style=for-the-badge&logo=javascript)
![React Badge](https://img.shields.io/badge/React%20+%20Redux-17.0.2%20/%207.2.4-%237159c1?style=for-the-badge&logo=react)
![ESLint Badge](https://img.shields.io/badge/ESlint-7.26.0-blue?style=for-the-badge&logo=eslint)
<br>

</center>

## About

The project consists in a hire page to plans offered by [HostGator](https://www.hostgator.com.br/).

It was created with the objective of evaluating knowledge in frontend development.

## Layout / API

The application layout is available [here](https://xd.adobe.com/spec/31631e0c-bd84-4a01-5f67-27878b4deffa-4752/) on Adobe XD.

All data used in project come from this [API](https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices).

## Technologies / Packages

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) + [React](https://github.com/facebook/react) + [Redux](https://github.com/reduxjs/redux)
- [ESlint](https://github.com/eslint/eslint)
- [Axios](https://github.com/axios/axios)
- [styled-components](https://github.com/styled-components/styled-components)
- [Material-UI](https://github.com/mui-org/material-ui)
- [Yarn](https://github.com/yarnpkg/yarn)
- [Docker](https://github.com/docker)
- [react-animations](https://www.npmjs.com/package/react-animations)
- [react-slick](https://github.com/akiran/react-slick)

## Pre-requisites

Before you begin, you will need to install [Git](https://git-scm.com) on your machine.

## Instructions

1. First of all, we need to clone this repository with this command:

```
git clone https://github.com/renanconsalter/hostgator-frontend-challenge.git
```

2. Now, we have to run a script shell based in you environment to build an image in Docker:

   - <b>production</b>

   ```
   ./run-app.sh --prod
   ```

   - <b>development</b>

   ```
   ./run-app.sh --dev
   ```

<small><i>Note</i>: If there is a problem running the `run-app-deploy.sh` file, it is possibly due to the permission, if so, give the file permission with `chmod +x run-app-deploy.sh` and run again.</small>

The proccess was fully automated using `Dockefile` and `docker-compose.yml`

3. After that, we have to run our application in browser, but pay atention to this detail first:

   Please, certify that you're not using `port: 8080` for `production` and `port:3001` for `development`.

   If you choose `production` environment and in case of your `port: 8080`isn't available, please change the `port` in the respective environment `docker-compose.yml`file.

4. Finally, we are ready to open the browser with our application based by environament:

   - [http://localhost:8080](http://localhost:8080) for `production` environment
   - [http://localhost:3001](http://localhost:3001) for `development`environment.

## Deploy

You can access the application deployed on the button below or in this [link](https://hostgator-frontend-challenge-renanconsalter.vercel.app).

[![Vercel Badge](https://img.shields.io/badge/Run%20app%20on%20vercel-black?style=for-the-badge&logo=vercel&link=https://hostgator-frontend-challenge-renanconsalter.vercel.app)](https://hostgator-frontend-challenge-renanconsalter.vercel.app)

## Author

I want to thank you the HostGator organization and the team for the great opportunity.

<div style="display: flex; align-items: center">
<div>
<img style="border-radius: 50px; margin-left: 20px" src="https://media-exp1.licdn.com/dms/image/C4D03AQEgzf8pOp6mwA/profile-displayphoto-shrink_200_200/0/1527887724599?e=1626307200&v=beta&t=FzbIC1YW8T86TknHeJpqQQ96ZL0E34Q-upa_z5s705U" width="100px;" alt="Renan Consalter"/>
</div>

<b>Renan Consalter</b>
<br>
<span>
<small>Software developer</small>
</span>

[![LinkedIn Badge](https://img.shields.io/badge/Linkedin-blue?style=for-the-badge&logo=Linkedin&link=https://www.linkedin.com/in/renanconsalter)](https://www.linkedin.com/in/renanconsalter)
[![Instagram Badge](https://img.shields.io/badge/Instagram-f2f2f2?style=for-the-badge&logo=Instagram&link=https://www.instagram.com/renanconsalter)](https://www.instagram.com/renanconsalter)
[![Gmail Badge](https://img.shields.io/badge/GMAIL-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:renan.consalter@gmail.com)](mailto:renan.consalter@gmail.com)

</div>

</div>

</center>
