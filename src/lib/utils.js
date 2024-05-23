export function consoleTable(data){
  data = data.reduce((instance, {InstanceId, ...data}) => { instance[InstanceId] = data; return instance}, {})
  console.table(data)
}
