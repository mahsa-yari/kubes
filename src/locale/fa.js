import { fa } from 'vuetify/lib/locale'

export default {
  ...fa,

  errorMessages: {
    noAccess: 'شما اجازه دسترسی به صفحه را ندارید!',
    forbidden: 'امکان دسترسی به این ویژگی برای شما وجود ندارد',
    badRequest: 'داده های ورودی نامعتبر می باشند',
    serverError:
      'خطایی سمت سرور رخ داده است، جهت رفع مشکل با ادمین تماس بگیرید',
    InternalError: 'user Token Failed',
    tokenExpired: 'توکن شما منفضی شده',
    passwordIsNotCorrect: 'رمز عبور اشتباه است'
  },
  common: {
  },
  pages: {
    index: {
      title: ''
    },
    notFound: {
      title: '404'
    },
    noaccess: {
      title: 'دسترسی غیر مجاز'
    },
  },
  enums: {
  }
}
