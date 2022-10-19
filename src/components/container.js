import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRockets } from "../Redux/forexslice";

function GroupExample() {
  const rocketsList = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  //   const testArray = [
  //     {
  //       title: "Card title",
  //       description: "Some description",
  //       date: "Last updated 3 mins ago",
  //     },
  //     {
  //       title: "Card title",
  //       description: "Some description",
  //       date: "Last updated 3 mins ago",
  //     },
  //     {
  //       title: "Card title",
  //       description: "Some description",
  //       date: "Last updated 3 mins ago",
  //     },
  //     {
  //       title: "Card title",
  //       description: "Some description",
  //       date: "Last updated 3 mins ago",
  //     },
  //     {
  //       title: "Card title",
  //       description: "Some description",
  //       date: "Last updated 3 mins ago",
  //     },
  //     {
  //       title: "Card title",
  //       description: "Some description",
  //       date: "Last updated 3 mins ago",
  //     },
  //     {
  //       title: "Card title",
  //       description: "Some description",
  //       date: "Last updated 3 mins ago",
  //     },
  //     {
  //       title: "Card title",
  //       description: "Some description",
  //       date: "Last updated 3 mins ago",
  //     },
  //   ];
  return (
    <CardGroup>
      {rocketsList.map((card) => {
        return (
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{card.ticker}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{card.date}</small>
            </Card.Footer>
          </Card>
        );
      })}
    </CardGroup>
  );
}

export default GroupExample;
