'use client'

import ReactECharts from 'echarts-for-react'

const portfolioData = [
  { value: 45, name: 'طلای آب‌شده ۲۴ عیار' },
  { value: 30, name: 'سکه' },
  { value: 15, name: 'پارسیان' },
  { value: 10, name: 'شمش سبک' }
]

export const PortfolioChart = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: 0,
      textStyle: { color: 'var(--foreground)' }
    },
    series: [
      {
        name: 'ترکیب پرتفوی',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: portfolioData.map((item, index) => ({
          ...item,
          itemStyle: { color: `var(--color-chart-${(index % 5) + 1})` }
        }))
      }
    ]
  }

  return <ReactECharts option={option} style={{ height: 320 }} />
}
