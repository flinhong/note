export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'inDev. Notes',
  DESCRIPTION:
    'Freelance front-end web development and semiconductor engineer.',
  EMAIL: 'hong@email.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  POSTS_PER_PAGE: 7,
  SITEURL: 'https://note.frankindev.com',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home' },
  { href: '/note', label: 'note' },
  // { href: '/authors', label: 'authors' },
  // { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/flinhong', label: 'GitHub' },
  { href: 'https://twitter.com/flinhong', label: 'Twitter' },
  { href: 'hong@email.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
