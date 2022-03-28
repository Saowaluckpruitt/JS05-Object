const state1 = { username: "john", point: 100, loading: true };
let satte2 = {};
for (let name in state1) {
  satte2[name] = state1[name];
}
satte2.point = 75;
satte2.loading = "false";
Object.assign(satte2, { success: "true" });
console.log(satte2);
console.log(state1);
