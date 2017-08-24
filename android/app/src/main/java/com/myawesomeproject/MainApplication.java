package com.myawesomeproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.hieuvp.fingerprint.ReactNativeFingerprintScannerPackage;
import com.myawesomeproject.module.chart.ChartPackage;
import com.myawesomeproject.module.toast.ToastPackage;
import com.myawesomeproject.module.ui.UIPackage;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(new MainReactPackage(),
                    new ReactNativeFingerprintScannerPackage(), new VectorIconsPackage(),
                    new ToastPackage(), new UIPackage(), new ChartPackage());
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
