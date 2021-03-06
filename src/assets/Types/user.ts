export interface UserData {
  id?: number;
  password?: string;
  name: string;
  email: string;
  telephone: string;
  consultant: boolean;
  announcedProperties: number[];
  bookmarkedProperties: number[];
  subscriptionType: string;
  markedDates: string[];
}
