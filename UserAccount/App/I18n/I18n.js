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
    username: 'User name',
    password: 'Password',
    resetPW: 'Reset Password',
    connectErr: 'Connection Error',

  	daily: 'Daily',
  	weekly: 'Weekly',
  	monthly: 'Monthly',
  	custom: 'Custom',
    exitApp: 'Do you want to exit app?',

    verypoor: 'Very poor',
    poor: 'Poor',
    average: 'Average',
    good: 'Good',
    excellent: 'Excellent',

    justNow: 'Just now',
    minuteago: 'minute ago',
    minutesago: 'minutes ago',
    hourago: 'hour ago',
    hoursago: 'hours ago',
    dayago: 'day ago',
    daysago: 'days ago',
    weekago: 'week ago',
    weeksago: 'weeks ago',

    report: 'Report',
    review: 'Review',
    reviews: 'Reviews',
    noreview: 'NO REVIEW',
    noReason: 'NO REASON',
    account: 'Account',
    forgotPW: 'FORGOT PASSWORD',
    device: 'Device',
    reasons: 'Reasons',
    acknowledge: 'Acknowledge',
    close: 'Close',
    cancel: 'Cancel',
    yes: 'Yes',
    settingBusiness: 'Setting Business',
    setting: 'Setting',

    phoneNo: 'Phone number',
    role: 'Role',
    errorPushNoti: "This Notification doesn't work with current business",
    categories: 'Categories',
    emptyCategories: "This business doesn't dependent on any category.",

    selectAvatar: 'Select Avatar',
    takePhoto: 'Take Photo…',
    choosefromLib: 'Choose from Library…',

    tutorialChooseReportsTab: 'Choose tab to view summary in current day, current week, current month.',
    tutorialChooseTabBar: 'Choose tab to view Report, Reviews, Account or change business you are working.',
    tutorialStartDate: 'Select the start date of the statistics in the time range',
    tutorialViewDetailReview: 'Select the review to view reviewDetail.',
    tutorialChangeBusiness: 'Choose item to change business you are working.'
  },

  vi: {
    signin: 'ĐĂNG NHẬP',
    login: 'ĐĂNG NHẬP',
    logout: 'ĐĂNG XUẤT',
    messageLogout: 'Bạn có chắc là muốn đăng xuất?',
    username: 'Tên người dùng',
    password: 'Mật khẩu',
    resetPW: 'Thay đổi mật khẩu',
    connectErr: 'Lỗi kết nối',

  	daily: 'Hàng Ngày',
  	weekly: 'Hàng Tuần',
  	monthly: 'Hàng Tháng',
  	custom: 'Tùy Chọn',
    exitApp: 'Bạn có muốn thoát ứng dụng?',

    verypoor: 'Rất tệ',
    poor: 'Tệ',
    average: 'Trung bình',
    good: 'Tốt',
    excellent: 'Xuất sắc',
   
    justNow: 'Mới đây',
    minuteago: 'phút trước',
    minutesago: 'phút trước',
    hourago: 'giờ trước',
    hoursago: 'giờ trước',
    dayago: 'ngày trước',
    daysago: 'ngày trước',
    weekago: 'tuần trước',
    weeksago: 'tuần trước',

    report: 'Báo cáo',
    review: 'Đánh giá',
    reviews: 'Đánh giá',
    noreview: 'CHƯA CÓ ĐÁNH GIÁ',
    noReason: 'CHƯA CÓ LÝ DO',
    account: 'Tài khoản',
    forgotPW: 'QUÊN MẬT KHẨU',
    device: 'Thiết bị',
    reasons: 'Lý do',
    acknowledge: 'Xác nhận',
    close: 'Đóng',
    cancel: 'Bỏ qua',
    yes: 'Đồng ý',
    settingBusiness: 'Cài đặt doanh nghiệp',
    setting: 'Cài đặt',

    phoneNo: 'Số điện thoại: ',
    role: 'Chức vụ',
    errorPushNoti: 'Thông báo này không dành cho cơ sở bạn làm việc hiện tại',
    categories: 'Loại',
    emptyCategories: "Cơ sở này không thuộc bất kì loại nào.",

    selectAvatar: 'Chọn ảnh đại diện',
    takePhoto: 'Chụp ảnh',
    choosefromLib: 'Chọn ảnh từ thư viện',

    tutorialChooseReportsTab: 'Chọn tab để xem thống kê trong ngày này, tuần này hoặc tháng này.',
    tutorialChooseTabBar: 'Chọn tab để xem thông tin thống kê, các đánh giá, tài khoản và thay đổi cơ sở bạn đang làm việc.',
    tutorialStartDate: 'Chọn ngày bắt đầu của thống kê trong 1 khoản thời gian.',
    tutorialViewDetailReview: 'Chọn một đánh giá để xem thông tin của đánh giá này.',
    tutorialChangeBusiness: 'Chọn một cơ sở, doanh nghiệpC để thay đổi cho cơ sở bạn đang làm việc.'
  },

  fr: {
  }
};

export default I18n;
