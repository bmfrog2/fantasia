Meteor.startup(function() {
  Accounts.emailTemplates.from = '메일 인증 시스템 <no-reply@fantasia.meteor.com>';
  Accounts.emailTemplates.siteName = '판타시아';
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return '등록한 이메일 인증 확인 요청';
  };
  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return '다음 이메일 인증 링크를 클릭해 주세요: ' + url;
  };
});

