import Header from "../../components/Header";
import { useAuth } from "../../providers/AuthContext";

import profile from "../../assets/profile.png";

import {
  Container,
  Section,
  ContactHeader,
  ContactSession,
  TechButton,
  WorkButton,
  ProfileBadge,
} from "./styles";

import { FiMail, FiPlus, FiSmartphone } from "react-icons/fi";

import Button from "../../components/Button";
import Card from "../../components/Card";
import { useState } from "react";
import ModalCreateTech from "../../components/ModalCreateTech";

const Dashboard = () => {
  const [techModal, setTechModal] = useState(false);
  const { signOut, user } = useAuth();

  const handleTechModal = () => {
    setTechModal(!techModal);
  };

  return (
    <>
      <Header />
      <ModalCreateTech isOpen={techModal} setIsOpen={handleTechModal} />
      <Container>
        <Section>
          <div>
            <h3>Minhas tecnologias</h3>
            <TechButton onClick={() => setTechModal(true)}>
              <FiPlus />
            </TechButton>
          </div>
          {user.techs.map((tech) => (
            <Card
              key={tech.id}
              description={""}
              greenSchema
              title={tech.title}
              onClick={() => {}}
            />
          ))}
        </Section>
        <Section>
          <div>
            <h3>Meus trabalhos</h3>
            <WorkButton>
              <FiPlus />
            </WorkButton>
          </div>
          {user.works.map((tech) => (
            <Card
              key={tech.id}
              description={""}
              greenSchema
              title={tech.title}
              onClick={() => {}}
            />
          ))}
        </Section>
        <ContactSession>
          <ContactHeader>
            <img src={profile} alt="Foto de perfil" />
            <section>
              <h3>{user.name}</h3>
              <em>{user.course_module} </em>
            </section>
          </ContactHeader>
          <div>
            <ProfileBadge blueSchema>
              <div>
                <FiSmartphone />
              </div>
              <section>
                <h3>Ligar agora</h3>
                <span>{user.contact}</span>
              </section>
            </ProfileBadge>
            <ProfileBadge>
              <div>
                <FiMail />
              </div>
              <section>
                <h3>Enviar email</h3>
                <span>{user.contact}</span>
              </section>
            </ProfileBadge>
            <Button onClick={signOut} primaryColor={false}>
              Sair
            </Button>
          </div>
        </ContactSession>
      </Container>
    </>
  );
};

export default Dashboard;
