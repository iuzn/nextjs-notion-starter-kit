module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '5f9e54dc684343c3bb1becb2ed6f48fe',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'İbrahim Uzun',
  domain: 'ibrahimuzun.com',
  author: 'İbrahim Uzun',

  // open graph metadata (optional)
  description: 'Example site description',
  socialImageTitle: 'İbrahim Uzun',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'ibrahimuzn',
  github: 'iuzn',
  linkedin: 'ibuzn',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://raw.githubusercontent.com/iuzn/assets/master/Developer%20Blog/dev-favicon.png',
  defaultPageCover:
    'https://raw.githubusercontent.com/iuzn/assets/master/Developer%20Blog/dev-avatar.png',
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false
}
