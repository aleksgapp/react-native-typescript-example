package com.myawesomeproject.module.ui;

import android.content.res.Configuration;

import com.facebook.react.bridge.ReactApplicationContext;
import junit.framework.Assert;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

/**
 * Copyright (c) 2016 DigitasLBi. All rights reserved.
 *
 * Created on 16/08/2017.
 */
@RunWith(MockitoJUnitRunner.class)
public class UIAndroidNativeModuleTest {

    @Mock
    Configuration mConfiguration;
    @Mock
    ReactApplicationContext mReactApplicationContext;

    private UIAndroidNativeModule mUIAndroidNativeModule;

    @Before
    public void setUp() throws Exception {
        mConfiguration.orientation = Configuration.ORIENTATION_PORTRAIT;
        mUIAndroidNativeModule = new UIAndroidNativeModule(mReactApplicationContext);
    }

    @Test
    public void getName_returnsName() {
        final String name = mUIAndroidNativeModule.getName();
        Assertions.assertThat(name).isEqualTo("UIAndroidNativeModule");
    }

    @Test
    public void getOrientation_portrait_returnPortrait() throws Exception {
        final String orientation = mUIAndroidNativeModule.getOrientation(mConfiguration);
        Assert.assertEquals("portrait", orientation);
    }
}
