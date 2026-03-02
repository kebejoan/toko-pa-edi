import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubTitle, { ConvertPrice } from '@/app/components/Utils';
import { truncate } from '@/app/components/Utils';

describe('SubTitle', () => {
    it('renders the title correctly', () => {
        const title = "The Title";
        render(<SubTitle title={title} isActive={true} />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });
    
    it('renders underline when isActive is true', () => {
        render(<SubTitle title="Hello" isActive={true} />);
        expect(screen.getByTestId('underline-wrapper')).toBeInTheDocument();
    });

    it('does not render underline when isActive is false', () => {
        render(<SubTitle title="Hello" isActive={false} />);
        expect(screen.queryByTestId('underline-wrapper')).toBeNull();
    });

    it('renders "Title" when pass nothing to the title', () => {
        const active = true;

        render(<SubTitle isActive = {active}/>);
        const subTitleElement = screen.getByText("Title");
        expect(subTitleElement).toBeInTheDocument();
    });
});

describe('truncate', () => {
    it('returns the full string if under the max length', () => {
        const result = truncate('Short text', 20);
        expect(result).toBe('Short text');
    });

    it('truncates the string if it exceeds the max length', () => {
    const result = truncate('This is a very long string that needs to be truncated', 20);
    expect(result).toBe('This is a very long ...');
    });

    it('uses default max length of 40 when not provided', () => {
    const result = truncate('A'.repeat(50));
    expect(result).toBe('A'.repeat(40) + '...');
    });

    it('returns the original string if equal to max length', () => {
    const text = 'A'.repeat(40);
    const result = truncate(text);
    expect(result).toBe(text);
    });
});

describe('ConvertPrice', () => {
    const converter = new ConvertPrice();

    it('converts USD to IDR correctly', () => {
        expect(converter.USDtoIDR(1)).toBe(17000);
        expect(converter.USDtoIDR(2.5)).toBe(42500);
    });

    it('calculates marked-up IDR correctly', () => {
        expect(converter.MarkedUpIDR(1)).toBe(17000 * 1.4);
    });

    it('formats IDR correctly from USD', () => {
        expect(converter.FormattedPrice(1).replace(/\s/g, '')).toBe('Rp17.000');
        expect(converter.FormattedPrice(1).replace(/\s/g, '')).toBe('Rp17.000');
    });

    it('formats marked-up IDR correctly from USD', () => {
        expect(converter.FormattedPrice(1).replace(/\s/g, '')).toBe('Rp17.000');
    });

    it('converts IDR to USD correctly (rounded down)', () => {
        expect(converter.IDRtoUSD(17000)).toBe(1);
        expect(converter.IDRtoUSD(25000)).toBe(1); // floor(25000/17000) = 1
        expect(converter.IDRtoUSD(34000)).toBe(2);
    });
    });
