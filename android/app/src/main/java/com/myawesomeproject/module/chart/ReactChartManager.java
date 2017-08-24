package com.myawesomeproject.module.chart;

import android.graphics.Color;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Copyright (c) 2016 DigitasLBi. All rights reserved.
 *
 * Created on 24/08/2017.
 */
public class ReactChartManager extends SimpleViewManager<ChartView> {

    private static final String NAME = "ReactChartManager";

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected ChartView createViewInstance(final ThemedReactContext reactContext) {
        return new ChartView(reactContext);
    }

    @ReactProp(name = "backgroundColour", defaultInt = Color.BLACK)
    public void setBackgroundColour(final ChartView chartView, final int backgroundColour) {
        chartView.setBackgroundColor(backgroundColour);
    }

    @ReactProp(name = "chartColour", defaultInt = Color.BLUE)
    public void setChartColour(final ChartView chartView, final int chartColour) {
        chartView.setChartColour(chartColour);
    }
}
