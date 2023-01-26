import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUESTION } from '../utils/mutations'
import styled from 'styled-components';

const QuestionForm = () => {
    const [addQuestion, { error }] = useMutation(ADD_QUESTION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = addQuestion();
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };
}


const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 30vw;
  justify-content: center;
  margin-top: 150px;
  background: rgba(255, 255, 255, 0.11);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 70vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 70vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

export default QuestionForm;

  // ORIGINAL CODE FOR ADDCOMMENT

  // export const AddComment = () => {
  //   return (
  //   <WidgetWrapper>
  //       <FlexBetween gap="1.5rem">
  //         <UserImage />
  //         <InputBase
  //           placeholder="Comment on this..."
  //           sx={{
  //             width: "100%",
  //             backgroundColor: 'white',
  //             borderRadius: "2rem",
  //             padding: "1rem 2rem",
  //           }}
  //         />
  //           <FlexBetween>
  //           <Button
  //               sx={{
  //               color: "white",
  //               backgroundColor: "blue",
  //               borderRadius: "3rem",
  //               }}
  //           >
  //               SEND
  //           </Button>
  //           </FlexBetween>
  //           </FlexBetween>

  //       <Divider sx={{ margin: "1.25rem 0" }} />
  
  //     </WidgetWrapper>
  //   );
  // };