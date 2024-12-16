"use client"

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import foodItems from "@/data/foodItems"; // Import the foodItems array

const FoodItemsChart = () => {
    // Count the number of items per category
    const categoryCounts = foodItems.reduce((acc: any, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
    }, {});

    // Format data for the pie chart
    const chartData = Object.keys(categoryCounts).map((category) => ({
        name: category,
        value: categoryCounts[category],
    }));

    // Define colors for the chart
    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#d45087", "#4caf50"];

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

export default FoodItemsChart;