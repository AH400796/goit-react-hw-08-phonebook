import { Wrapper } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/Navigation';

export default function SharedLayout() {
  return (
    <Wrapper>
      <header>
        <Navigation />
        <UserMenu />
      </header>
      <main>
        <Suspense fallback={<p>Wait...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
}
