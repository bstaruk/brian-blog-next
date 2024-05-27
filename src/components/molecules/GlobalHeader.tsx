'use client';

import { usePathname } from 'next/navigation';
import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';
import Wrapper from '@/components/atoms/Wrapper';

export type GlobalHeaderProps = {
  title?: string;
};

type MenuLinkFields = {
  href: string;
  title: string;
};

const menuLinks: MenuLinkFields[] = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/posts',
    title: 'Posts',
  },
];

const GlobalHeader = ({ title }: GlobalHeaderProps): JSX.Element => {
  const pathname = usePathname();

  return (
    <Wrapper className="flex flex-col gap-3 mb-6" tagName="header">
      <Text variant="h1" tagName="h1" className="font-semibold text-zinc-100">{title}</Text>

      <ul className="flex items-center gap-6">
        {menuLinks.map((link, linkIndex) => (
          <Text key={linkIndex} tagName="li">
            {pathname === link.href ? (
              <strong>{link.title}</strong>
            ) : (
              <Link href={link.href}>{link.title}</Link>
            )}
          </Text>
        ))}
      </ul>
    </Wrapper>
  );
};

export default GlobalHeader;
