# CuppyBot ( DiscordBot )

[ This bot , now under development ]

## Requirement

```
1. Yarn or NPM
```

## Install

```
$ yarn
```

## Command

```
$ yarn start
$ yarn dev
```

## Bot Command

- Welcome greeting
- !hello → hello user
- !kick @xxx → kick user ( administrator )
- !ban @xxx → ban user ( administrator )
- !addUser @xxx → add user role ( only 1 user per time )
- !addCoAdmin @xxx → add co-admin role (only 1 user per time , permission for admin and co-admin )
- !addAdmin @xxx →add administrator role ( only 1 user per time , permission for admin only )
- !play https://[ Link YT ] → play music from youtube link ( audioonly )
- !stop → stop youtube music ( Must confirm to stop music )

## Deploy ( heroku )

<a href="https://heroku.com/deploy?template=https://github.com/thanawatgulati/cuppybot&env[DISCORD_SECRET_TOKEN]=xxxxx">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
