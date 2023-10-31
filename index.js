require('dotenv').config()

const express = require('express') // syntex
const app = express()
const port = 4000      // virtual port near 65535 port some port are free 

const githubData = {
  "login": "ashwani746",
  "id": 107113567,
  "node_id": "U_kgDOBmJsXw",
  "avatar_url": "https://avatars.githubusercontent.com/u/107113567?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ashwani746",
  "html_url": "https://github.com/ashwani746",
  "followers_url": "https://api.github.com/users/ashwani746/followers",
  "following_url": "https://api.github.com/users/ashwani746/following{/other_user}",
  "gists_url": "https://api.github.com/users/ashwani746/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ashwani746/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ashwani746/subscriptions",
  "organizations_url": "https://api.github.com/users/ashwani746/orgs",
  "repos_url": "https://api.github.com/users/ashwani746/repos",
  "events_url": "https://api.github.com/users/ashwani746/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ashwani746/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ashwani Patel",
  "company": "Student",
  "blog": "",
  "location": "Varanasi",
  "email": null,
  "hireable": null,
  "bio": "Explorer..(SDE)\r\n(Computer Science & Engineering)",
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2022-06-08T10:39:24Z",
  "updated_at": "2023-09-17T08:06:25Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send('ashwanidotcom')
})

app.get('/login', (req, res)=> {
    res.send('<h1> please visit my gitgub account ashwani746</h1>')
})

app.get('/github', (req, res)=> {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})