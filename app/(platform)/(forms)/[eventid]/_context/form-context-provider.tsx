"use client";

type formContextProviderType = {
  children: React.ReactNode;
};

type FormDataType = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  departmentName: string;
  authorId: string;
};

type Budget = {
  id:number
  reason: string;
  amount: number;
};

import { useState } from "react";
import { FormContext } from "./form-context";

export function FormContextProvider({ children }: formContextProviderType) {
  const [eventId, setEventId] = useState<string>("");
  const [coordinator, setCoordinator] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [formData, setFormData] = useState<FormDataType>({
    id: "",
    title: "",
    startDate: "",
    endDate: "",
    departmentName: "",
    authorId: "",
  });

  type GuestFeedBackData = {
    OrganizingMembersInvolvement : string;		
    ProgrammeOrganisation	: string;
    ParticipantsInvolvement	:string	
    VenueArrangements:string;		
    Hospitality:string
}

  const [budgetData, setBudgetData] = useState<Budget[]>([]);
  const [guestFeedBackData , setGuestFeebBackData] = useState<GuestFeedBackData>(
    {
      OrganizingMembersInvolvement : "",		
      ProgrammeOrganisation	: "",
      ParticipantsInvolvement	:"",	
      VenueArrangements: "",		
      Hospitality:"",
    }
  );
  return (
    <FormContext.Provider
      value={{
        eventId,
        setEventId,
        coordinator,
        setCoordinator,
        subject,
        setSubject,
        formData,
        setFormData,
        budgetData,
        setBudgetData,
        guestFeedBackData,
        setGuestFeebBackData
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
