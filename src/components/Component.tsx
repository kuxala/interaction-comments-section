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
    /* flex-direction: row; */
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
// const Edit = styled.div`
//   color: var(--Light-Grayish-Blue, #c5c6ef);
//   font-feature-settings: "clig" off, "liga" off;
// `;
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
interface Props {
  name: string;
  time: string;
  text: string;
  img: string;
}

function Component({ name, time, text, img }: Props) {
  const [count, setCount] = useState<number>(0);
  const [reply, setReply] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);
  const [message, setMessage] = useState<string[]>([]);

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
          <ThirdDivCounter>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <path
                d="M6.33036 10.896C6.46692 10.896 6.58486 10.8463 6.68418 10.747C6.7835 10.6477 6.83316 10.5298 6.83316 10.3932V7.004H10.1479C10.2844 7.004 10.4024 6.95434 10.5017 6.85503C10.601 6.75571 10.6507 6.63777 10.6507 6.50121V5.27216C10.6507 5.1356 10.601 5.01766 10.5017 4.91834C10.4024 4.81903 10.2844 4.76937 10.1479 4.76937H6.83316V1.39879C6.83316 1.26223 6.7835 1.14429 6.68418 1.04497C6.58486 0.945655 6.46692 0.895996 6.33036 0.895996H4.91509C4.77853 0.895996 4.66059 0.945655 4.56127 1.04497C4.46196 1.14429 4.4123 1.26223 4.4123 1.39879V4.76937H1.07897C0.942404 4.76937 0.824465 4.81903 0.725148 4.91834C0.62583 5.01766 0.576172 5.1356 0.576172 5.27216V6.50121C0.576172 6.63777 0.62583 6.75571 0.725148 6.85503C0.824465 6.95434 0.942404 7.004 1.07897 7.004H4.4123V10.3932C4.4123 10.5298 4.46196 10.6477 4.56127 10.747C4.66059 10.8463 4.77853 10.896 4.91509 10.896H6.33036Z"
                fill="#C5C6EF"
              />
            </svg>
            {count}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="3"
              viewBox="0 0 10 3"
              fill="none"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <path
                d="M9.24791 2.5C9.45218 2.5 9.6286 2.44444 9.77716 2.33333C9.92572 2.22222 10 2.09028 10 1.9375V0.5625C10 0.409722 9.92572 0.277778 9.77716 0.166667C9.6286 0.0555556 9.45218 0 9.24791 0H0.752089C0.547818 0 0.371402 0.0555556 0.222841 0.166667C0.0742804 0.277778 0 0.409722 0 0.5625V1.9375C0 2.09028 0.0742804 2.22222 0.222841 2.33333C0.371402 2.44444 0.547818 2.5 0.752089 2.5H9.24791Z"
                fill="#C5C6EF"
              />
            </svg>
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
                }}
              >
                Delete
              </Delete>
              {/* <Edit
                onClick={() => {
                  setReply(!reply);

                  message;
                }}
              >
                Edit
              </Edit> */}
            </Costums>
          </FirstDiv>

          <SecondDiv>
            <SecondDivP>{message}</SecondDivP>
          </SecondDiv>

          <ThirdDiv>
            <ThirdDivCounter>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <path
                  d="M6.33036 10.896C6.46692 10.896 6.58486 10.8463 6.68418 10.747C6.7835 10.6477 6.83316 10.5298 6.83316 10.3932V7.004H10.1479C10.2844 7.004 10.4024 6.95434 10.5017 6.85503C10.601 6.75571 10.6507 6.63777 10.6507 6.50121V5.27216C10.6507 5.1356 10.601 5.01766 10.5017 4.91834C10.4024 4.81903 10.2844 4.76937 10.1479 4.76937H6.83316V1.39879C6.83316 1.26223 6.7835 1.14429 6.68418 1.04497C6.58486 0.945655 6.46692 0.895996 6.33036 0.895996H4.91509C4.77853 0.895996 4.66059 0.945655 4.56127 1.04497C4.46196 1.14429 4.4123 1.26223 4.4123 1.39879V4.76937H1.07897C0.942404 4.76937 0.824465 4.81903 0.725148 4.91834C0.62583 5.01766 0.576172 5.1356 0.576172 5.27216V6.50121C0.576172 6.63777 0.62583 6.75571 0.725148 6.85503C0.824465 6.95434 0.942404 7.004 1.07897 7.004H4.4123V10.3932C4.4123 10.5298 4.46196 10.6477 4.56127 10.747C4.66059 10.8463 4.77853 10.896 4.91509 10.896H6.33036Z"
                  fill="#C5C6EF"
                />
              </svg>
              {count}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="3"
                viewBox="0 0 10 3"
                fill="none"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                <path
                  d="M9.24791 2.5C9.45218 2.5 9.6286 2.44444 9.77716 2.33333C9.92572 2.22222 10 2.09028 10 1.9375V0.5625C10 0.409722 9.92572 0.277778 9.77716 0.166667C9.6286 0.0555556 9.45218 0 9.24791 0H0.752089C0.547818 0 0.371402 0.0555556 0.222841 0.166667C0.0742804 0.277778 0 0.409722 0 0.5625V1.9375C0 2.09028 0.0742804 2.22222 0.222841 2.33333C0.371402 2.44444 0.547818 2.5 0.752089 2.5H9.24791Z"
                  fill="#C5C6EF"
                />
              </svg>
            </ThirdDivCounter>
            <ThirdDivP
              onClick={() => {
                setReply(!reply);
              }}
            >
              Edit
            </ThirdDivP>
          </ThirdDiv>
        </ComponentDiv>
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
