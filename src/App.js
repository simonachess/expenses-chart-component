import { useState, useEffect } from 'react'
import classnames from 'classnames'
import BarChart from './BarChart'
import data from './data.json'



export default function App() {
	
	const today = new Date()
	today.getDay()

	const [userData, setUserData] = useState({
		labels: data.map(d=> d.day),
		datasets: [{
			data: data.map(a=> a.amount),
			backgroundColor: data.map((a, i)=> [ (i + 1) === today.getDay() ? "#76B5BC" : '#EC755D']),
			hoverBackgroundColor: data.map((a, i)=> [ (i + 1) === today.getDay() ? "#B4E0E5" : '#FF9B86']),
			borderRadius: 5,
		}],
	})

	return (
		<div className="h-screen flex justify-center items-start sm:items-center px-4 py-16 sm:px-0 sm:py-0 font-dmsans">
			<div className="flex flex-col w-full sm:w-[540px] h-[660px] min-w-[360px]">
				<header className="flex justify-between items-center bg-[#EC755D] px-8 py-7 mb-6 rounded-[20px]">
					<div className="flex flex-col text-[#FFFBF6]">
						<span className="font-normal text-base sm:text-lg mb-1">My balance</span>
						<span className="text-2xl sm:text-3xl font-bold">$921.48</span>
					</div>
					<div>
						<img src='img/circles.png' width="72" height="48" alt='circles'></img>
					</div>
				</header>
				<div className="bg-[#FFFBF6] px-10 py-8 rounded-[20px]">
					<main className="">
						<h1 className="text-2xl sm:text-3xl font-bold text-[#382314]">Spending - Last 7 days</h1>
						<div className="py-10 flex justify-between">
							<BarChart chartData={userData} data={data}/>
						</div>
					</main>
					<footer className="flex flex-col text-[#382314]">
						<span className="border border-t-1 w-full mb-8 border-[#F8E9DD]"></span>
						<div>
							<span className="font-normal text-base sm:text-lg text-[#92857A]">Total this month</span>
						</div>
						<div className="flex justify-between">
							<span className="font-bold text-3xl sm:text-5xl self-end">$478.33</span>
							<div className="flex flex-col text-right text-base sm:text-lg">
								<span className="font-bold">+2.4%</span>
								<span className="font-normal text-[#92857A]">from last month</span>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	)
}

