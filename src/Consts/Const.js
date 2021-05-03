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
        message: 'Giriş başarılı. Hesap ekranına yönlendiriliyorsunuz.',
    },
    loginUnsuccess: {
        type: 'loginUnsuccess',
        message: 'Email veya Şifre hatalı!',
    },
    loginFirst: {
        type: 'loginFirst',
        message: '',
    },
    productAdd: {
        type: 'productadd',
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
}