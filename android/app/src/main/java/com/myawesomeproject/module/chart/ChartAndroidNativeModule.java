package com.myawesomeproject.module.chart;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * Copyright (c) 2016 DigitasLBi. All rights reserved.
 *
 * Created on 24/08/2017.
 */
public class ChartAndroidNativeModule extends ReactContextBaseJavaModule {

    private static final String NAME = "ChartAndroidNativeModule";

    public ChartAndroidNativeModule(final ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return NAME;
    }
}
