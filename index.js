import React, {
	PixelRatio,
	Platform,
	Dimensions
} from 'react-native';

const windowSize = Dimensions.get('window');

class DeviceDetection {
	constructor() {
		this.pixelDensity = PixelRatio.get();
		this.width = windowSize.width;
		this.height = windowSize.height;
		this.adjustedWidth = this.width * this.pixelDensity;
		this.adjustedHeight = this.height * this.pixelDensity;

		this.isPhoneOrTablet();
		this.isIosOrAndroid();
		this.detectIphoneX();
	}

	isPhoneOrTablet() {
		if(this.pixelDensity < 2 && (this.adjustedWidth >= 1000 || this.adjustedHeight >= 1000)) {
			this.isTablet = true;
			this.isPhone = false;
		} else if(this.pixelDensity === 2 && (this.adjustedWidth >= 1920 || this.adjustedHeight >= 1920)) {
			this.isTablet = true;
			this.isPhone = false;
		} else {
			this.isTablet = false;
			this.isPhone = true;
		}
	}

	isIosOrAndroid() {
		if(Platform.OS === 'ios') {
			this.isIos = true;
			this.isAndroid = false;
		} else {
			this.isIos = false;
			this.isAndroid = true;
		}
	}

	detectIphoneX(){
		if ( Platform.OS === 'ios' &&
			!Platform.isPad &&
			!Platform.isTVOS &&
			(windowSize.height === 812 || windowSize.width === 812)) {
			this.isIphoneX = true;
		} else {
			this.isIphoneX = false;
		}

	}
}

module.exports = new DeviceDetection();
