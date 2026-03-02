import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FooterToko } from '@/app/components';

describe('FooterToko', () => {
    it('renders the footer text correctly', () => {
        render(<FooterToko />);
        const footerElement = screen.getByText(/toko pak edi/i);
        expect(footerElement).toBeInTheDocument();
    });
});