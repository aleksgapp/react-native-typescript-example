package com.myawesomeproject.module.chart;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.View;

/**
 * Copyright (c) 2016 DigitasLBi. All rights reserved.
 *
 * Created on 24/08/2017.
 */
public class ChartView extends View {

    private Paint mChartPaint;

    public ChartView(final Context context) {
        super(context);
    }

    public ChartView(final Context context, @Nullable final AttributeSet attrs) {
        super(context, attrs);
    }

    public ChartView(final Context context, @Nullable final AttributeSet attrs,
            final int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    private void init() {
        mChartPaint = new Paint();
        mChartPaint.setColor(Color.CYAN);
    }

    public void setChartColour(final int colour) {
        mChartPaint.setColor(colour);
    }

    @Override
    protected void onDraw(final Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawLine(0, 0, 300, 300, mChartPaint);
    }

    @Override
    protected void onMeasure(final int widthMeasureSpec, final int heightMeasureSpec) {
        super.onMeasure(500, 500);
    }
}
