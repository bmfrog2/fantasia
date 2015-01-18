// main.js

accountsUIBootstrap3.setLanguage('ko'); // 한국어 메뉴 지원

Template["디폴트"].created = function() {
	
  if (Accounts._verifyEmailToken) {
    Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
      if (err != null) {
        if (err.message = '이메일 인증 시간이 초과했습니다. [403]') {
          console.log('이메일 인증 시간이 초과했습니다.')
        }
      } else {
        console.log('이메일이 인증되었습니다. 감사합니다.')
      }
    });
  }
};
