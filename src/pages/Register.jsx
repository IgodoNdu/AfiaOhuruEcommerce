import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://burst.shopifycdn.com/photos/model-in-gold-fashion.jpg?width=373&format=pjpg&exif=1&iptc=1') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 30%;
    padding: 20%;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px; 20px;
    margin: 3px 0px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP FOR AN ACCOUNT</Title>
        <Form>
            <Input placeholder='name' />
            <Input placeholder='last name' />
            <Input placeholder='username' />
            <Input placeholder='email' />
            <Input placeholder='password' />
            <Input placeholder='confirm password' />
            <Agreement>A little text on data processing (privacy policy) goes here. A little text on data processing (privacy policy) goes here</Agreement>
            <Button>SIGN UP</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

