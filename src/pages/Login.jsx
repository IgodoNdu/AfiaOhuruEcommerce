import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://burst.shopifycdn.com/photos/slow-fashion-coat.jpg?width=373&format=pjpg&exif=1&iptc=1') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 20%;
    padding: 20%;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px; 20px;
    margin: 3px 0px;
    background-color: teal;
    margin-bottom: 10px;
    color: white;
    cursor: pointer;
`;
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder='username' />
            <Input placeholder='password' />
            <Button>LOGIN</Button>
            <Link>Forgot Password?</Link>
            <Link>Don't have an account? Sign-up!!</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
