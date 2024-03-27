"use server";

import { redirect } from 'next/navigation'

export async function RedirectToFormPage(eventId : string){
         const link = "/" +eventId 
         redirect(link);
}