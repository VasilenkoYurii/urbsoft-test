import { SearchInput } from "components/SearchInput/SearchInput";
import { MoreButton } from "components/MoreButton/MoreButton";

import {
  Section,
  Container,
  DescriptionContainer,
  SectionTitle,
  SectionDescription,
  MoreContainer,
} from "./Subscription.styled";

export const Subscription = () => {
  return (
    <Section>
      <Container>
        <DescriptionContainer>
          <SectionTitle>
            Хотите быть в курсе всех самых послених новик в мире бытовой
            технике?
          </SectionTitle>
          <SectionDescription>
            Уверяем Вас, никакого спама - только по делу
          </SectionDescription>
        </DescriptionContainer>
        <SearchInput placeholder="Введите Ваш email" icon="mail" />

        <MoreContainer>
          <MoreButton text="Подписаться" />
        </MoreContainer>
      </Container>
    </Section>
  );
};
