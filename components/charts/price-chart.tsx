'use client'

import ReactECharts from 'echarts-for-react'

const priceData = {
  days: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
  prices: [2_750_000, 2_760_000, 2_770_000, 2_780_000, 2_765_000, 2_790_000, 2_810_000]
}

export const PriceChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: { left: 20, right: 20, top: 20, bottom: 20, containLabel: true },
    xAxis: {
      type: 'category',
      data: priceData.days,
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: (value: number) => `${value / 1000}k`
      }
    },
    series: [
      {
        data: priceData.prices,
        type: 'line',
        smooth: true,
        lineStyle: { color: 'var(--color-chart-1)', width: 3 },
        areaStyle: { color: 'var(--color-chart-1)', opacity: 0.15 },
        symbol: 'circle'
      }
    ]
  }

  return <ReactECharts option={option} style={{ height: 300 }} />
}
