import { check, sleep } from "k6";
import http from "k6/http";

export let options = {
  stages: [
    {duration: '2m', target: 300},
    {duration: '2m', target: 300},
    {duration: '2m', target: 500},
    {duration: '2m', target: 500},
    {duration: '2m', target: 700},
    {duration: '2m', target: 900},
    {duration: '2m', target: 1100},
    {duration: '2m', target: 1200},
    {duration: '2m', target: 1400},
    {duration: '2m', target: 1000},
    {duration: '2m', target: 800},
    {duration: '2m', target: 400},
    {duration: '2m', target: 0}, // Recovery
  ],
};

export default function() {
  let propertyId = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://localhost:3008/property/${propertyId}/images`);
  check(res, {
    "Status 200": (r) => r.status === 200,
    "Error Rate": (r) => r.status !== 200,
    "Transaction time < 2000ms:": (r) => r.timings.duration > 2000,
  });

  sleep(1);
};