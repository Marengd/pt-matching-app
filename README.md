# 📱 💸 👟 Shatching 


<br>

<img src="/images_wiki/thumbnail.png" alt="">

<br>


# 📱 Matching Applicatie ― Project Tech
Shatching is de applicatie die jouw zoektocht naar het vinden van bijpassende schoenen simplificeert. Op basis van de gelegenheid, jouw kledingstijl en voorkeuren geeft Shatching een overzicht met bijpassende schoenen weer. 

Hoe gaaf het ook klinkt, moet ik er wel bij vertellen dat ik mij voornamelijk heb gericht op het registreren van een account en het in kunnen loggen met bestaande gegevens die vervolgens worden weergegeven binnen de applicatie. 

<br>
<br>

# 📝 Licentie

Auteursrecht © 2022 Danian Marengo

Hierbij wordt kosteloos toestemming verleend aan eenieder die een kopie verkrijgt.
van deze software en bijbehorende documentatiebestande ( de "Software" ), om te handelen
in de Software zonder beperking, inclusief maar niet beperkt tot de rechten
om te gebruiken, kopiëren, wijzigen, samenvoegen, publiceren, distribueren, in sublicentie geven en / of verkopen
kopieën van de Software en om personen aan wie de Software is gericht, toe te staan
daartoe ter beschikking gesteld, onder de volgende voorwaarden:

De bovenstaande auteursrechtvermelding en deze toestemmingskennisgeving zullen worden opgenomen in alle
kopieën of substantiële delen van de Software.
  
DE SOFTWARE WORDT GELEVERD "AS IS", ZONDER ENIGE VORM VAN GARANTIE, EXPRESS OF
IMPLICIET, INCLUSIEF MAAR NIET BEPERKT TOT DE GARANTIES VAN VERKOOPBAARHEID,
GESCHIKTHEID VOOR EEN BEPAALD DOEL EN NIET-INBREUKMAKENDHEID. IN GEEN GEVAL ZAL DE
AUTEURS OF AUTEURSRECHTHEBBENDEN ZIJN AANSPRAKELIJK VOOR ENIGE CLAIM, SCHADE OF ANDERE
AANSPRAKELIJKHEID, HETZIJ IN EEN HANDELING VAN CONTRACT, ONRECHTMATIGE DAAD OF ANDERSZINS, VOORTVLOEIEND UIT,
UIT OF IN VERBAND MET DE SOFTWARE OF HET GEBRUIK OF ANDERE TRANSACTIES IN DE
SOFTWARE.

<br>
<br>

# 👟 Installatie
Om gebruik te maken van het project is het van belang om de volgende stappen te volgen. 

<br>


### 👟 Clone 
Voer het onderstaande commando uit in jouw terminal om de repository te clonen.
```
$ Git clone https://github.com/marengd/pt-matching-app.git
```

<br>


### 👟 Installeren Npm paketten
Navigeer naar de map door middel van het onderstaande commando.

```
$ Cd pt-matching-app
```

<br>


### 👟 Modules installeren
In het bestand package.json staan alle benodigde modules. Installeer alle modules met.

```
$ Npm install
```

<br>


### 👟 Uitvoeren van de code
Navigeer naar de repository in de terminal en voer het onderstaande commando uit.

```
$ Npm start
```

<br>
<br>
<br>


# 📝 Gebruikte paketten

Ejs: Dit is een eenvoudige templating taal die wordt gebruikt om HTML markup te genereren met gewone JavaScript. Het helpt ook om JavaScript in te sluiten in HTML-pagina's.

<br>

Mongodb: Ik gebruik dit pakket om verbinding te maken met mijn MongoDB Atlas database. Het pakket is heel gemakkelijk te gebruiken en heeft veel functies voor het vinden, opslaan, bijwerken, toevoegen en verwijderen van gegevens in uw database.

Dotenv: Het dotenv-pakket wordt gebruikt om 'milieuvariabelen' uit je .env-bestand te halen. U wilt het .env-bestand opnemen in uw .gitignore, zodat niemand uw databasewachtwoorden en andere 'geheime' informatie kan krijgen die u in uw project gebruikt. Het is een geweldig pakket dat het heel gemakkelijk maakt om uw geheime gegevens te verbergen.

<br>

Express-ejs-layouts: Ik zou zeggen dat dit pakket het belangrijkste is van alle pakketten die in dit project worden gebruikt. Express is een Node.js webapplicatie framework, het kan veel verschillende dingen doen, maar het wordt het meest gebruikt om uw website routing een stuk slimmer te maken en om het te combineren met een templating engine om interactieve, 'levende' pagina's te maken.

Express-session: Dit pakket heeft mijn functie echt tot leven gebracht. Wat Express Session doet, is dat het unieke id's kan maken voor al uw gebruikers. Je kunt op elke pagina controleren op deze id, dit betekent dat je voor elke gebruiker een persoonlijke profielpagina kunt hebben, en dat ze daar hun eigen gegevens op zien als ze zijn ingelogd (en dat is precies waar ik het voor heb gebruikt). Uw gebruikers kunnen ook ingelogd blijven, zelfs als ze niet op uw website zijn, zodat ze niet elke keer hoeven in te loggen wanneer ze uw website willen bezoeken.

<br>

<br>
Connect-flash: Door middel van dit pakket kan je kort notificaties laten verschijnen in jouw webapplicatie. Een voorbeeld waarin dit gebruikt zou kunnen worden is tijdens het registreren. Zodra de gebruiker de verkeerde gegevens invult krijgt deze boven het formulier een popup te zien waarin de foutmelding staat beschreven.

bcryptjs: Een pakket waarmee het mogelijk is om beveiligde wachtwoord te implementeren in jouw webapplicatie doordat het opgeslagen wachtwoorden versleuteld door middel van een "salt".

<br>

passport: Passport is extreem flexibel en modulair en kan onopvallend worden ingeleverd in elke Express-gebaseerde webtoepassing. Een uitgebreide set strategieën ondersteunt verificatie met behulp van een gebruikersnaam en wachtwoord, Facebook, Twitter en meer.





<br>
<br>
<br>

# 🥾 Het gebruik

Om de webapplicatie te gebruiken is het mogelijk om [Localhost:5000](http://localhost:5000) te bezoeken of de Webapplicatie online te bekijken via [Heroku](https://shatching.herokuapp.com/log_in). Voor de beste ervaring zou ik in 'Element Inspecteren' overschakelen op een mobiel apparaat zoals de Iphone Xr.

<br>
<br>
<br>


# 👢 Bronnen

I. (z.d.-a). GitHub - iSirThijs/Player2: A dating app to find your player2! GitHub. Geraadpleegd op 15 maart 2022, van https://github.com/iSirThijs/Player2

V. (z.d.). Packages · victorboucher/cmd-dating-app Wiki. GitHub. Geraadpleegd op 15 maart 2022, van https://github.com/victorboucher/cmd-dating-app/wiki/Packages

npm: ejs. (2021, 6 februari). Npm. Geraadpleegd op 15 maart 2022, van https://www.npmjs.com/package/ejs

Express - Node.js web application framework. (z.d.). Express. Geraadpleegd op 15 maart 2022, van https://expressjs.com/

npm: express-ejs-layouts. (2021, 13 juni). Npm. Geraadpleegd op 15 maart 2022, van https://www.npmjs.com/package/express-ejs-layouts

npm: flash. (2014, 11 september). Npm. Geraadpleegd op 15 maart 2022, van https://www.npmjs.com/package/flash

npm: express-session. (2021, 19 mei). Npm. Geraadpleegd op 15 maart 2022, van https://www.npmjs.com/package/express-session

npm: dotenv. (2022, 2 februari). Npm. Geraadpleegd op 15 maart 2022, van https://www.npmjs.com/package/dotenv

Passportjs. (z.d.). Passport.js. Geraadpleegd op 15 maart 2022, van https://www.passportjs.org/

MongoDB. (z.d.). MongoDB: The Application Data Platform. Geraadpleegd op 15 maart 2022, van https://www.mongodb.com/

npm: bcryptjs. (z.d.). Npm. Geraadpleegd op 15 maart 2022, van https://www.npmjs.com/package/bcryptjs

Node.js With Passport Authentication | Full Project. (2018b, december 29). YouTube. Geraadpleegd op 15 maart 2022, van https://www.youtube.com/watch?v=6FOq4cUdH8k

Node.js Passport Login System Tutorial. (2019, 13 juli). YouTube. Geraadpleegd op 15 maart 2022, van https://www.youtube.com/watch?v=-RCnNyD0L-s

Build Node.js User Authentication - Password Login. (2019, 22 juni). YouTube. Geraadpleegd op 15 maart 2022, van https://www.youtube.com/watch?v=Ud5xKCYQTjM

