import React from "react";
import { useNavigation } from "@react-navigation/native";
import {Viewazul, Viewbranco,Viewtopo,Viewbotao, Botaoopcao ,Opcaoimage,Textohome,Logoiesgo ,Textofisio,Botaoservico, Textobotao,Imagembotao,Textohomebranco,Imagemperfil} from './styles';

export default function Home() {
    const navigation = useNavigation();
    return(
        <Viewazul>
            <Viewtopo>
            <Botaoopcao onPress={( )=> navigation.openDrawer()}>
            <Opcaoimage source={require('./img/Opcao2.png')}/>
            </Botaoopcao>
            <Textohome>Olá, Paciente</Textohome>
            <Imagemperfil source={require('./img/Foto.png')} ></Imagemperfil>
            <Logoiesgo source={require('./img/Logo_iesgo.png')} />
            <Textofisio>Fisioterapia</Textofisio>
        

            </Viewtopo>
        <Viewbranco>
        <Textohomebranco>O que você precisa hoje? </Textohomebranco>
        <Viewbotao>
        <Botaoservico>
        <Imagembotao source ={require('./img/Calendar2.png')}/>
        <Textobotao>Solicitar Atendimento</Textobotao>
        </Botaoservico>

        <Botaoservico>
        <Imagembotao source={require('./img/Agendamento3.png')} />
        <Textobotao>Meus Agendamentos</Textobotao>
        </Botaoservico>

        <Botaoservico>
        <Imagembotao source={require('./img/Suporte2.png')} />
        <Textobotao>Suporte</Textobotao>
        </Botaoservico>

        <Botaoservico>
        <Imagembotao source={require('./img/Perfil2.png')} />
        <Textobotao>Meu Perfil</Textobotao>
        </Botaoservico>

        </Viewbotao>



        </Viewbranco>
        </Viewazul>





    );



}

