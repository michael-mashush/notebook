import {
  memo,
  type FunctionComponent
} from 'react';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  Footer,
  FooterContent,
  Link,
  Paragraph
} from 'shared/ui';

const MainFooter: FunctionComponent = () => {

  return (
    <Footer>
      <FooterContent>
        <address>
          <Paragraph color="muted">
            Created by <Link href={ROUTER_CONFIG.GITHUB_PROFILE_PAGE.PATH} target="_blank" underline="always">mashush</Link>
          </Paragraph>
        </address>
      </FooterContent>
    </Footer>
  );

};

export default memo(MainFooter);