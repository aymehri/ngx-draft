```
     _-----_     
    |       |    ╭──────────────────────────╮
    |--(o)--|    │  Let's create a LoopBack │
   `---------´   │       application!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? What's the name of your application? ps-server
? Enter name of the directory to contain the project: ps-server
   create ps-server/
     info change the working directory to ps-server

? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? empty-server (An empty LoopBack API, without any configured models or datasources)
```

Create the App

```
$ lb datasource

? Enter the data-source name: psDB
? Select the connector for psDB: In-memory db (supported by StrongLoop)
Connector-specific configuration:
? window.localStorage key to use for persistence (browser only):
? Full path to file for persistence (server only): db.json
```

```
$ lb model
? Enter the model name: team
? Select the data-source to attach team to: psDB (memory)
? Select model's base class PersistedModel
? Expose team via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? server
Let's add some team properties now.

Enter an empty property name when done.
? Property name: name
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]:

Let's add another team property.
Enter an empty property name when done.
? Property name:
```

```
$ lb model
? Enter the model name: match
? Select the data-source to attach match to: psDB (memory)
? Select model's base class PersistedModel
? Expose match via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? server
Let's add some match properties now.

Enter an empty property name when done.
? Property name: x1
   invoke   loopback:property
? Property type: boolean
? Required? No
? Default value[leave blank for none]: false

Let's add another match property.
Enter an empty property name when done.
? Property name: xx
   invoke   loopback:property
? Property type: boolean
? Required? No
? Default value[leave blank for none]: false

Let's add another match property.
Enter an empty property name when done.
? Property name: x2
   invoke   loopback:property
? Property type: boolean
? Required? No
? Default value[leave blank for none]: false

Let's add another match property.
Enter an empty property name when done.
? Property name:
```

```
$ lb model
? Enter the model name: promosport
? Select the data-source to attach promosport to: psDB (memory)
? Select model's base class PersistedModel
? Expose promosport via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? server
Let's add some promosport properties now.

Enter an empty property name when done.
? Property name: seasonYear
   invoke   loopback:property
? Property type: number
? Required? No
? Default value[leave blank for none]:

Let's add another promosport property.
Enter an empty property name when done.
? Property name: number
   invoke   loopback:property
? Property type: number
? Required? No
? Default value[leave blank for none]:

Let's add another promosport property.
Enter an empty property name when done.
? Property name: date
   invoke   loopback:property
? Property type: date
? Required? No
? Default value[leave blank for none]:

Let's add another promosport property.
Enter an empty property name when done.
? Property name: finishDate
   invoke   loopback:property
? Property type: date
? Required? No
? Default value[leave blank for none]:

Let's add another promosport property.
Enter an empty property name when done.
? Property name:
```

Relation
```
Relation match belongs to team:
$ lb relation
? Select the model to create the relationship from: match
? Relation type: belongs to
? Choose a model to create a relationship with: team
? Enter the property name for the relation: localTeam
? Optionally enter a custom foreign key: localTeamId

$ lb relation
? Select the model to create the relationship from: match
? Relation type: belongs to
? Choose a model to create a relationship with: team
? Enter the property name for the relation: visitorTeam
? Optionally enter a custom foreign key: visitorTeamId
```
[api/matches?filter[include]=visitorTeam&filter[include]=localTeam](http://localhost:3000/api/matches?filter[include]=visitorTeam&filter[include]=localTeam)


```
$ lb relation
? Select the model to create the relationship from: match
? Relation type: belongs to
? Choose a model to create a relationship with: promosport
? Enter the property name for the relation: promosport
? Optionally enter a custom foreign key:

$ lb relation
? Select the model to create the relationship from: promosport
? Relation type: has many
? Choose a model to create a relationship with: match
? Enter the property name for the relation: matches
? Optionally enter a custom foreign key:
? Require a through model? No
```
[api/promosports?filter[include][matches]=visitorTeam&filter[include][matches]=localTeam](http://localhost:3000/api/promosports?filter[include][matches]=visitorTeam&filter[include][matches]=localTeam)


Model
```
$ lb model
? Enter the model name: pronostic
? Select the data-source to attach pronostic to: psDB (memory)
? Select model's base class PersistedModel
? Expose pronostic via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? server
Let's add some pronostic properties now.

Enter an empty property name when done.
? Property name: saveDate
   invoke   loopback:property
? Property type: date
? Required? Yes
? Default value[leave blank for none]:

Let's add another pronostic property.
Enter an empty property name when done.
? Property name:
```

```
$ lb model
? Enter the model name: pronosticMatch
? Select the data-source to attach pronosticMatch to: psDB (memory)
? Select model's base class PersistedModel
? Expose pronosticMatch via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? server
Let's add some pronosticMatch properties now.

Enter an empty property name when done.
? Property name: x1
   invoke   loopback:property
? Property type: boolean
? Required? No
? Default value[leave blank for none]: false

Let's add another pronosticMatch property.
Enter an empty property name when done.
? Property name: xx
   invoke   loopback:property
? Property type: boolean
? Required? No
? Default value[leave blank for none]: false

Let's add another pronosticMatch property.
Enter an empty property name when done.
? Property name: x2
   invoke   loopback:property
? Property type: boolean
? Required? No
? Default value[leave blank for none]: false

Let's add another pronosticMatch property.
Enter an empty property name when done.
? Property name:
```

Relation for pronosticMatch
```
$ lb relation
? Select the model to create the relationship from: pronosticMatch
? Relation type: belongs to
? Choose a model to create a relationship with: pronostic
? Enter the property name for the relation: pronostic
? Optionally enter a custom foreign key:

$ lb relation
? Select the model to create the relationship from: pronosticMatch
? Relation type: belongs to
? Choose a model to create a relationship with: match
? Enter the property name for the relation: match
? Optionally enter a custom foreign key:
```
[api/pronosticmatches?filter[include]=match](http://localhost:3000/api/pronosticmatches?filter[include]=pronostic)
[api/pronosticmatches?filter[include]=match](http://localhost:3000/api/pronosticmatches?filter[include]=match)


Relation for pronostic
```
$ lb relation
? Select the model to create the relationship from: pronostic
? Relation type: belongs to
? Choose a model to create a relationship with: promosport
? Enter the property name for the relation: promosport
? Optionally enter a custom foreign key:

$ lb relation
? Select the model to create the relationship from: pronostic
? Relation type: has many
? Choose a model to create a relationship with: pronosticMatch
? Enter the property name for the relation: pronosticMatches
? Optionally enter a custom foreign key:
? Require a through model? No

```
[api/pronostics?filter[include]=promosport](http://localhost:3000/api/pronostics?filter[include]=promosport)
[api/pronostics?filter[include]=pronosticMatches&filter[include]=promosport](http://localhost:3000/api/pronostics?filter[include]=pronosticMatches&filter[include]=promosport])