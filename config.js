module.exports = {
  'site-title': '&ldquo;T.&rdquo; Nguyen',

  'site-author': {
    'name': 'T. Nguyen',
    github: 'constantx',
    avatar: 'http://i.imgur.com/mDTn6eC.jpg'
  },

  'url': 'http://constantx.com',

  'production': process.env.NODE_ENV !== 'development',

  'social': [{
    'type': 'dribbble',
    'title': 'dribbble',
    'icon': 'typcn typcn-social-dribbble',
    'href': 'https://dribbble.com/constantx',
    'last': false
  }, {
    'type': 'github',
    'title': 'github',
    'icon': 'typcn typcn-social-github',
    'href': 'https://github.com/constantx',
    'last': false
  }, {
    'type': 'linkedin',
    'title': 'linkedin',
    'icon': 'typcn typcn-social-linkedin',
    'href': 'https://www.linkedin.com/in/constantx',
    'last': false
  }, {
    'type': 'twitter',
    'title': 'twitter',
    'icon': 'typcn typcn-social-twitter',
    'href': 'https://twitter.com/constantx',
    'last': false
  }, {
    'type': 'portfolio',
    'title': 'or this old outdated cargo',
    'icon': 'typcn typcn-starburst-outline',
    'href': 'http://cargocollective.com/constantx',
    'last': true
  }],

  'nav-main': [{
    'id': 'about',
    'label': 'about',
    'href': '/about'
  }, {
    'id': 'work',
    'label': 'Work',
    'href': '/work'
  }, {
    'id': 'writing',
    'label': 'writing',
    'href': 'https://medium.com/@constantx'
  }, {
    'id': 'experiments',
    'label': 'experiments',
    'href': '/experiments'
  }]
};
