export function consoleTable(data) {
  const instances = data.reduce((instance, { InstanceId, ...data }) => {
    instance[InstanceId] = data;
    return instance;
  }, {});
  console.table(instances);
}
