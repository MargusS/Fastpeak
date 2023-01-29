import { fireEvent, render } from '@testing-library/react';
import App from '../App';
import RegistrationForm from "../components/registration/RegistrationForm";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));

describe("Account render form", () => {

  beforeAll(() => {
    render(<App />);
  });

  it('render inputs components', () => {
    const { getByLabelText } = render(<RegistrationForm />);
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByLabelText('Repeat Password')).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    const { getByText } = render(<RegistrationForm />);
    expect(getByText("Sign In")).toBeInTheDocument();
  });
});

describe("Funcionality", () => {
  it('handle submit call from click', () => {

    const spyHandler = jest.spyOn(console, "log")

    const { getByText } = render(<RegistrationForm />);
    const button = getByText("Sign In");
    fireEvent.click(button)

    expect(spyHandler).toHaveBeenCalled();
  })
})