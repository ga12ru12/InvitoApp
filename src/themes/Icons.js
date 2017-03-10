import Colors from './Colors'
import Metrics from './Metrics'

const icons = {
  home: {
    btnFire: {
      name: 'fire',
      color: Colors.blurYellow
    },
    btnPolice: {
      name: 'car',
      color: Colors.blurGreen
    },
    btnAmbulance: {
      name: 'ambulance',
      color: Colors.blurBricky
    },
    btnExtreme: {
      name: 'alert',
      color: Colors.blurRed
    },
    btnNoti: {
      name: 'ic_bell',
      color: Colors.blurYellow
    }
  },

  profile: {
    btnSave: {
      name: 'ic_resolve',
      color: Colors.snow,
      size: 15
    },
    btnAdd: {
      name: 'ic_add2',
      color: Colors.snow,
      size: 15
    },
    btnRemove: {
      name: 'md-remove',
      color: Colors.snow,
      size: 15
    },
    btnPickAvatar: {
      name: 'camera',
      color: Colors.lightBlue,
      size: 30
    },
    arrowRight: {
      name: 'ic_right_arrow',
      color: Colors.warmGrey,
      size: 18
    },
    btnVerify: {
      name: 'ghhghg',
      color: Colors.snow,
      size: 15
    },
    btnEdit: {
      name: 'ic_edit',
      color: Colors.snow,
      size: 15

    }
  },

  emergency: {
    btnClose: {
      name: 'md-close',
      color: Colors.snow,
      size: 18,
      bound: 42
    },
    btnNavigate: {
      name: 'md-navigate',
      color: Colors.snow,
      size: 18,
      bound: 42
    }
  },

  cameraGallery: {
    circle: {
      name: 'ios-radio-button-off',
      color: '#fff',
      size: 25
    },
    check: {
      name: 'md-checkmark',
      color: '#0089fa',
      size: 25
    }
  },

  userGroup: {
    plus: {
      name: 'ic_add',
      color: Colors.snow,
      size: 14
    },
    check: {
      name: 'md-checkmark',
      color: Colors.snow,
      size: 14
    }
  },

  navigator: {
    btnBack: {
      name: 'ic_back',
      color: Colors.snow,
      size: 14
    },
    btnForward: {
      name: 'navigate_forward',
      color: Colors.snow,
      size: 14
    },
    btnHelp: {
      name: 'ghhghg',
      color: Colors.snow
    }
  },

  about: {

  },

  face: {
    sad: {
      name: 'ic_sad',
      color: Colors.divider,
      size: 60,
      backgroundColor: Colors.clear
    },
    smile: {
      name: 'ic_smile',
      color: Colors.divider,
      size: 60,
      backgroundColor: Colors.clear
    }
  },

  drawer: {
    btnMenu: {
      name: 'md-menu',
      color: Colors.drawer,
      size: 32,
      backgroundColor: Colors.clear
    },
    btnNotify: {
      name: 'ios-notifications',
      color: Colors.drawer,
      size: 32,
      backgroundColor: Colors.clear
    },
    backgroundColor: Colors.drawer,
  },

  menu: {
    btnHome: {
      name: 'home'
    },
    btnProfile: {
      name: 'profile'
    },
    btnHelp: {
      name: 'square-check'
    },
    btnEmergency: {
      name: 'bell'
    },
    btnFeedback: {
      name: 'mail2'
    },
    btnSetting: {
      name: 'cog'
    },
    btnAbout: {
      name: 'help'
    },
    btnMedicalInfo: {
      name: 'stack-2'
    }
  }
}

export default icons
