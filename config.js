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
    'type': 'linkedin',
    'title': 'LinkedIn',
    'icon': 'typcn typcn-social-linkedin',
    'href': 'https://www.linkedin.com/in/constantx',
    'last': false
  }, {
    'type': 'angellist',
    'title': 'AngelList',
    'icon': 'typcn typcn-social-linkedin',
    'href': 'https://angel.co/constantx',
    'last': false
  }, {
    'type': 'dribbble',
    'title': 'Dribbble',
    'icon': 'typcn typcn-social-dribbble',
    'href': 'https://dribbble.com/constantx',
    'last': false
  }, {
    'type': 'github',
    'title': 'GitHub',
    'icon': 'typcn typcn-social-github',
    'href': 'https://github.com/constantx',
    'last': false
  }, {
    'type': 'twitter',
    'title': 'Twitter',
    'icon': 'typcn typcn-social-twitter',
    'href': 'https://twitter.com/constantx',
    'last': false
  // }, {
  //   'type': 'portfolio',
  //   'title': 'or this old visual design portfolio',
  //   'icon': 'typcn typcn-starburst-outline',
  //   'href': 'http://cargocollective.com/constantx',
  //   'last': true
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
