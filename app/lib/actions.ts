'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { GAME_START_FEN } from './chessUtils';


// const userId = fetchUserId();
const userId = '410544b2-4001-4271-9855-fec4b6a6442a';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

const CreateGameInput = z.object({
    botId: z.string(),
    timeControl: z.string(),
    selectedColor: z.enum(['white', 'black']),
});

export async function createGame(formData: FormData) {
    const { botId, timeControl, selectedColor } = CreateGameInput.parse({
        botId: formData.get('botId'),
        timeControl: formData.get('timeControl'),
        selectedColor: formData.get('selectedColor'), // Ensure this matches the form's field name
    });

    // Determine player IDs based on selected color
    const whitePlayerId = selectedColor === 'white' ? userId : botId;
    const blackPlayerId = selectedColor === 'black' ? userId : botId;

    // Initial move history setup
    const initialMoveHistory = JSON.stringify({ "moves": [] });

    // Current date and time for created_at and updated_at fields
    const dateNow = new Date();

    // Insert the new game record into the database
    await sql`
        INSERT INTO games (white_player_id, black_player_id, move_history, created_at, updated_at, status, fen)
        VALUES (${whitePlayerId}, ${blackPlayerId}, ${initialMoveHistory}, ${dateNow.toISOString()}, ${dateNow.toISOString()}, 'underway', ${GAME_START_FEN})
    `;

    revalidatePath('/dashboard/invoices');
    // redirect('/dashboard/invoices');
}