"use client"

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const StatsChart = ({ stats }: any) => {
    // Format the data for the chart
    const chartData = stats.map((stat: any) => ({
        title: stat.title,
        value: parseInt(stat.value.replace(/[^\d]/g, "")), // Extract numeric value
    }));

    return (
        <div style={{ width: "100%", height: 400, margin: "auto" }}>
            <ResponsiveContainer>
                <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip formatter={(value, name, props) => [`${value}${props.payload.title.includes("Profit") ? " $" : ""}`, "Value"]} />
                    <Bar dataKey="value" fill="#8884d8" barSize={50} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

const stats = [
    {
        id: 1,
        title: "Total Items You Bought",
        value: "20+",
        timeRange: "Jan 1st - Feb 1st"
    },
    {
        id: 2,
        title: "Your Total Spend",
        value: "$ 300",
        timeRange: "Jan 1st - Feb 1st"
    },
    {
        id: 3,
        title: "Total Reviews You have Given",
        value: "10+",
        timeRange: "Jan 1st - Feb 1st"
    },
]

export default function UserStatsChart() {
    return <StatsChart stats={stats} />;
}