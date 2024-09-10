import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

const MyPageScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleModal = type => {
    setModalType(type);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setModalVisible(false);
    if (modalType === '로그아웃') {
      Alert.alert('로그아웃 되었습니다.');
    } else if (modalType === '회원탈퇴') {
      Alert.alert('회원탈퇴 되었습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>내 정보</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TravelRecords')}>
        <Text style={styles.buttonText}>내 여행기록</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Badges')}>
        <Text style={styles.buttonText}>내 뱃지</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Preferences')}>
        <Text style={styles.buttonText}>내 취향</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => handleModal('로그아웃')}>
        <Text style={styles.buttonText}>로그아웃</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteAccountButton}
        onPress={() => handleModal('회원탈퇴')}>
        <Text style={styles.buttonText}>회원탈퇴</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>정말 {modalType}하시겠습니까?</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={handleConfirm}
                style={styles.confirmButton}>
                <Text style={styles.modalButtonText}>확인</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelButton}>
                <Text style={styles.modalButtonText}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  logoutButton: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f00',
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteAccountButton: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f00',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row', //  버튼을 가로로 배치
    justifyContent: 'space-between',
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#f00',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MyPageScreen;
