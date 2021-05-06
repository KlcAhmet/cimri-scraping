exports.events = {
    wrongpassword: {
        type: 'wrongpassword',
        message: 'Şifreler eşleşmiyor!',
    },
    allreadymail: {
        type: 'allreadymail',
        message: 'Email kullanılmış!',
    },
    registerSuccess: {
        type: 'registerSuccess',
        message: 'Kayıt başarılı. Giriş ekranına yönlendiriliyorsunuz.',
    },
    loginSuccess: {
        type: 'loginSuccess',
        message: 'Giriş başarılı. Ana sayfa ekranına yönlendiriliyorsunuz.',
    },
    loginUnsuccess: {
        type: 'loginUnsuccess',
        message: 'Email veya Şifre hatalı!',
    },
    loginFirst: {
        type: 'loginFirst',
        message: '',
    },
    userInfo: {
        type: 'userInfo',
        message: '',
    },
    productAdd: {
        type: 'productadd',
        message: '',
    },
    productInfo: {
        type: 'productInfo',
        message: '',
    },
    productLike: {
        type: 'productlike',
        message: 'red'
    },
    productUnlike: {
        type: 'productUnlike',
        message: 'black'
    },
    productAlarmLike: {
        type: 'productAlarmLike',
        message: ''
    },
    productAlarmUnlike: {
        type: 'productAlarmUnlike',
        message: ''
    },
    productAlarm: {
        type: 'productAlar',
        message: ''
    },
    changeUserInfo: {
        type: 'changeUserInfo',
        message: 'Bilgiler güncellendi'
    },
    changePassword: {
        type: 'changePassword',
        message: 'Şifreniz güncellendi. Giriş ekranına yönlendiriliyorsunuz'
    },
    changeproducts: {
        type: 'changeproducts',
        message: ''
    },
    systemError: {
        type: 'systemError',
        message: 'Sistem hatası. Lütfen işleminizi daha sonra tekrar deneyin.'
    },
    exitAccount: {
        type: 'exitAccount',
        message: 'Güvenli çıkış yapılıyor.'
    },
}