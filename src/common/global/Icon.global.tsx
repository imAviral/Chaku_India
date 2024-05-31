import Ant from 'react-native-vector-icons/AntDesign';

import Ent from 'react-native-vector-icons/Entypo';

import Evil from 'react-native-vector-icons/EvilIcons';

import Fea from 'react-native-vector-icons/Feather';

import Font from 'react-native-vector-icons/FontAwesome';

import Font5 from 'react-native-vector-icons/FontAwesome5';

import Font5Pro from 'react-native-vector-icons/FontAwesome5Pro';

import Font6 from 'react-native-vector-icons/FontAwesome6';

import Font6Pro from 'react-native-vector-icons/FontAwesome6Pro';

import Fonti from 'react-native-vector-icons/Fontisto';

import Foundation from 'react-native-vector-icons/Foundation';

import Ion from 'react-native-vector-icons/Ionicons';

import MatCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import MatIcon from 'react-native-vector-icons/MaterialIcons';

import OctIcon from 'react-native-vector-icons/Octicons';

import Simple from 'react-native-vector-icons/SimpleLineIcons';

import Zocial from 'react-native-vector-icons/Zocial';

const Icon = (props: any) => {
  return props?.fontFamily === 'AntDesign' ? (
    <Ant color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'Entypo' ? (
    <Ent color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'EvilIcons' ? (
    <Evil color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'Feather' ? (
    <Fea color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'FontAwesome' ? (
    <Font color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'FontAwesome5' ? (
    <Font5 color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'FontAwesome5Pro' ? (
    <Font5Pro color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'FontAwesome6' ? (
    <Font6 color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'FontAwesome6Pro' ? (
    <Font6Pro color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'Fontisto' ? (
    <Fonti color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'Foundation' ? (
    <Foundation color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'Ionicons' ? (
    <Ion color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'MaterialCommunityIcons' ? (
    <MatCommunityIcon
      color={props?.color}
      name={props?.name}
      size={props?.size}
    />
  ) : props?.fontFamily === 'MaterialIcons' ? (
    <MatIcon color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'Octicons' ? (
    <OctIcon color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'SimpleLineIcons' ? (
    <Simple color={props?.color} name={props?.name} size={props?.size} />
  ) : props?.fontFamily === 'Zocial' ? (
    <Zocial color={props?.color} name={props?.name} size={props?.size} />
  ) : null;
};

export default Icon;
