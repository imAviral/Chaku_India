module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // assets folder
          '@font': './src/assets/font',
          '@img': './src/assets/images',
          '@svg': './src/assets/svg',
          '@video': './src/assets/video',
          // common folder
          '@constant': './src/common/constant',
          '@db': './src/common/dataBase',
          '@global': './src/common/global',
          '@hook': './src/common/hooks',
          '@interface': './src/common/interface',
          '@mock': './src/common/mockDB',
          // design folder (v1)
          '@component': './src/design/v1/components',
          '@screen': './src/design/v1/screens',
          // setup folder
          '@config': './src/setup/config',
          '@service': './src/setup/services',
        },
      },
    ],
  ],
};
