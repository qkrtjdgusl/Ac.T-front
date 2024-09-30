export type HomeStackParamList = {
  HomeScreen: undefined;
  Activity: undefined;
  Post: undefined;
  Mate: undefined;
  Store: undefined;
  Event: undefined;
  Plus: undefined;
  Search: undefined;
  Detail: {
    placeName: string;
    placeType: string;
    imageUrl: string;
  };
  AIDetail: undefined;
  AccommodationDetail: undefined; // 오류 해결을 위해 추가
};
