"use client";

import { useEffect, useState } from "react";

const BookingHistory = () => {
    const [purchasedItems, setPurchasedItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPurchasedItems = async () => {
            try {
                const response = await fetch("/api/purchased-items");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPurchasedItems(data);
            } catch (error) {
                console.error("Error fetching purchased items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPurchasedItems();
    }, []);

    return (
        <div className="container mx-auto px-4 lg:px-10 mt-8 mb-16">
            <h1 className="text-2xl lg:text-3xl font-bold mb-6">
                Purchased<span className="text-primary"> Items</span>
            </h1>

            {/* Loading and no items */}
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin border-t-4 border-primary rounded-full w-12 h-12 border-solid"></div>
                    <p className="ml-4 text-gray-500">Loading purchased items...</p>
                </div>
            ) : purchasedItems.length === 0 ? (
                <p className="text-gray-500">No items purchased yet.</p>
            ) : (
                // Display purchased items in a table
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="table-auto w-full text-left border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-primary text-sm lg:text-base px-4 py-3">Item</th>
                                <th className="text-primary text-sm lg:text-base px-4 py-3">Price</th>
                                <th className="text-primary text-sm lg:text-base px-4 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchasedItems.map((item, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 border-b last:border-b-0"
                                >
                                    <td className="px-4 py-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-700">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-700">
                                        {item.price}
                                    </td>
                                    <td className="px-4 py-3 text-gray-500">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BookingHistory;