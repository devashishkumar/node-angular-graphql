echo "# node-angular-graphql" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/devashishkumar/node-angular-graphql.git
git push -u origin main

## express dependencies

```sh
npm install --save cors express-graphql mongoose mysql mysqljs/mysql
```

## angular dependencies

```sh
npm install apollo-cache-inmemory apollo-client apollo-angular-link-http graphql graphql-tag --save
```


```sh
ng add apollo-angular
```


