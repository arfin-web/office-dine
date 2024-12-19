import { NextResponse } from 'next/server';
import { purchasedItems } from '../checkout-session/route'; // Ensure this path is correct

export async function GET() {
    try {
        return NextResponse.json(purchasedItems);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch purchased items' }, { status: 500 });
    }
}