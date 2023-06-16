import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <div className="container">
      <h3>
        <strong>
          <Link to="/">Challenge Tickets</Link>
        </strong>
      </h3>
      <hr />
      {children}
    </div>
  );
};
