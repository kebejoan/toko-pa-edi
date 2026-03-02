import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeaderToko } from '@/app/components';
import { useCart } from '@/context/CartContext';
import { useSession } from 'next-auth/react';
import { MainHeader } from '@/app/components/Header';


// Mock next-auth useSession
jest.mock('next-auth/react', () => ({
    ...jest.requireActual('next-auth/react'),
    useSession: jest.fn(),
}));

// (Optional) Mock useCart if it's part of the same test
jest.mock('../../context/CartContext', () => ({
    useCart: () => ({
        totalItems: 0,
    }),
}));

describe('Header Toko', () => {
    it('renders component Top Header and Main Header', () => {
        (useSession as jest.Mock).mockReturnValue({
            data: null,
            status: 'unauthenticated',
        });

        render(<HeaderToko />);

        expect(screen.getByTestId('top-header')).toBeInTheDocument();
        expect(screen.getByTestId('main-header')).toBeInTheDocument();
    });
});

describe('Main Header', () => {

    it('renders "Masuk" button when unauthenticated', async () => {
        (useSession as jest.Mock).mockReturnValue({
            data: null,
            status: 'unauthenticated',
        });

        render(<MainHeader />);

        expect(screen.getByTestId('masuk-button')).toBeInTheDocument();
        expect(screen.queryByTestId('keluar-button')).not.toBeInTheDocument();
        expect(screen.queryByTestId('admin-button')).not.toBeInTheDocument();
    });

    it('renders "Keluar" button when authenticated', async () => {
        (useSession as jest.Mock).mockReturnValue({
            data: {
                user: {
                    name: 'Test Admin',
                    email: 'admin@example.com',
                    role: 'user', // ✅ THIS is what your component checks
                },  
            },
            status: 'authenticated',
        });

        render(<MainHeader />);

        expect(screen.getByTestId('keluar-button')).toBeInTheDocument();
        expect(screen.queryByTestId('masuk-button')).not.toBeInTheDocument();
        expect(screen.queryByTestId('admin-button')).not.toBeInTheDocument();
    });

    it('renders "Admin" button when authenticated and role is admin', async () => {
        (useSession as jest.Mock).mockReturnValue({
            data: {
                user: {
                    name: 'Test Admin',
                    email: 'admin@example.com',
                    role: 'admin',
                },
            },
            status: 'authenticated',
        });

        render(<MainHeader />);

        expect(screen.getByTestId('keluar-button')).toBeInTheDocument();
        expect(screen.getByTestId('admin-button')).toBeInTheDocument();
        expect(screen.queryByTestId('masuk-button')).not.toBeInTheDocument();
    });
});
