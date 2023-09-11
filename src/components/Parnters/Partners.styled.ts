import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  min-height: 260px;
  background-color: var(--white-bg-color);

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Container = styled.div`
  height: 100%;
  width: 1680px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 25px;
`;

export const SectionDescription = styled.p`
  color: var(--light-section-text);
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 939px;
  height: 100%;
  justify-content: center;
  padding-top: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  height: 70px;
  padding-left: 350px;
`;

export const UsersList = styled.ul`
  width: 100%;
  padding-top: 40px;
`;

export const UserItem = styled.li`
  display: flex;
  border-bottom: 1px solid rgba(104, 97, 91, 0.42);
  padding-left: 150px;
`;

export const UserInfo = styled.p`
  color: var(--main-text-color);
  font-family: "Sansation", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  width: 300px;
`;
