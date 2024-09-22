const {getDefaultConfig} = require('@react-native/metro-config'); // getDefaultConfig 불러오기

const defaultConfig = getDefaultConfig(__dirname); // 기본 설정 불러오기
const {assetExts, sourceExts} = defaultConfig.resolver; // assetExts 및 sourceExts 추출

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'), // SVG 파일 변환을 위한 transformer 설정
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'), // asset 확장자에서 .svg 제거
    sourceExts: [...sourceExts, 'svg'], // source 확장자에 .svg 추가
  },
};
