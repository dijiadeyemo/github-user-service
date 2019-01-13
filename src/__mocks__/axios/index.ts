const axios: any = jest.genMockFromModule('axios');

const mockUserSearchPayload: object = {
    "total_count": 1,
    "incomplete_results": false,
    "items": [
        {
            "login": "dijiadeyemo",
            "id": 3319406,
            "node_id": "MDQ6VXNlcjMzMTk0MDY=",
            "avatar_url": "https://avatars2.githubusercontent.com/u/3319406?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/dijiadeyemo",
            "html_url": "https://github.com/dijiadeyemo",
            "followers_url": "https://api.github.com/users/dijiadeyemo/followers",
            "following_url": "https://api.github.com/users/dijiadeyemo/following{/other_user}",
            "gists_url": "https://api.github.com/users/dijiadeyemo/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/dijiadeyemo/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/dijiadeyemo/subscriptions",
            "organizations_url": "https://api.github.com/users/dijiadeyemo/orgs",
            "repos_url": "https://api.github.com/users/dijiadeyemo/repos",
            "events_url": "https://api.github.com/users/dijiadeyemo/events{/privacy}",
            "received_events_url": "https://api.github.com/users/dijiadeyemo/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1
        }
    ]
};

const mockUserpayload: object = {
    "login": "dijiadeyemo",
    "id": 3319406,
    "node_id": "MDQ6VXNlcjMzMTk0MDY=",
    "avatar_url": "https://avatars2.githubusercontent.com/u/3319406?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/dijiadeyemo",
    "html_url": "https://github.com/dijiadeyemo",
    "followers_url": "https://api.github.com/users/dijiadeyemo/followers",
    "following_url": "https://api.github.com/users/dijiadeyemo/following{/other_user}",
    "gists_url": "https://api.github.com/users/dijiadeyemo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/dijiadeyemo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/dijiadeyemo/subscriptions",
    "organizations_url": "https://api.github.com/users/dijiadeyemo/orgs",
    "repos_url": "https://api.github.com/users/dijiadeyemo/repos",
    "events_url": "https://api.github.com/users/dijiadeyemo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/dijiadeyemo/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Diji Adeyemo",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 4,
    "public_gists": 1,
    "followers": 1,
    "following": 0,
    "created_at": "2013-01-20T07:44:08Z",
    "updated_at": "2019-01-04T10:33:35Z"
};

axios.get = jest.fn().mockImplementation((url: string) => {
    switch (url) {
        case 'https://api.github.com/search/users?q=user:dijiadeyemo+language:javascript':
            return mockUserSearchPayload;
        case 'https://api.github.com/users/dijiadeyemo':
            return mockUserpayload;
        default:
            throw new Error('Not found')
    }
});

export default axios;