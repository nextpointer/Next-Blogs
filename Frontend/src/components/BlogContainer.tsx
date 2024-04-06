import styled from "styled-components";
interface Prop {
  date: string;
  author: string;
  Heading: string;
  image: string;
}

export const BlogContainer = (props: Prop) => {
  const { date, author, Heading, image } = props;
    console.log(image);
  return (
    <>
      <BlogConatainer>
        <BloContainerDate>
          <p>{date}</p>
          <p>{author}</p>
        </BloContainerDate>
        <BlogPic>
          <img src={image}/>
        </BlogPic>
        <BlogHeading>
          <p>{Heading}</p>
        </BlogHeading>
      </BlogConatainer>
    </>
  );
};

const BlogConatainer = styled.div`
  height: 350px;
  width: 300px;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  color: #fff;
  border: 1px solid #4f4f4f;
`;

const BloContainerDate = styled.div`
  height: 50px;
  width: 100%;
  /* background-color: bisque; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const BlogPic = styled.div`
  height: 250px;
  width: 100%;
  /* background-color: #8c5715; */
  object-fit: contain;
  img{
    min-height: 250px;
    max-width: 100%;
    max-width: 100%;
  }

`;
const BlogHeading = styled.div`
  height: 50px;
  width: 100%;
  background-color: #02021e;
  font-size:1.2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 5px;
  overflow-y: scroll;
`;
