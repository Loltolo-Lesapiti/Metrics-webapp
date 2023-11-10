import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrencies } from '../../Redux/forexslice';

export default function Forexcontainer() {
  const [searchInput, setSearchInput] = useState('');
  const currencies = useSelector((state) => state.currency.currency);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    currencies.filter((currency) => currency.ticker.match(searchInput));
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-col items-center mt-6">
        <motion.div
          whileHover={{
            scale: 1.1,
            border: 'solid indigo-600',
            ease: 'easeInOut',
            delay: 1000,
          }}
          className="flex w-full justify-center md:w-3/4 "
        >
          <Input
            type="search"
            placeholder="Search by currency name i.e USD"
            aria-label="Search"
            onChange={handleChange}
            value={searchInput}
            className="pr-20 bg-slate-400 shadow-2xl shadow-slate-400/50 text-lg rounded-2xl"
            containerProps={{
              className: 'min-w-[288px]',
            }}
          />
        </motion.div>
      </div>
      {/* eslint-disable */}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3">
        {currencies
          .filter((currency) => {
            if (searchInput === "") {
              return currency;
            }
            if (
              currency.ticker
                .toLowerCase()
                .includes(searchInput.toLocaleLowerCase())
            ) {
              return currency;
            }
          })
          .slice(0, 6)
          .map((currency) => (
            <motion.Card
              whileHover={{
                x: 5,
                y: 5,
                type: "spring",
                stiffness: 100,
                ease: "linear",
                delay: 1000,
              }}
              className="mt-6 w-96 rounded border-solid border-indigo-600 bg-zinc-500 shadow-2xl shadow-zinc-500/50"
              key={currency.id}
            >
              <CardBody>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 640 512"
                >
                  <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
                </svg>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {currency.ticker}
                </Typography>
                <Typography>
                  The bidding price is {currency.bid}. Click on the currency to
                  view more details.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to={`/CurrencyExchange/${currency.bid}`}>
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2"
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </motion.Card>
          ))}
      </div>
    </>
  );
}
