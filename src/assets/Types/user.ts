export interface UserData {
  id?: number;
  name: string;
  email: string;
  telephone: string;
  consultant: boolean;
  announcedProperties: number[];
  bookmarkedProperties: number[];
  subscriptionType: string;
}
