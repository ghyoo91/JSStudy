function solution(info, edges) {
    const graph = [];
    const visited = [];
    const revisit = [];
    let status = [0, 0]; // 양, 늑대
    let left = [0];
    let answer = 0;

    edges.forEach(val => {
        if (!graph[val[0]]) {
            graph[val[0]] = [val[1]];
        } else {
            graph[val[0]].push(val[1]);
        }
    });

    // console.log(graph);

    while (left.length !== 0) {
        const node = left.shift();

        console.log(node);
        console.log(left);

        if (info[node] === 1) {
            status[1]++;

            if (status[0] <= status[1]) {
                status[1]--;
                revisit.push(node);
                // left = [...left, node];
                continue;
            }
        } else {
            status[0]++;
        }

        if (visited.indexOf(node) === -1) {
            visited.push(node);

            if (graph[node]) {
                left = [
                    ...graph[node],
                    ...left
                ];
            }
        }
    }

    console.log(visited);

    return answer;
}

console.log(solution([0,0,1,1,1,0,1,0,1,0,1,1], [[0,1],[1,2],[1,4],[0,8],[8,7],[9,10],[9,11],[4,3],[6,5],[4,6],[8,9]]));
// console.log(solution([0,1,0,1,1,0,1,0,0,1,0], [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[6,9],[9,10]]));
