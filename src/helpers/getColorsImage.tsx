import ImageColors from 'react-native-image-colors';

export const getColorsImage = async (uri: string) => {
  const result = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: true,
  });
  let primary;
  let secondary;
  switch (result.platform) {
    case 'android':
      // android result properties
      primary = result.dominant;
      secondary = result.average;
      break;
    default:
      throw new Error('Unexpected platform key');
  }
  return {primary, secondary};
};
