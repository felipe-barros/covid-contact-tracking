import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    backgroundColor: '#dc143c',
    borderRadius: 10,
    shadowColor: '#85011b',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
  },
});
