import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'


function BarChart(props) {
	return <Bar data={props.chartData} 
	options={
				{
					plugins: {
						legend: {
							display: false
						},
						tooltip: {
							displayColors: false,
							callbacks: {
								label: function(tooltipItem, data) {
								  return '$' + tooltipItem.raw;
								},
								title: function(tooltipItem, data) {
								  return;
								}
							  }
						}
					},
					scales: {
						y: {
							display: false,
						},
						x: {
							ticks: {
								color: "#92857A",
								fontSize: 15,
							},
							grid: {
								display: false,
								drawBorder: false,
							}
						}
					},
				}
			} 
	/>
}

export default BarChart