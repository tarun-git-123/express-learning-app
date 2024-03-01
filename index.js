require('dotenv').config();
const express = require('express')
const app = express()
const github_data = {
    "login": "tarun-git-123",
    "id": 135609065,
    "node_id": "U_kgDOCBU66Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/135609065?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tarun-git-123",
    "html_url": "https://github.com/tarun-git-123",
    "followers_url": "https://api.github.com/users/tarun-git-123/followers",
    "following_url": "https://api.github.com/users/tarun-git-123/following{/other_user}",
    "gists_url": "https://api.github.com/users/tarun-git-123/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tarun-git-123/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tarun-git-123/subscriptions",
    "organizations_url": "https://api.github.com/users/tarun-git-123/orgs",
    "repos_url": "https://api.github.com/users/tarun-git-123/repos",
    "events_url": "https://api.github.com/users/tarun-git-123/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tarun-git-123/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-06-05T10:56:17Z",
    "updated_at": "2024-02-05T19:13:36Z"
    }
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/twitter", (req,res)=>{
    res.send("<h1>Hello Twitter</h1>")
})

app.get("/github", (req,res)=>{
    res.json(github_data);
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})