export type Game = {
  Name: string;
  Description: string;
  ImageLink: string;
  ImageSource: string;
  BuyLink: string;
  CrossplayEnabled: boolean;
  onClose$?: () => void;
};
