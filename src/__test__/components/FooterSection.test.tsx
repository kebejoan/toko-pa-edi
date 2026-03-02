import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FooterSect from '@/app/components/FooterSection';

describe('FooterToko', () => {
    it('renders the footer text correctly', () => {
        render(<FooterSect />);
        const footerElement = screen.getByText(/Footer Section/i);
        expect(footerElement).toBeInTheDocument();
    });
});