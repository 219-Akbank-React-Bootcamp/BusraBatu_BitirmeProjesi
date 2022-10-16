import styled from 'styled-components'

export const Styled = styled.div`
  min-width: 19rem;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 1px 1px 1px grey;

.list-top {
  display: flex;
  padding-bottom: 1rem;
}

.list-top-title {
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.list-top-more{
  cursor: pointer;
  position: relative;
}

.list-cards {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid grey;
  
}
.list-dropdown{
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.12);
  padding: 20px;
  width: 10rem!important;
  cursor: default;
}
.list-dropdown p {
  border-bottom: 1px solid #f8f8f8;
  cursor: pointer;
}

`
