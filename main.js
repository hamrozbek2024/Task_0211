// 1-MASALA: Dijkstra (Eng qisqa yo‘l)
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let idx = 0;

const n = Number(input[idx++]);
const m = Number(input[idx++]);

const g = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const u = Number(input[idx++]);
  const v = Number(input[idx++]);
  const w = Number(input[idx++]);
  g[u].push([v, w]);
  g[v].push([u, w]);
}

const dist = Array(n + 1).fill(Infinity);
dist[1] = 0;

const pq = [[0, 1]];

while (pq.length) {
  pq.sort((a, b) => a[0] - b[0]);
  const [d, u] = pq.shift();
  if (d > dist[u]) continue;

  for (const [v, w] of g[u]) {
    if (dist[v] > d + w) {
      dist[v] = d + w;
      pq.push([dist[v], v]);
    }
  }
}

console.log(dist[n]);
