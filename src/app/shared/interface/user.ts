export interface User {
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    gravatar_id: string
    html_url: string
    id: number
    login: string
    organizations_url: string
    received_events_url: string
    repos_url: string
    score: number
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
}

export interface UserList {
    incomplete_results: boolean,
    items: Array <User>,
    total_count: number
}

