## Benchmarks


## How to use

Install [wrk](https://github.com/wg/wrk) - how to install [guide](https://github.com/wg/wrk/wiki/Installing-Wrk-on-Linux)

Install TypeScript globally

```
npm install -g typescript
```

Clone project then enter to the directory

```
git clone https://github.com/ktutnik/benchmark.git
cd benchmark
```

Compile project

```
tsc
```

Run the Makefile to start benchmark benchmark

```
make
```

## Result

```
server/express.js
Running 30s test @ http://127.0.0.1:5000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.64ms    3.01ms 122.42ms   97.66%
    Req/Sec     1.08k   624.95     2.60k    51.08%
  385683 requests in 30.08s, 87.54MB read
  Socket errors: connect 156, read 133, write 0, timeout 0
Requests/sec:  12819.92
Transfer/sec:      2.91MB

server/koa.js
Running 30s test @ http://127.0.0.1:5000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    11.73ms    1.77ms  85.56ms   97.57%
    Req/Sec     1.71k     0.92k    3.03k    47.75%
  613661 requests in 30.05s, 91.30MB read
  Socket errors: connect 156, read 133, write 0, timeout 0
  Non-2xx or 3xx responses: 613661
Requests/sec:  20423.53
Transfer/sec:      3.04MB

server/plumier.js
Running 30s test @ http://127.0.0.1:5000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    14.90ms    2.52ms 119.49ms   96.67%
    Req/Sec     1.35k   716.44    10.38k    51.51%
  483738 requests in 30.10s, 79.81MB read
  Socket errors: connect 156, read 131, write 0, timeout 0
Requests/sec:  16069.71
Transfer/sec:      2.65MB
```
