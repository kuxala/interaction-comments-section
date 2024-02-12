import { useState } from "react";
import styled from "styled-components";

const ComponentDiv = styled.div`
  border-radius: 8px;
  background: var(--White, #fff);
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 32px;
  font-family: "Rubik", sans-serif;
  padding: 16px;

  @media (min-width: 868px) {
    min-height: 167px;
    max-width: 800px;
  }
`;
const ReplyDiv = styled.div`
  border-radius: 8px;
  background: var(--White, #fff);
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 32px;
  font-family: "Rubik", sans-serif;
  padding: 16px;
  @media (min-width: 868px) {
    /* flex-direction: row; */
    min-height: 167px;
    max-width: 800px;
  }
`;
const Button = styled.button`
  width: 104px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Moderate-Blue, #5357b6);
  color: var(--White, #fff);
  font-feature-settings: "clig" off, "liga" off;
  border: 0px;
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
const FirstDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const FirstDivP = styled.p`
  color: var(--Dark-Blue, black);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;
const FirstDivSpan = styled.span`
  color: var(--Grayish-Blue, #67727e);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
const SecondDiv = styled.div`
  display: flex;
`;
const SecondDivP = styled.p`
  padding-top: 16px;
  padding-bottom: 16px;
  color: var(--Grayish-Blue, #67727e);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
const ThirdDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ThirdDivCounter = styled.div`
  width: 100px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--Very-Light-Gray, #f5f6fa);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--Moderate-Blue, #5357b6);
  text-align: center;
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ThirdDivP = styled.p`
  color: var(--Moderate-Blue, #4a4fd3);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 24px; /* 150% */
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Delete = styled.div`
  color: red;
`;

const Costums = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 10px;
  @media (min-width: 768px) {
    display: flex;
    gap: 10px;
    padding-left: 69%;
  }
`;
const EditDiv = styled.div`
  border-radius: 8px;
  background: var(--White, #fff);
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 32px;
  font-family: "Rubik", sans-serif;
  padding: 16px;
  @media (min-width: 868px) {
    /* flex-direction: row; */
    min-height: 167px;
    max-width: 800px;
  }
`;
const BlackP = styled.p`
  color: black;
`;
interface Props {
  name: string;
  time: string;
  text: string;
  img: string;
}

function Component({ name, time, text, img }: Props) {
  const [like, setLike] = useState<boolean>(false);
  const [mineLike, setMineLike] = useState<boolean>(false);
  const [reply, setReply] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);
  const [message, setMessage] = useState<string[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      setReply(false);
      setSend(true);
    }
  };

  return (
    <>
      <ComponentDiv>
        <FirstDiv>
          <img src={img} width="32px" height="32px" />
          <FirstDivP>{name}</FirstDivP>
          <FirstDivSpan>{time}</FirstDivSpan>
        </FirstDiv>

        <SecondDiv>
          <SecondDivP>{text}</SecondDivP>
        </SecondDiv>

        <ThirdDiv>
          <ThirdDivCounter
            onClick={() => {
              setLike(!like);
            }}
          >
            {like ? (
              <img src="../assets/like-black.png" width="30px" />
            ) : (
              <img src="../assets/like.png" width="16px" />
            )}
            {like ? <p>Like</p> : <BlackP>Like</BlackP>}
          </ThirdDivCounter>

          <ThirdDivP
            onClick={() => {
              setReply(!reply);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
            >
              <path
                d="M0.227189 4.31583L5.0398 0.159982C5.46106 -0.203822 6.125 0.0915222 6.125 0.656646V2.8456C10.5172 2.89589 14 3.77618 14 7.93861C14 9.61864 12.9177 11.283 11.7214 12.1532C11.348 12.4247 10.816 12.0839 10.9536 11.6437C12.1935 7.67857 10.3655 6.62588 6.125 6.56484V8.96878C6.125 9.5348 5.46056 9.82883 5.0398 9.46545L0.227189 5.30918C-0.0755195 5.04772 -0.0759395 4.57766 0.227189 4.31583Z"
                fill="#5357B6"
              />
            </svg>
            Reply
          </ThirdDivP>
        </ThirdDiv>
      </ComponentDiv>

      {send && message && (
        <ComponentDiv>
          <FirstDiv>
            <img
              src="\assets\avatars\image-juliusomo.webp"
              width="32px"
              height="32px"
            />
            <FirstDivP>Juliusomo</FirstDivP>
            <FirstDivSpan>Now</FirstDivSpan>

            <Costums>
              <Delete
                onClick={() => {
                  setMessage([""]);
                  setSend(false);
                  setEdit(false);
                }}
              >
                Delete
              </Delete>
            </Costums>
          </FirstDiv>

          <SecondDiv>
            <SecondDivP>{message}</SecondDivP>
          </SecondDiv>

          <ThirdDiv>
            <ThirdDivCounter
              onClick={() => {
                setMineLike(!mineLike);
              }}
            >
              {mineLike ? (
                <img src="../assets/like-black.png" width="30px" />
              ) : (
                <img src="../assets/like.png" width="16px" />
              )}
              {mineLike ? <p>Like</p> : <BlackP>Like</BlackP>}
            </ThirdDivCounter>
            <ThirdDivP
              onClick={() => {
                setEdit(!edit);
              }}
            >
              Edit
            </ThirdDivP>
          </ThirdDiv>
        </ComponentDiv>
      )}

      {edit && (
        <EditDiv>
          <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            value={message}
            style={{
              paddingBottom: "50px",
              paddingLeft: "20px",
              fontSize: "16px",
              textAlign: "left",
              borderRadius: "10px",
              border: "1px solid gray",
              height: "100px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "16px",
            }}
          >
            <Button
              onClick={() => {
                setSend(true);
                setEdit(false);
              }}
            >
              Edit
            </Button>
          </div>
        </EditDiv>
      )}
      {reply ? (
        <ReplyDiv>
          <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Add a comment..."
            style={{
              paddingBottom: "50px",
              paddingLeft: "20px",
              fontSize: "16px",
              textAlign: "left",
              borderRadius: "10px",
              border: "1px solid gray",
              height: "100px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "16px",
            }}
          >
            <img
              src="\assets\avatars\image-juliusomo.webp"
              width="38px"
              height="38px"
            />
            <Button
              onClick={() => {
                setSend(true);
                setReply(false);
              }}
            >
              Send
            </Button>
          </div>
        </ReplyDiv>
      ) : null}
    </>
  );
}

export default Component;
