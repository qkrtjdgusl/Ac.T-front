const colors = {
  BLUE_MAIN: '#2D7ECA', //앱 메인 컬러
  BLUE_MARKER: '#40E3E8', //기본 마커 색상에 사용
  BLUE_BEFORE_PRESSED: '#D6EAFD', //Pressed 배경 색상에 사용
  BLUE_PRESSED: '#639ACE', //Pressed 버튼 상태에 사용
  BLUE_INPUT_ERROR: '#C1E1FF', //인풋 border 에러 상태에 사용
  RED_INPUT_ERROR: '#FF5F5F', //인풋 에러 메세지/ 옵션 버튼 텍스트
  BLUE_BUTTON: '#0D8AFF', //옵션 버튼 텍스트/아이콘

  WHITE: '#FFFFFF', //흰색, 기본 페이지에 사용
  GRAY_100: '#F8F8F8', //옵션 버튼 색상
  GRAY_200: '#E3E3E3', //기본 인풋 border 상태, 인풋 disabled 배경에 사용  + 광고 배너 배경
  GRAY_300: '#D8D8D8', //옵션 버튼 border, pressed 상태에 사용
  GRAY_500: '#8E8E8E', //placeholder 및 마커 border에 사용
  GRAY_700: '#575757', //inactive 텍스트 상태에 사용   + 광고 배너 텍스트
  BLACK: '#161616', //기본 텍스트 색상
} as const;

export {colors};
