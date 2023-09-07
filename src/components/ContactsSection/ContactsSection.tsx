import { QuestionForm } from "components/QuestionForm/QuestionForm";
import { Contacts } from "components/Contacts/Contacts";
import { Section, Container } from "./ContactsSection.styled";

export const ContactsSection = () => {
  return (
    <Section>
      <Container>
        <QuestionForm />
        <Contacts />
      </Container>
    </Section>
  );
};
