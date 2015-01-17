Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', {
  name		: 'home',
  template	: 'default',
   data: function () { return "Body Content"; }
});
