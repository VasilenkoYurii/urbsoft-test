import { SubscriptionInput } from "components/SubscriptionInput/SubscriptionInput";
import { SectionTitle } from "components/SectionTitle/SectionTitle";

import {
  Section,
  Container,
  DescriptionContainer,
  SectionDescription,
} from "./Subscription.styled";

/**
 * Секция подписки на рассылку по почте
 */

export const Subscription = () => {
  return (
    <Section>
      <Container>
        <DescriptionContainer>
          <SectionTitle
            text="Хотите быть в курсе всех самых послених новик в мире бытовой
            технике?"
          />

          <SectionDescription>
            Уверяем Вас, никакого спама - только по делу
          </SectionDescription>
        </DescriptionContainer>

        <SubscriptionInput
          placeholder="Введите Ваш email"
          textForButton="Подписаться"
        />
      </Container>
    </Section>
  );
};
