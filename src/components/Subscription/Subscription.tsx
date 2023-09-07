import { SearchInput } from "components/SearchInput/SearchInput";
import { MoreButton } from "components/MoreButton/MoreButton";
import { SectionTitle } from "components/SectionTitle/SectionTitle";

import {
  Section,
  Container,
  DescriptionContainer,
  SectionDescription,
  MoreContainer,
} from "./Subscription.styled";

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
        <SearchInput placeholder="Введите Ваш email" icon="mail" />

        <MoreContainer>
          <MoreButton text="Подписаться" />
        </MoreContainer>
      </Container>
    </Section>
  );
};
