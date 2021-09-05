import styled from 'styled-components';

export const Container = styled.div`
  h1 {
      text-align: center;
  }


  main{
      margin-top: 4em;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;  
      align-items: center;
      justify-items: center;

      div {
          background-color: #efefef;
          height: 4em;
          width: 70%;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
      }
  }

  .img{
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        margin: auto;
      }
  }
`;
