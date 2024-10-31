
interface WindowExtended extends Window {
    Telegram?: any
}

const windowExt : WindowExtended = window

export const userdata = {
    user: '',
    username: ''
}

userdata.user = windowExt.Telegram?.WebApp?.initDataUnsafe?.user?.id ?? ''
userdata.username = windowExt.Telegram?.WebApp?.initDataUnsafe?.user?.username ?? ''

//console.log(windowExt.Telegram.WebApp.initData)
//console.log(windowExt.Telegram.WebApp.initDataUnsafe)

export const tgWebApp = windowExt.Telegram.WebApp