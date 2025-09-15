import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import {
    HeaderContainer,
    MenuContainer,
    HeaderLink,
    HeaderLoginButton,
    LogoHeader,
    MobileMenuIcon,
    MobileMenu,
} from './styles';

const orange = '#FBA63D';

export default function Header() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: 'Início', to: '/' },
        { label: 'Ferramentas', to: '/ferramentas' },
    ];

    return (
        <>
            <HeaderContainer>
                <LogoHeader src={require('./assets/logo.png')} alt="Logo" />
                
                <MenuContainer>
                    <Stack direction="row" spacing={4} alignItems="center">
                        {navItems.map(({ label, to }) => {
                            const isActive = location.pathname === to;
                            return (
                                <Link
                                    key={to}
                                    to={to}
                                    style={{
                                        textDecoration: 'none',
                                        pointerEvents: isActive ? 'none' : 'auto',
                                    }}
                                >
                                    <HeaderLink sx={{ color: isActive ? orange : '#fff' }}>
                                        {label}
                                    </HeaderLink>
                                </Link>
                            );
                        })}
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <HeaderLoginButton variant="contained">
                                Login
                            </HeaderLoginButton>
                        </Link>
                    </Stack>
                </MenuContainer>

                <MobileMenuIcon onClick={() => setOpen(true)}>☰</MobileMenuIcon>
            </HeaderContainer>

            {open && (
                <MobileMenu>
                    <div
                        className="close-button"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </div>
                    <Stack direction="column" spacing={2}>
                        {navItems.map(({ label, to }) => {
                            const isActive = location.pathname === to;
                            return (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={() => setOpen(false)}
                                    style={{
                                        textDecoration: 'none',
                                        pointerEvents: isActive ? 'none' : 'auto',
                                    }}
                                >
                                    <HeaderLink
                                        sx={{
                                            color: isActive ? orange : '#fff',
                                            fontSize: '1.2rem',
                                        }}
                                    >
                                        {label}
                                    </HeaderLink>
                                </Link>
                            );
                        })}
                        <Link
                            to="/login"
                            onClick={() => setOpen(false)}
                            style={{ textDecoration: 'none' }}
                        >
                            <HeaderLoginButton
                                variant="contained"
                                sx={{ mt: 2 }}
                                fullWidth
                            >
                                Login
                            </HeaderLoginButton>
                        </Link>
                    </Stack>
                </MobileMenu>
            )}
        </>
    );
}