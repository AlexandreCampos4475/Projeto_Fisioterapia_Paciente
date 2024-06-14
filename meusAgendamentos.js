import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export default function MeusAgendamentos() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedAppointment(null);
  };

  const renderAppointment = ({ item }) => (
    <AppointmentCard>
      <CardContent>
        <Text>Fisioterapeuta</Text>
        <Text>{item.therapist}</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Data Da Consulta</Text>
        <Text>{item.date}</Text>
      </CardContent>
      <CardActions locked={item.locked}>
        <CardButton onPress={() => !item.locked && openModal(item)}>
          <CardButtonIcon
            source={
              item.locked
                ? require('./img/logo_cadeado.png')  // Ícone para "locked"
                : require('./img/logo_acesso.png')  // Ícone para "edit"
            }
          />
        </CardButton>
      </CardActions>
    </AppointmentCard>
  );

  return (
    <Container>
      <Header>
        <HeaderText>Meus Agendamentos</HeaderText>
      </Header>
      <FlatList
        data={[
          { id: '1', therapist: 'Junio da fisio', date: '00/00/00', locked: true },
          { id: '2', therapist: 'Junio da fisio', date: '00/00/00', locked: false },
          { id: '3', therapist: 'Junio da fisio', date: '00/00/00', locked: false },
          { id: '4', therapist: 'Junio da fisio', date: '00/00/00', locked: true },
          { id: '5', therapist: 'Junio da fisio', date: '00/00/00', locked: true },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointment}
      />
      {selectedAppointment && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <ModalContainer>
            <ModalContent>
              {selectedAppointment.locked ? (
                <ModalButton>
                  <ModalButtonText>Cancelar Agendamento</ModalButtonText>
                </ModalButton>
              ) : (
                <>
                  <ModalButton onPress={() => navigation.navigate('VisualizarRelatorio')}>
                    <ModalButtonText>Visualizar Relatório</ModalButtonText>
                  </ModalButton>
                  <ModalButton onPress={() => navigation.navigate('CancelarAgendamento')}>
                    <ModalButtonText>Cancelar Agendamento</ModalButtonText>
                  </ModalButton>
                </>
              )}
              <CloseButton onPress={closeModal}>
                <CloseButtonText>Fechar</CloseButtonText>
              </CloseButton>
            </ModalContent>
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Header = styled.View`
  background-color: #001f7f;
  padding: 20px;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const AppointmentCard = styled.View`
  flex-direction: row;
  background-color: #f9f9f9;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  elevation: 2;
`;

const CardContent = styled.View`
  flex: 1;
  padding: 20px;
`;

const CardActions = styled.View`
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.locked ? '#FF0000' : '#0000FF'};
`;

const CardButton = styled(TouchableOpacity)`
  padding: 10px;
  margin: 5px;
`;

const CardButtonIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  elevation: 10;
`;

const ModalButton = styled(TouchableOpacity)`
  background-color: #001f7f;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
`;

const ModalButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const CloseButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  background-color: grey;
`;

const CloseButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
