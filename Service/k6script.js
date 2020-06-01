import { check, sleep } from "k6";
import http from "k6/http";

export let options = {
  stages: [
    {duration: '2m', target: 100},
    {duration: '2m', target: 100},
    {duration: '2m', target: 200},
    {duration: '2m', target: 200},
    {duration: '2m', target: 300},
    {duration: '2m', target: 400},
    {duration: '2m', target: 400},
    {duration: '2m', target: 500},
    {duration: '2m', target: 700},
    {duration: '2m', target: 1000},
    {duration: '2m', target: 1000},
    {duration: '2m', target: 0}, // Recovery
  ],
};

export default function() {
  let propertyID = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://localhost:3008/property/${propertyID}`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });

  sleep(1);
};