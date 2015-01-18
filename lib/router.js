Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: '페이지_읽는_중',
  notFoundTemplate: '없는_페이지_접근',
});

Router.route('/test', {
  name		: 'test',
  template	: '디폴트',
   data: function () { return "Body Content"; }
});

Router.route('/', {
  name		: 'index',
  template	: 'index',
});

