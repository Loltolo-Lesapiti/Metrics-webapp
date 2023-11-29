import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemSuffix,
  Chip,
  Card,
  Typography,
} from "@material-tailwind/react";

const CurrencyExchange = () => {
  const currencies = useSelector((state) => state.currency.currency);
  const { currencyName } = useParams();
  return (
    <>
      {currencies
        /* eslint-disable */
        .filter((currency) => {
          if (currencyName === currency.bid) {
            return currency;
          }
        })
        .map((data) => (
          <Card className="w-50% mx-auto my-auto">
            <Typography variant="h4" color="blue-gray">
              Information on {data.ticker} currency excahnge
            </Typography>
            <List>
              <ListItem>
                Bid
                <ListItemSuffix>
                  <Chip
                    value={data.ask}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Open
                <ListItemSuffix>
                  <Chip
                    value={data.open}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Low
                <ListItemSuffix>
                  <Chip
                    value={data.low}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                High
                <ListItemSuffix>
                  <Chip
                    value={data.high}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Changes
                <ListItemSuffix>
                  <Chip
                    value={data.changes}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                Date
                <ListItemSuffix>
                  <Chip
                    value={data.date}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </List>
          </Card>
        ))}
    </>
  );
};

export default CurrencyExchange;
