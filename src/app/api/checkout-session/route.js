import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15', // Match your Stripe version
});

// purchased items
export const purchasedItems = []

export async function POST(req) {
    try {
        const { items } = await req.json();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map((item) => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.image],
                    },
                    unit_amount: Math.round(item.price * 100), // Convert to cents
                },
                quantity: item.quantity || 1,
            })),
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/success`,
            cancel_url: `${req.headers.get('origin')}/cancel`,
        });
        purchasedItems.push(...items)
        return NextResponse.json({ id: session.id });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}