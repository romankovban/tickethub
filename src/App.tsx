import { FC } from 'react';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="container">
      <h3>
        <strong>
          <a href="index.html">Challenge Tickets</a>
        </strong>
      </h3>
      <hr />
      <h4>Select an event</h4>
      <hr />
      <div className="row">
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1521202649764-test-pos-DA32F77A-C542-41B7-81C4-43091924255B.jpeg"
              width="100%"
            />
          </a>
        </div>
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1520277905667-test-pos-All_access_640x640-min.jpg"
              width="100%"
            />
          </a>
        </div>
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1519768708978-test-pos-rompiendo-cabezas-640-min.jpg"
              width="100%"
            />
          </a>
        </div>
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1519139052461-test-pos-BANN.jpg"
              width="100%"
            />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1521202649764-test-pos-DA32F77A-C542-41B7-81C4-43091924255B.jpeg"
              width="100%"
            />
          </a>
        </div>
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1520277905667-test-pos-All_access_640x640-min.jpg"
              width="100%"
            />
          </a>
        </div>
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1519768708978-test-pos-rompiendo-cabezas-640-min.jpg"
              width="100%"
            />
          </a>
        </div>
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1519139052461-test-pos-BANN.jpg"
              width="100%"
            />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1521202649764-test-pos-DA32F77A-C542-41B7-81C4-43091924255B.jpeg"
              width="100%"
            />
          </a>
        </div>
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1520277905667-test-pos-All_access_640x640-min.jpg"
              width="100%"
            />
          </a>
        </div>
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1519768708978-test-pos-rompiendo-cabezas-640-min.jpg"
              width="100%"
            />
          </a>
        </div>
        <div className="col-sm-3 event-list">
          {' '}
          <a href="event.html">
            {' '}
            <img
              src="https://cdn.boletius.com/images/1519139052461-test-pos-BANN.jpg"
              width="100%"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
