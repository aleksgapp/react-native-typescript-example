package com.myawesomeproject.module.chart;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Copyright (c) 2016 DigitasLBi. All rights reserved.
 *
 * Created on 24/08/2017.
 */
public class ChartPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(final ReactApplicationContext reactContext) {
        return Collections.EMPTY_LIST;
    }

    @Override
    public List<ViewManager> createViewManagers(final ReactApplicationContext reactContext) {
        final List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new ReactChartManager());
        return viewManagers;
    }
}
