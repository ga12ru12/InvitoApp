import I18n from 'react-native-i18n';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// All translations for the app go here:
I18n.translations = {
  en: {
    signin: 'SIGN IN',
    login: 'LOG IN',
    logout: 'LOG OUT',
    messageLogout: 'Are you sure you want to log out?',
    enterName: 'Enter name',
    password: 'Password',
    resetPW: 'Reset Password',
    connectErr: 'Connection Error',
  },

  vi: {
    signin: 'ĐĂNG NHẬP',
    login: 'ĐĂNG NHẬP',
    logout: 'ĐĂNG XUẤT',
    messageLogout: 'Bạn có chắc là muốn đăng xuất?',
    enterName: 'Nhập tên',
    password: 'Mật khẩu',
    resetPW: 'Thay đổi mật khẩu',
    connectErr: 'Lỗi kết nối',
  }
};

export default I18n;
