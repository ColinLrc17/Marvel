import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

test('renders Contact us message', () => {
    // when

    // then
    render(<ContactPage />);

    // expect the document title to be "Contact | Marvel App"
    expect(document.title).toEqual("Contact | Marvel App");

    // expect the heading and the paragraph to be in the document
    const h2Element = screen.getByRole('heading', { level: 2, name: "Contact Us" });
    const pElement = screen.getByText('Feel free to contact us at');

    expect(h2Element).toBeInTheDocument();
    expect(pElement).toBeInTheDocument();

    // expect to have a mailto link
    const mailAddress = "marvelApp@gmail.com";
    const mailtoLink = screen.getByRole('link', { name: mailAddress });
    expect(mailtoLink).toBeInTheDocument();
    expect(mailtoLink).toHaveAttribute('href', `mailto:${mailAddress}`);
    expect(mailtoLink).toHaveTextContent(mailAddress);
});
