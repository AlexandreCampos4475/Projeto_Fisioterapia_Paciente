import React from "react";
import { useNavigation } from "@react-navigation/native";
import {Viewazul, Viewbranco,Viewtopo,Viewbotao, Botaoopcao ,Opcaoimage,Textohome,Logoiesgo ,Textofisio,Botaoservico, Textobotao,Imagembotao,} from './styles';

export default function Home() {
    const navigation = useNavigation();
    return(
        <Viewazul>
            <Viewtopo>
            <Botaoopcao>
            <Opcaoimage />
            <Textohome>Olá,Paciente</Textohome>
            <Logoiesgo source={require('./img/Logo_iesgo.png')} />
            <Textofisio>Fisioterapia</Textofisio>
            </Botaoopcao>

            </Viewtopo>
        <Viewbranco>
        <Textohome>O que você precisa hoje? </Textohome>
        <Viewbotao>
        <Botaoservico>
        <Imagembotao/>
        <Textobotao>Solicitar Atendimento</Textobotao>
        </Botaoservico>

        <Botaoservico>
        <Imagembotao source={require('./img/Agendamento.png')} />
        <Textobotao>Meus Agendamentos</Textobotao>
        </Botaoservico>

        <Botaoservico>
        <Imagembotao source={require('./img/Suporte.png')} />
        <Textobotao>Suporte</Textobotao>
        </Botaoservico>

        <Botaoservico>
        <Imagembotao source={require('./img/Perfil.png')} />
        <Textobotao>Meu Perfil</Textobotao>
        </Botaoservico>

        </Viewbotao>



        </Viewbranco>
        </Viewazul>





    );



}

