import { QuestionForm } from "components/QuestionForm/QuestionForm";
import { Contacts } from "components/Contacts/Contacts";
import { Section, Container } from "./ContactsSection.styled";

/**
 * Секция формы и контактов
 */
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
