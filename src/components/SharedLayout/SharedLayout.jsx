import { Wrapper } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/Navigation';
import Skeleton from 'components/Skeleton';

export default function SharedLayout() {
  return (
    <Wrapper>
      <header>
        <Navigation />
        <UserMenu />
      </header>
      <main>
        <Suspense fallback={<Skeleton />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
}
