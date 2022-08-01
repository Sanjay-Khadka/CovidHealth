import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NavigationHeader from '../../components/NavigationHeader';
import CustomButton from '../../components/Button';
import {getUserList, deleteUser} from '../../redux/actions/manageuser';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

const UsersPanel = () => {
  const userToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJkOTNlMDg2OWU3ZDY4OTBjYTNmMzAiLCJpYXQiOjE2NTkzNTMyMTF9.ua__5l-HNurOjNIW1QZbxhg8Ioes9x5BATN0X-cVrrs';
  const data = useSelector(state => state.manageUserReducer.Users);
  // console.log('userdata: ', data);
  const dispatch = useDispatch();

  const fetchUsers = () => {
    dispatch(getUserList());
  };
  const removeUser = (details_id, userToken) => {
    dispatch(deleteUser(details_id, userToken));
  };
  return (
    <View style={styles.maincontainer}>
      <NavigationHeader Title="Users Panel" />

      <ScrollView style={styles.userscroll}>
        {data.map(details => (
          <View style={styles.userdetailsbox}>
            <View style={{display: 'flex', flex: 5}}>
              <Text style={styles.userdetailstext}>userId: {details._id}</Text>
              <Text style={styles.userdetailstext}>
                Full Name: {details.fullname}
              </Text>
              <Text style={styles.userdetailstext}>Email: {details.email}</Text>
            </View>

            <TouchableOpacity
              style={styles.deletebutton}
              onPress={() => removeUser(details._id, userToken)}>
              <Icon color={'#c1121f'} name="trash" size={30} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <CustomButton labelText="fetch users " handleOnPress={fetchUsers} />
    </View>
  );
};

export default UsersPanel;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 3,
    alignItems: 'center',
  },
  userscroll: {
    backgroundColor: 'white',
    maxHeight: height / 1.5,
  },
  userdetailsbox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: height / 8,
    width: width - 14,
    display: 'flex',
    padding: 10,
    margin: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  userdetailstext: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },
  deletebutton: {
    // backgroundColor: 'red',
    // padding: 10,
    margin: 5,
    // height: height,
    flex: 2,
    display: 'flex',
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
