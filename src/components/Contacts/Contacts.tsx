import sprite from "assets/images/sprite.svg";
import { SectionTitle } from "components/SectionTitle/SectionTitle";

import {
  ContactsContainer,
  ContactsBox,
  ContactsPrg,
  ContactBox,
  ContactLink,
  SocialLink,
  SocialBox,
  Map,
  Svg,
} from "./Contacts.styled";

/**
 * Компонент для секции контактов
 */
export const Contacts = () => {
  return (
    <ContactsContainer>
      <SectionTitle text="Мы всегда Вам рады" />

      <ContactsBox>
        <ContactBox>
          <ContactsPrg>Сязаться с нами:</ContactsPrg>

          <ContactLink href="tel:+380974663190">
            <Svg style={{ width: "15px", height: "15px" }}>
              <use href={`${sprite}#icon-phone`} />
            </Svg>
            +38 (097) 466 31 90
          </ContactLink>
        </ContactBox>
        <ContactBox>
          <ContactsPrg>Написать:</ContactsPrg>
          <ContactLink href="mailto:info@mir.electro.com">
            <Svg style={{ width: "15px", height: "13px" }}>
              <use href={`${sprite}#icon-mail`} />
            </Svg>
            info@mir.electro.com
          </ContactLink>
        </ContactBox>
        <ContactBox>
          <ContactsPrg>Всегда быть в курсе:</ContactsPrg>
          <SocialBox>
            <SocialLink href="https://www.facebook.com/">Facebook</SocialLink>
            <SocialLink href="https://www.instagram.com/">Instagram</SocialLink>
          </SocialBox>
        </ContactBox>
        <ContactBox>
          <ContactsPrg>Иди заходите в гости:</ContactsPrg>
          <ContactLink href="https://goo.gl/maps/zfCQzNLyKZHBQput9">
            <Svg style={{ width: "30px", height: "20px" }}>
              <use href={`${sprite}#icon-geo`} />
            </Svg>
            г. Днепр, ул. Глинки 2, ТРЦ “Мост-Сити”
          </ContactLink>
        </ContactBox>
      </ContactsBox>

      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.4549406636766!2d35.04952472489208!3d48.46698669804588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2c2c60241bd%3A0x999c964048051b3e!2z0JzQntCh0KItQ9C40YLQuA!5e0!3m2!1sru!2sua!4v1694089462921!5m2!1sru!2sua"
        width="262"
        height="218"
        style={{ borderRadius: "4px", border: 0 }}
        loading="lazy"
      ></Map>
    </ContactsContainer>
  );
};
