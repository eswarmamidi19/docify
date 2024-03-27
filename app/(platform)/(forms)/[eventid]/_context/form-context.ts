import { Dispatch, SetStateAction, createContext } from "react";
import { string } from "zod";

type FormDataType  = {
      id: string;
      title: string;
      startDate: string;
      endDate: string;
      departmentName: string;
      authorId: string;
  } 


type Budget={
      id :number;
      reason : string;
      amount : number;
} 
type GuestFeedBackData = {
      OrganizingMembersInvolvement : string;		
      ProgrammeOrganisation	: string;
      ParticipantsInvolvement	:string	
      VenueArrangements:string;		
      Hospitality:string
}
 
  

type FormContextType = {
      eventId : string;
      setEventId : Dispatch<SetStateAction<string>>;
      coordinator : string;
      setCoordinator : Dispatch<SetStateAction<string>>;
      subject : string;
      setSubject :  Dispatch<SetStateAction<string>>;
      formData : FormDataType,
      setFormData : Dispatch<SetStateAction<FormDataType>>;
      budgetData : Budget[],
      setBudgetData : Dispatch<SetStateAction<Budget[]>>;
      guestFeedBackData : GuestFeedBackData;
      setGuestFeebBackData : Dispatch<SetStateAction<GuestFeedBackData>>;
}

export const FormContext = createContext<FormContextType | null>(null);


