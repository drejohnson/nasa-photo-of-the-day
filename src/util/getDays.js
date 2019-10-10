function formatDate(d) {
  let dd = d.getDate() - 1;
  let mm = d.getMonth() + 1;
  let yyyy = d.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  d = `${yyyy}-${mm}-${dd}`;
  return d;
}

export default function getDays(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let d = new Date();
    d.setDate(d.getDate() - i);
    result.push(formatDate(d));
  }

  return result;
}
