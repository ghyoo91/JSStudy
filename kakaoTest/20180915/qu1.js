function solution(record) {
  let result = [];
  let result_id = [];
  let db = [];

  record.forEach((item) => {
    let command = item.split(" ")[0];
    let id = item.split(" ")[1];
    let name = item.split(" ")[2];

    if(command === "Enter") {
      let tmp = false;
      console.log(db.indexOf(id));
      for(let i=0;i<db.length;i++) {
        if(db[i][0] === id) {
          db[i][1] = name;
          tmp = true;
          break;
        }
      }
      if(tmp === false) {
        db.push([id, name]);
      }
      result_id.push([id, 0]);
    } else if(command === "Leave") {
      result_id.push([id, 1]);
    } else {
      for(let i=0;i<db.length;i++) {
        if(db[i][0] === id) {
          db[i][1] = name;
          break;
        }
      }
    }
  });

  result_id.forEach((item) => {
    let fin_name = db.find((db_item) => {
      return db_item[0] === item[0];
    })[1];

    if(item[1] === 0) {
      result.push(fin_name + "님이 들어왔습니다.");
    } else {
      result.push(fin_name + "님이 나갔습니다.");
    }
  });
  return result;
}

(function(){
  let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
  // result
  // Prodo님이 들어왔습니다., Ryan님이 들어왔습니다., Prodo님이 나갔습니다., Prodo님이 들어왔습니다.

  console.log(solution(record));
})();
