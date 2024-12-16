"use client"

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import bookedItems from "@/data/bookedItems" // Import the items array

const BookingChart = () => {
    // Extract month from the date and count occurrences
    const monthCounts = bookedItems.reduce((acc: any, item) => {
        const month = new Date(item.date).toLocaleString("en-US", { month: "long" });
        acc[month] = (acc[month] || 0) + 1;
        return acc;
    }, {});

    // Format data for the pie chart
    const chartData = Object.keys(monthCounts).map((month) => ({
        name: month,
        value: monthCounts[month],
    }));

    // Define colors for the chart
    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#d45087"];

    return (
        <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BookingChart;