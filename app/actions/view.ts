'use server';

import { writeClient } from '@/sanity/lib/write-client';
import { revalidatePath } from 'next/cache';

export async function incrementViews(id: string, currentViews: number) {
  try {
    await writeClient
      .patch(id)
      .set({ views: currentViews + 1 })
      .commit();
    
    revalidatePath('/');
  } catch (error) {
    console.error('Error updating view count:', error);
  }
} 