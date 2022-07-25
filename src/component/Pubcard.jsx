import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Pubcard(pubdata) {
  pubdata = pubdata.pubdata;

  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="row">
          {pubdata.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
              <Card className="m-3">
                <Link
                  to={"/" + item.congressName.toLowerCase() + "/" + item.id}
                >
                  <Card.Body>
                    <Card.Title>Congress Name : {item.congressName}</Card.Title>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      {item.pubtitle}
                      <br />
                      <i> {item.pubauthors}</i>
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pubcard;
