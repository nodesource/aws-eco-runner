export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function consoleTable(data){
  data = data.reduce((instance, {InstanceId, ...data}) => { instance[InstanceId] = data; return instance}, {})
  console.table(data)
}
