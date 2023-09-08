import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

import { selectUsers, selectIsLoading } from "redux/selectors";
import { getAllUsers } from "redux/operations";

import { SectionTitle } from "components/SectionTitle/SectionTitle";
import { MoreButton } from "components/MoreButton/MoreButton";

import {
  Section,
  Container,
  SectionDescription,
  TitleContainer,
  UsersContainer,
  ButtonContainer,
  UsersList,
  UserItem,
  UserInfo,
} from "./Partners.styled";

export const Parnters = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);

  const hendleLog = () => {
    dispatch(getAllUsers());
  };

  return (
    <Section>
      <Container>
        <TitleContainer>
          <SectionTitle text="Ознакомьтесь с нашими партнёрами" />
          <SectionDescription>
            Ваше доверие для нас много значит!
          </SectionDescription>
        </TitleContainer>

        <UsersContainer>
          <ButtonContainer>
            <MoreButton text="Запросить список" fun={hendleLog} />

            {isLoading && (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#98887A"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
              />
            )}
          </ButtonContainer>

          {users.length !== 0 && (
            <UsersList>
              {users.map((user) => {
                return (
                  <UserItem key={user._id}>
                    <UserInfo>{user.name}</UserInfo>
                    <UserInfo>{user.email}</UserInfo>
                  </UserItem>
                );
              })}
            </UsersList>
          )}
        </UsersContainer>
      </Container>
    </Section>
  );
};
